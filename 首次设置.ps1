<#
╔══════════════════════════════════════════════════════════════╗
║  Vibe Coding雷达 — 首次设置                                 ║
║  功能：保存 GitHub 配置 → 初始化 Git → 创建仓库 → 推送代码  ║
╚══════════════════════════════════════════════════════════════╝
#>

$ErrorActionPreference = 'Stop'

$projectPath = 'D:\源神\Vibe Coding雷达'
$repoName = 'vibe-coding-radar'
$branchName = 'main'
Set-Location $projectPath

# 1. 输入 Token
$secureToken = Read-Host '请输入你的 GitHub Personal Access Token' -AsSecureString
$tokenPtr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)
try {
    $gitHubToken = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($tokenPtr)
} finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($tokenPtr)
}

[Environment]::SetEnvironmentVariable('GITHUB_TOKEN', $gitHubToken, 'User')
Write-Host 'GITHUB_TOKEN 已保存到用户环境变量' -ForegroundColor Green

# 2. 输入用户名
$gitHubUser = Read-Host '请输入你的 GitHub 用户名'
[Environment]::SetEnvironmentVariable('GITHUB_USER', $gitHubUser, 'User')
Write-Host 'GITHUB_USER 已保存到用户环境变量' -ForegroundColor Green

# 3. 初始化 Git
if (-not (Test-Path '.git')) {
    git init
}
git checkout -B $branchName

# 4. 创建 GitHub 仓库
$headers = @{
    Authorization = "Bearer $gitHubToken"
    Accept = 'application/vnd.github+json'
    'Content-Type' = 'application/json; charset=utf-8'
}
$body = @{
    name = $repoName
    description = 'Vibe Coding雷达 - 每周帮新手找到值得做、做得出来、做完有反馈的 AI 项目'
    private = $false
    auto_init = $false
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri 'https://api.github.com/user/repos' -Method Post -Headers $headers -Body $body
    Write-Host ('GitHub 仓库已创建：' + $response.html_url) -ForegroundColor Green
} catch {
    Write-Warning '仓库创建失败，可能已存在，将继续配置远程仓库。'
}

# 5. 添加远程仓库。不要把 Token 写入 Git 配置。
$remoteUrl = "https://github.com/${gitHubUser}/${repoName}.git"
$remoteList = git remote
if ($remoteList -contains 'origin') {
    git remote set-url origin $remoteUrl
} else {
    git remote add origin $remoteUrl
}
Write-Host '远程仓库 origin 已设置为无 Token 地址' -ForegroundColor Green

# 6. 首次提交
$status = git status --porcelain
if ($status) {
    git add -A
    git commit -m 'Initial commit: Vibe Coding Radar'
} else {
    Write-Host '没有检测到文件变更，跳过首次提交。' -ForegroundColor Yellow
}

# 7. 推送。使用临时授权头，不把 Token 保存进 remote URL。
$authToken = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${gitHubUser}:${gitHubToken}"))
git -c "http.https://github.com/.extraheader=Authorization: Basic $authToken" push -u origin $branchName

Write-Host '代码已推送到 GitHub！' -ForegroundColor Green
Write-Host "https://github.com/${gitHubUser}/${repoName}" -ForegroundColor Cyan

pause
