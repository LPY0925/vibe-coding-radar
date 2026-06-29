<#
╔══════════════════════════════════════════════════════════════╗
║  Vibe Coding雷达 — 安装每周校验与同步任务                   ║
║  作用：注册 Windows 任务计划程序，每周运行自动更新脚本      ║
║  以管理员身份运行此脚本                                    ║
╚══════════════════════════════════════════════════════════════╝
#>

$ErrorActionPreference = 'Stop'

# 需要管理员权限
$currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
$isAdmin = (New-Object Security.Principal.WindowsPrincipal $currentUser).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Warning '请以管理员身份运行此脚本！'
    Write-Host '右键点击脚本 → 「以管理员身份运行」' -ForegroundColor Yellow
    pause
    exit 1
}

$projectPath = 'D:\源神\Vibe Coding雷达'
$scriptPath = Join-Path $projectPath '自动更新.ps1'
$promptPath = Join-Path $projectPath '自动更新提示词.md'
$taskName = 'Vibe Coding雷达 每周校验与同步'

if (-not (Test-Path $scriptPath)) {
    throw "找不到自动更新脚本：$scriptPath"
}

Write-Host '正在注册 Windows 定时任务...' -ForegroundColor Cyan

# 执行策略
$currentPolicy = Get-ExecutionPolicy
if ($currentPolicy -eq 'Restricted') {
    Write-Host '设置执行策略为 RemoteSigned...' -ForegroundColor Yellow
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
}

# 创建任务
$action = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$scriptPath`""
$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At 10:00
$user = "$env:USERDOMAIN\$env:USERNAME"

try {
    Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -User $user -RunLevel Limited -Force
    Write-Host '定时任务注册成功！' -ForegroundColor Green
    Write-Host ''
    Write-Host '运行计划：每周一 上午 10:00' -ForegroundColor Cyan
    Write-Host '任务名称：' $taskName -ForegroundColor Cyan
    Write-Host '脚本路径：' $scriptPath -ForegroundColor Cyan
    if (Test-Path $promptPath) {
        Write-Host 'Agent 周更提示词：' $promptPath -ForegroundColor Cyan
    }
    Write-Host ''
    Write-Host '如需手动运行：' -ForegroundColor Yellow
    Write-Host "  Start-ScheduledTask -TaskName '$taskName'" -ForegroundColor White
    Write-Host ''
    Write-Host '提示：这个计划任务负责校验、提交和推送。内容更新可先用页面右上角按钮复制提示词交给 agent 执行。' -ForegroundColor Yellow
} catch {
    Write-Error "注册失败：$_"
    exit 1
}

pause
