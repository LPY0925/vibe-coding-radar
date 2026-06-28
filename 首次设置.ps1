# 首次设置脚本
# 在提供 GitHub Token 后运行

$项目路径 = "D:\源神\Vibe Coding雷达"
Set-Location $项目路径

# 1. 设置 GitHub Token 环境变量
$GitHubToken = Read-Host "请输入你的 GitHub Personal Access Token"
[Environment]::SetEnvironmentVariable("GITHUB_TOKEN", $GitHubToken, "User")
Write-Host "✅ GITHUB_TOKEN 已保存到环境变量" -ForegroundColor Green

# 2. GitHub 用户名
$GitHub用户名 = Read-Host "请输入你的 GitHub 用户名"

# 3. 初始化 Git
git init
git checkout -b main

# 4. 创建 GitHub 仓库（通过 API）
$headers = @{
    Authorization = "token $GitHubToken"
    "Content-Type" = "application/json"
}
$body = @{
    name = "vibe-coding-radar"
    description = "Vibe Coding雷达 — 每周帮你找到值得做、做得出来、做完有反馈的 AI 项目"
    private = $false
    auto_init = $false
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body
    Write-Host "✅ GitHub 仓库已创建：https://github.com/${GitHub用户名}/vibe-coding-radar" -ForegroundColor Green
} catch {
    Write-Warning "⚠ 创建仓库失败：$_"
    Write-Host "   可能是 Token 权限不足，或仓库名已存在。" -ForegroundColor Yellow
    Write-Host "   请手动在 GitHub 创建仓库后重试。" -ForegroundColor Yellow
    exit 1
}

# 5. 添加远程仓库
$远程地址 = "https://${GitHub用户名}:${GitHubToken}@github.com/${GitHub用户名}/vibe-coding-radar.git"
git remote add origin $远程地址

# 6. 首次提交
git add -A
git commit -m "🎉 首次提交：Vibe Coding雷达 — 帮助新手找到值得做的 AI 项目"

# 7. 推送
git push -u origin main
Write-Host "✅ 代码已推送到 GitHub！" -ForegroundColor Green
Write-Host "   仓库地址：https://github.com/${GitHub用户名}/vibe-coding-radar" -ForegroundColor Cyan

pause
