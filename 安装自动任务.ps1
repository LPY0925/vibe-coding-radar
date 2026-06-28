<#
╔══════════════════════════════════════════════════════════════╗
║  Vibe Coding雷达 — 安装每周自动任务                         ║
║  作用：注册 Windows 任务计划程序，每周自动运行更新脚本      ║
║  以管理员身份运行此脚本                                    ║
╚══════════════════════════════════════════════════════════════╝
#>

# 需要管理员权限
$currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
$isAdmin = (New-Object Security.Principal.WindowsPrincipal $currentUser).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Warning '请以管理员身份运行此脚本！'
    Write-Host '右键点击脚本 → 「以管理员身份运行」' -ForegroundColor Yellow
    pause
    exit
}

$projectPath = 'D:\源神\Vibe Coding雷达'
$scriptPath = Join-Path $projectPath '自动更新.ps1'
$taskName = 'Vibe Coding Radar Weekly Update'

Write-Host '正在注册 Windows 定时任务...' -ForegroundColor Cyan

# 执行策略
$currentPolicy = Get-ExecutionPolicy
if ($currentPolicy -eq 'Restricted') {
    Write-Host '设置执行策略为 RemoteSigned...' -ForegroundColor Yellow
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
}

# 创建任务
$action = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument "-NoProfile -ExecutionPolicy Bypass -File '$scriptPath'"
$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At 10:00
$user = "$env:USERDOMAIN`:USERNAME"

try {
    Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -User $user -RunLevel Limited -Force
    Write-Host '定时任务注册成功！' -ForegroundColor Green
    Write-Host ''
    Write-Host '运行计划：每周一 上午 10:00' -ForegroundColor Cyan
    Write-Host '脚本路径：' $scriptPath -ForegroundColor Cyan
    Write-Host ''
    Write-Host '如需手动运行：' -ForegroundColor Yellow
    Write-Host '  Start-ScheduledTask -TaskName "Vibe Coding Radar Weekly Update"' -ForegroundColor White
} catch {
    Write-Error "注册失败：$_"
}

pause
