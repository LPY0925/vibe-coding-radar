<#
╔══════════════════════════════════════════════════════════════╗
║  Vibe Coding雷达 — 每周自动更新脚本                        ║
║  功能：Git 初始化 → 提交更新 → 推送到 GitHub               ║
║  由 Windows 任务计划程序每周自动调用                      ║
╚══════════════════════════════════════════════════════════════╝
#>

# ===== 配置 =====
$项目路径 = "D:\源神\Vibe Coding雷达"
$GitHub用户名 = ""  # ← 请填入你的 GitHub 用户名
$仓库名 = "vibe-coding-radar"
$分支名 = "main"

# GitHub Token（从环境变量读取，不要硬编码在脚本里）
$GitHubToken = $env:GITHUB_TOKEN
if (-not $GitHubToken) {
    Write-Warning "⚠ 未设置 GITHUB_TOKEN 环境变量！请在 PowerShell 中执行："
    Write-Warning "   [Environment]::SetEnvironmentVariable('GITHUB_TOKEN', '你的token', 'User')"
    Write-Warning "   然后重新打开 PowerShell 或重启电脑。"
    exit 1
}

# ===== 进入项目目录 =====
Set-Location $项目路径
Write-Host "📁 项目目录：$项目路径" -ForegroundColor Cyan

# ===== 初始化 Git（如未初始化）=====
if (-not (Test-Path ".git")) {
    Write-Host "🔧 初始化 Git 仓库..." -ForegroundColor Yellow
    git init
    git checkout -b $分支名
    Write-Host "✅ Git 仓库已初始化" -ForegroundColor Green
} else {
    Write-Host "✅ Git 仓库已存在" -ForegroundColor Green
}

# ===== 设置远程仓库（如未设置）=====
$远程列表 = git remote
if ($远程列表 -notcontains "origin") {
    $远程地址 = "https://${GitHub用户名}:${GitHubToken}@github.com/${GitHub用户名}/${仓库名}.git"
    git remote add origin $远程地址
    Write-Host "✅ 远程仓库 origin 已添加" -ForegroundColor Green
} else {
    Write-Host "✅ 远程仓库 origin 已存在" -ForegroundColor Green
    # 更新远程地址以包含 token（确保推送可用）
    $远程地址 = "https://${GitHub用户名}:${GitHubToken}@github.com/${GitHub用户名}/${仓库名}.git"
    git remote set-url origin $远程地址
}

# ===== 检查文件是否有变化 =====
$状态 = git status --porcelain
if (-not $状态) {
    Write-Host "📭 没有检测到文件变更，跳过提交。" -ForegroundColor Yellow
    exit 0
}

Write-Host "📝 检测到以下变更：" -ForegroundColor Cyan
git status --short

# ===== 添加所有变更 =====
git add -A
Write-Host "✅ 文件已暂存" -ForegroundColor Green

# ===== 提交 =====
$本周日期 = Get-Date -Format "yyyy-MM-dd"
$提交信息 = "每周更新：${本周日期} — Vibe Coding雷达 自动同步"
git commit -m $提交信息
Write-Host "✅ 提交成功：$提交信息" -ForegroundColor Green

# ===== 推送到 GitHub =====
try {
    git push -u origin $分支名 2>&1
    Write-Host "✅ 已推送到 GitHub：${GitHub用户名}/${仓库名}" -ForegroundColor Green
} catch {
    Write-Error "❌ 推送失败：$_"
    Write-Host "💡 请检查：1. GitHub Token 是否正确  2. 仓库是否已创建" -ForegroundColor Yellow
    exit 1
}

# ===== 输出报告 =====
Write-Host ""
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  🎯 Vibe Coding雷达 同步完成！" -ForegroundColor Green
Write-Host "  仓库：https://github.com/${GitHub用户名}/${仓库名}" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════" -ForegroundColor Cyan
