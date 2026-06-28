<#
╔══════════════════════════════════════════════════════════════╗
║  Vibe Coding雷达 — 每周自动更新脚本                        ║
║  功能：Git 初始化 提交更新 推送到 GitHub                    ║
║  由 Windows 任务计划程序每周自动调用                       ║
╚══════════════════════════════════════════════════════════════╝
#>

# ===== 配置 =====
$projectPath = 'D:\源神\Vibe Coding雷达'
$gitHubUser = 'LPY0925'
$repoName = 'vibe-coding-radar'
$branchName = 'main'

# GitHub Token（从环境变量读取）
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

# ===== 初始化 Git =====
if (-not (Test-Path '.git')) {
    Write-Host '初始化 Git 仓库...' -ForegroundColor Yellow
    git init
    git checkout -b $branchName
    Write-Host 'Git 仓库已初始化' -ForegroundColor Green
} else {
    Write-Host 'Git 仓库已存在' -ForegroundColor Green
}

# ===== 设置远程仓库 =====
$remoteList = git remote
if ($remoteList -notcontains 'origin') {
    $remoteUrl = "https://${gitHubUser}:${gitHubToken}@github.com/${gitHubUser}/${repoName}.git"
    git remote add origin $remoteUrl
    Write-Host '远程仓库 origin 已添加' -ForegroundColor Green
} else {
    Write-Host '远程仓库 origin 已存在' -ForegroundColor Green
    $remoteUrl = "https://${gitHubUser}:${gitHubToken}@github.com/${gitHubUser}/${repoName}.git"
    git remote set-url origin $remoteUrl
}

# ===== 检查变更 =====
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
try {
    git push -u origin $branchName 2>&1
    Write-Host '已推送到 GitHub：' "${gitHubUser}/${repoName}" -ForegroundColor Green
} catch {
    Write-Error "推送失败：$_" -ForegroundColor Red
    exit 1
}

Write-Host ''
Write-Host 'Vibe Coding雷达 同步完成！' -ForegroundColor Green
Write-Host "https://github.com/${gitHubUser}/${repoName}" -ForegroundColor Cyan
