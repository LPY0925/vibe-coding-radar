$ErrorActionPreference = 'Stop'

$token = $env:GITHUB_TOKEN
$gitHubUser = if ($env:GITHUB_USER) { $env:GITHUB_USER } else { 'LPY0925' }
$repoName = if ($env:VIBE_RADAR_REPO) { $env:VIBE_RADAR_REPO } else { 'vibe-coding-radar' }

if (-not $token) {
    throw '未设置 GITHUB_TOKEN 环境变量。请先运行根目录的「首次设置.ps1」。'
}

$headers = @{
    Authorization = "Bearer $token"
    Accept = 'application/vnd.github+json'
    'Content-Type' = 'application/json; charset=utf-8'
}
$body = @{
    name = $repoName
    description = 'Vibe Coding雷达 — 每周帮新手找到值得做、做得出来、做完有反馈的 AI 项目'
    private = $false
    auto_init = $false
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri 'https://api.github.com/user/repos' -Method Post -Headers $headers -Body $body
    Write-Host ('OK: Repository created at ' + $response.html_url) -ForegroundColor Green
} catch {
    $message = $_.Exception.Message
    if ($_.ErrorDetails.Message) {
        try {
            $message = ($_.ErrorDetails.Message | ConvertFrom-Json).message
        } catch {}
    }
    Write-Host ('ERROR: ' + $message) -ForegroundColor Red
    Write-Host "目标仓库：https://github.com/${gitHubUser}/${repoName}" -ForegroundColor Cyan
}
