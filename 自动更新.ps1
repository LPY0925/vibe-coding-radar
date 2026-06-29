<#
╔══════════════════════════════════════════════════════════════╗
║  Vibe Coding雷达 — 每周校验与同步脚本                       ║
║  功能：校验数据数量与关键交互 → 提交更新 → 推送到 GitHub    ║
║  由 Windows 任务计划程序每周自动调用                       ║
╚══════════════════════════════════════════════════════════════╝
#>

$ErrorActionPreference = 'Stop'

# ===== 配置 =====
$projectPath = 'D:\源神\Vibe Coding雷达'
$gitHubUser = if ($env:GITHUB_USER) { $env:GITHUB_USER } else { 'LPY0925' }
$repoName = if ($env:VIBE_RADAR_REPO) { $env:VIBE_RADAR_REPO } else { 'vibe-coding-radar' }
$branchName = if ($env:VIBE_RADAR_BRANCH) { $env:VIBE_RADAR_BRANCH } else { 'main' }
$promptPath = Join-Path $projectPath '自动更新提示词.md'

function Write-Section($message) {
    Write-Host ''
    Write-Host "== $message ==" -ForegroundColor Cyan
}

function Assert-MinCount($name, $count, $min) {
    if ($count -lt $min) {
        throw "${name} 数量不足：当前 ${count}，至少需要 ${min}"
    }
    Write-Host "${name}: ${count}" -ForegroundColor Green
}

function Test-VibeRadarProject {
    Write-Section '校验页面数据与关键功能'

    $htmlPath = Join-Path $projectPath '首页.html'
    $cssPath = Join-Path $projectPath '样式.css'
    $jsPath = Join-Path $projectPath '交互.js'

    foreach ($file in @($htmlPath, $cssPath, $jsPath)) {
        if (-not (Test-Path $file)) {
            throw "缺少必要文件：$file"
        }
    }

    $html = Get-Content -LiteralPath $htmlPath -Encoding utf8 -Raw
    $js = Get-Content -LiteralPath $jsPath -Encoding utf8 -Raw

    if (-not $html.Contains('id="复制自动更新提示词"')) {
        throw '首页.html 缺少右上角「复制自动更新提示词」按钮'
    }
    if (-not $html.Contains('data-active-detail="why"')) {
        throw '首页.html 缺少详情页签状态 data-active-detail'
    }
    if (-not $js.Contains('function 获取自动更新提示词')) {
        throw '交互.js 缺少自动更新提示词复制逻辑'
    }

    $starMatch = [regex]::Match($js, 'const 明星数据 = \[(?s)(.*?)\];\s*const 状态')
    if (-not $starMatch.Success) {
        throw '无法定位 明星数据'
    }

    $starBlock = $starMatch.Groups[1].Value
    $projectBlock = $js.Substring(0, $js.IndexOf('const 明星数据'))

    $totalStars = ([regex]::Matches($starBlock, '^\s*\["\d+",', [System.Text.RegularExpressions.RegexOptions]::Multiline)).Count
    $aiTools = ([regex]::Matches($starBlock, '"AI 工具"\]')).Count
    $devTools = ([regex]::Matches($starBlock, '"开发工具"\]')).Count
    $cloneable = ([regex]::Matches($starBlock, '"适合复刻"\]')).Count

    Assert-MinCount '本周增长' $totalStars 10
    Assert-MinCount 'AI 工具' $aiTools 10
    Assert-MinCount '开发工具' $devTools 10
    Assert-MinCount '适合复刻' $cloneable 10

    Assert-MinCount '最好玩' ([regex]::Matches($projectBlock, '分类: "最好玩"')).Count 10
    Assert-MinCount '最好用' ([regex]::Matches($projectBlock, '分类: "最好用"')).Count 10
    Assert-MinCount '最好搓' ([regex]::Matches($projectBlock, '分类: "最好搓"')).Count 10

    $node = Get-Command node -ErrorAction SilentlyContinue
    if ($node) {
        & node --check $jsPath
        if ($LASTEXITCODE -ne 0) {
            throw '交互.js 语法检查失败'
        }
        Write-Host '交互.js 语法检查通过' -ForegroundColor Green
    } else {
        Write-Warning '未找到 node，已跳过 JavaScript 语法检查'
    }

    if (Test-Path $promptPath) {
        Write-Host "自动更新提示词：$promptPath" -ForegroundColor Green
    } else {
        Write-Warning "未找到自动更新提示词文件：$promptPath"
    }
}

# ===== GitHub Token（从环境变量读取） =====
$gitHubToken = $env:GITHUB_TOKEN
if (-not $gitHubToken) {
    Write-Warning '未设置 GITHUB_TOKEN 环境变量！'
    Write-Warning '请在 PowerShell 中执行：'
    Write-Warning '  [Environment]::SetEnvironmentVariable(''GITHUB_TOKEN'', ''你的token'', ''User'')'
    exit 1
}

# ===== 进入项目目录 =====
Set-Location $projectPath
Write-Host '项目目录：' $projectPath -ForegroundColor Cyan

Test-VibeRadarProject

# ===== 初始化 Git =====
Write-Section '检查 Git 仓库'
if (-not (Test-Path '.git')) {
    Write-Host '初始化 Git 仓库...' -ForegroundColor Yellow
    git init
    git checkout -B $branchName
    Write-Host 'Git 仓库已初始化' -ForegroundColor Green
} else {
    Write-Host 'Git 仓库已存在' -ForegroundColor Green
}

# ===== 设置远程仓库 =====
$publicRemoteUrl = "https://github.com/${gitHubUser}/${repoName}.git"
$remoteList = git remote
if ($remoteList -notcontains 'origin') {
    git remote add origin $publicRemoteUrl
    Write-Host '远程仓库 origin 已添加' -ForegroundColor Green
} else {
    git remote set-url origin $publicRemoteUrl
    Write-Host '远程仓库 origin 已更新为无 Token 地址' -ForegroundColor Green
}

# ===== 检查变更 =====
Write-Section '检查文件变更'
$status = git status --porcelain
if (-not $status) {
    Write-Host '没有检测到文件变更，跳过提交。' -ForegroundColor Yellow
    exit 0
}

Write-Host '检测到以下变更：' -ForegroundColor Cyan
git status --short

# ===== 提交 =====
git add -A
$today = Get-Date -Format 'yyyy-MM-dd'
$commitMsg = "每周更新：${today} - Vibe Coding雷达 自动同步"
git commit -m $commitMsg
Write-Host '提交成功：' $commitMsg -ForegroundColor Green

# ===== 推送 =====
Write-Section '推送到 GitHub'
$authToken = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${gitHubUser}:${gitHubToken}"))
try {
    git -c "http.https://github.com/.extraheader=Authorization: Basic $authToken" push -u origin $branchName 2>&1
    Write-Host '已推送到 GitHub：' "${gitHubUser}/${repoName}" -ForegroundColor Green
} catch {
    Write-Error "推送失败：$_"
    exit 1
}

Write-Host ''
Write-Host 'Vibe Coding雷达 校验与同步完成！' -ForegroundColor Green
Write-Host "https://github.com/${gitHubUser}/${repoName}" -ForegroundColor Cyan
