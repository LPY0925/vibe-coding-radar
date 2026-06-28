<#
╔══════════════════════════════════════════════════════════════╗
║  Vibe Coding雷达 — 首次设置                                 ║
║  功能：初始化 Git → 创建 GitHub 仓库 → 推送代码             ║
╚══════════════════════════════════════════════════════════════╝
#>

$projectPath = 'D:\源神\Vibe Coding雷达'
Set-Location $projectPath

# 1. 输入 Token
$gitHubToken = Read-Host '请输入你的 GitHub Personal Access Token'
[Environment]::SetEnvironmentVariable('GITHUB_TOKEN', $gitHubToken, 'User')
Write-Host 'GITHUB_TOKEN 已保存到环境变量' -ForegroundColor Green

# 2. 输入用户名
$gitHubUser = Read-Host '请输入你的 GitHub 用户名'

# 3. 初始化 Git
git init
git checkout -b main

# 4. 创建 GitHub 仓库
$headers = @{
    Authorization = "token $gitHubToken"
    'Content-Type' = 'application/json'
}
$body = @{
    name = 'vibe-coding-radar'
    description = 'Vibe Coding雷达 - 每周帮你找到值得做的 AI 项目'
    private = $false
    auto_init = $false
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri 'https://api.github.com/user/repos' -Method Post -Headers $headers -Body $body
    Write-Host 'GitHub 仓库已创建' -ForegroundColor Green
} catch {
    Write-Warning '仓库创建失败，可能已存在。'
}

# 5. 添加远程仓库
$remoteUrl = "https://${gitHubUser}:${gitHubToken}@github.com/${gitHubUser}/vibe-coding-radar.git"
git remote add origin $remoteUrl

# 6. 首次提交
git add -A
git commit -m 'Initial commit: Vibe Coding Radar'

# 7. 推送
git push -u origin main
Write-Host '代码已推送到 GitHub！' -ForegroundColor Green
Write-Host "https://github.com/${gitHubUser}/vibe-coding-radar" -ForegroundColor Cyan

pause
