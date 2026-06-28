<#
╔══════════════════════════════════════════════════════════════╗
║  Vibe Coding雷达 — 安装每周自动任务                         ║
║  作用：注册 Windows 任务计划程序，每周自动运行更新脚本      ║
║  以管理员身份运行此脚本                                    ║
╚══════════════════════════════════════════════════════════════╝
#>

# 需要管理员权限
$当前用户 = [Security.Principal.WindowsIdentity]::GetCurrent()
$权限检查 = (New-Object Security.Principal.WindowsPrincipal $当前用户).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $权限检查) {
    Write-Warning "⚠ 请以管理员身份运行此脚本！"
    Write-Host "   右键点击脚本 → 「以管理员身份运行」" -ForegroundColor Yellow
    pause
    exit
}

$项目路径 = "D:\源神\Vibe Coding雷达"
$脚本路径 = Join-Path $项目路径 "自动更新.ps1"
$任务名 = "Vibe Coding Radar Weekly Update"

Write-Host "🔧 正在注册 Windows 定时任务..." -ForegroundColor Cyan

# PowerShell 执行策略允许运行脚本
$当前策略 = Get-ExecutionPolicy
if ($当前策略 -eq "Restricted") {
    Write-Host "   设置执行策略为 RemoteSigned..." -ForegroundColor Yellow
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
}

# 创建任务计划
$动作 = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$脚本路径`""

# 每周一上午 10:00 运行
$触发 = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At 10:00

# 以当前用户身份运行
$用户 = "$env:USERDOMAIN\$env:USERNAME"

# 注册任务
try {
    Register-ScheduledTask -TaskName $任务名 -Action $动作 -Trigger $触发 -User $用户 -RunLevel Limited -Force
    Write-Host "✅ 定时任务注册成功！" -ForegroundColor Green
    Write-Host ""
    Write-Host "📅 运行计划：每周一 上午 10:00" -ForegroundColor Cyan
    Write-Host "📁 脚本路径：$脚本路径" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "💡 如需手动运行：" -ForegroundColor Yellow
    Write-Host "   Start-ScheduledTask -TaskName '$任务名'" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 如需查看或修改：" -ForegroundColor Yellow
    Write-Host "   打开「任务计划程序」→ 任务计划程序库 → 找到 '$任务名'" -ForegroundColor White
} catch {
    Write-Error "❌ 注册失败：$_"
}

pause
