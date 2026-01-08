# Script Automatizado: Corrigir Estrutura e Push para Novo Repositório
# Repositório: https://github.com/haast7/horizontesf.git

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🚀 CORREÇÃO E PUSH AUTOMATIZADO" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Novo repositório: https://github.com/haast7/horizontesf.git" -ForegroundColor Green
Write-Host ""

# Verificar se está na pasta correta
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERRO: Execute este script na pasta HSF2 (onde está package.json)" -ForegroundColor Red
    Write-Host "   Pasta atual: $(Get-Location)" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Pasta correta: $(Get-Location)" -ForegroundColor Green
Write-Host ""

# Passo 1: Remover Git atual (se existir na pasta)
Write-Host "1️⃣ Removendo Git atual da pasta..." -ForegroundColor Yellow
if (Test-Path .git) {
    Remove-Item .git -Recurse -Force
    Write-Host "   ✅ Git removido" -ForegroundColor Green
} else {
    Write-Host "   Info: Nenhum Git encontrado na pasta (ok, pode estar em diretorio pai)" -ForegroundColor Gray
}

# Passo 2: Inicializar novo Git na pasta correta
Write-Host ""
Write-Host "2️⃣ Inicializando novo Git na pasta correta..." -ForegroundColor Yellow
git init
git branch -M main
Write-Host "   ✅ Git inicializado em: $(Get-Location)" -ForegroundColor Green

# Passo 3: Verificar estrutura
Write-Host ""
Write-Host "3️⃣ Verificando estrutura..." -ForegroundColor Yellow
$packageJson = Test-Path "package.json"
$appFolder = Test-Path "app"
if ($packageJson -and $appFolder) {
    Write-Host "   ✅ package.json encontrado na raiz" -ForegroundColor Green
    Write-Host "   ✅ app/ encontrado na raiz" -ForegroundColor Green
} else {
    Write-Host "   ❌ ERRO: Estrutura não encontrada!" -ForegroundColor Red
    exit 1
}

# Passo 4: Adicionar arquivos
Write-Host ""
Write-Host "4️⃣ Adicionando arquivos..." -ForegroundColor Yellow
git add .
$fileCount = (git ls-files | Measure-Object).Count
Write-Host "   ✅ $fileCount arquivos adicionados" -ForegroundColor Green

# Passo 5: Verificar que package.json está na raiz
Write-Host ""
Write-Host "5️⃣ Verificando estrutura no Git..." -ForegroundColor Yellow
$packageInGit = git ls-files | Select-String "^package.json$"
if ($packageInGit) {
    Write-Host "   ✅ package.json está na RAIZ do Git!" -ForegroundColor Green
    Write-Host "   ✅ Estrutura CORRETA!" -ForegroundColor Green
} else {
    Write-Host "   ❌ ERRO: package.json não está na raiz!" -ForegroundColor Red
    Write-Host "   Arquivos no Git:" -ForegroundColor Yellow
    git ls-files | Select-Object -First 10
    exit 1
}

# Passo 6: Commit
Write-Host ""
Write-Host "6️⃣ Fazendo commit..." -ForegroundColor Yellow
git commit -m "Initial commit: SmartCred website - estrutura correta na raiz"
Write-Host "   ✅ Commit realizado" -ForegroundColor Green

# Passo 7: Conectar ao novo repositório
Write-Host ""
Write-Host "7️⃣ Conectando ao novo repositório..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/haast7/horizontesf.git
Write-Host "   ✅ Repositório configurado" -ForegroundColor Green

# Passo 8: Push
Write-Host ""
Write-Host "8️⃣ Fazendo push para o novo repositório..." -ForegroundColor Yellow
Write-Host "   (Isso pode pedir suas credenciais GitHub)" -ForegroundColor Gray
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "✅ SUCESSO! Push concluído!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📦 Repositório: https://github.com/haast7/horizontesf" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "✅ Estrutura agora está CORRETA!" -ForegroundColor Green
    Write-Host "   - package.json está na raiz" -ForegroundColor Gray
    Write-Host "   - Vercel vai detectar Next.js corretamente" -ForegroundColor Gray
    Write-Host ""
    Write-Host "🔗 Próximo passo:" -ForegroundColor Yellow
    Write-Host "   Conecte este repositório no Vercel:" -ForegroundColor White
    Write-Host "   https://github.com/haast7/horizontesf" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Erro no push. Verifique:" -ForegroundColor Red
    Write-Host "   - Credenciais GitHub" -ForegroundColor Yellow
    Write-Host "   - Permissões no repositório" -ForegroundColor Yellow
    Write-Host "   - Conexao com internet" -ForegroundColor Yellow
    Write-Host ""
}
