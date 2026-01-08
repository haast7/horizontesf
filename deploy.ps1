# Script de Deploy para Vercel
# Execute este script no PowerShell

Write-Host "🚀 Preparando projeto para deploy no Vercel..." -ForegroundColor Green

# Verificar se está no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: Execute este script na raiz do projeto" -ForegroundColor Red
    exit 1
}

# Verificar se git está instalado
try {
    git --version | Out-Null
} catch {
    Write-Host "❌ Erro: Git não está instalado" -ForegroundColor Red
    exit 1
}

# Verificar status do git
Write-Host "`n📋 Verificando status do Git..." -ForegroundColor Yellow
git status

# Perguntar se deseja continuar
$continuar = Read-Host "`nDeseja adicionar todos os arquivos e fazer commit? (s/n)"
if ($continuar -ne "s" -and $continuar -ne "S") {
    Write-Host "Operação cancelada." -ForegroundColor Yellow
    exit 0
}

# Adicionar arquivos
Write-Host "`n📦 Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Fazer commit
$mensagem = Read-Host "Digite a mensagem do commit (ou pressione Enter para usar a padrão)"
if ([string]::IsNullOrWhiteSpace($mensagem)) {
    $mensagem = "Deploy: SmartCred website with landing page for investors"
}

Write-Host "💾 Fazendo commit..." -ForegroundColor Yellow
git commit -m $mensagem

# Verificar remote
Write-Host "`n🔗 Verificando remote..." -ForegroundColor Yellow
$remote = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Remote não configurado. Configurando..." -ForegroundColor Yellow
    git remote add origin https://github.com/haast7/hsf.git
}

# Verificar branch
$branch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($branch)) {
    $branch = "main"
    git checkout -b main 2>$null
}

Write-Host "`n📤 Fazendo push para origin/$branch..." -ForegroundColor Yellow
git push -u origin $branch

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Push realizado com sucesso!" -ForegroundColor Green
    Write-Host "`n🌐 Próximos passos:" -ForegroundColor Cyan
    Write-Host "1. Acesse https://vercel.com" -ForegroundColor White
    Write-Host "2. Conecte o repositório haast7/hsf" -ForegroundColor White
    Write-Host "3. Configure as variáveis de ambiente" -ForegroundColor White
    Write-Host "4. Faça o deploy!" -ForegroundColor White
} else {
    Write-Host "`n❌ Erro ao fazer push. Verifique as credenciais do Git." -ForegroundColor Red
}
