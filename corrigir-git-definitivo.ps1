# Script Definitivo para Corrigir Estrutura Git
# Remove Git atual e cria novo na pasta correta

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🔧 CORREÇÃO DEFINITIVA DE ESTRUTURA GIT" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se está na pasta correta
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERRO: Execute este script na pasta HSF2 (onde está package.json)" -ForegroundColor Red
    Write-Host "   Pasta atual: $(Get-Location)" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Pasta correta: $(Get-Location)" -ForegroundColor Green
Write-Host ""

# Verificar se há Git na pasta atual
$gitNaPasta = Test-Path ".git"
if ($gitNaPasta) {
    Write-Host "📋 Git encontrado na pasta atual" -ForegroundColor Yellow
} else {
    Write-Host "⚠️  Git NÃO encontrado na pasta atual" -ForegroundColor Yellow
    Write-Host "   (Pode estar em diretório pai)" -ForegroundColor Gray
}

Write-Host ""
Write-Host "Este script vai:" -ForegroundColor Cyan
Write-Host "  1. Remover qualquer .git da pasta atual" -ForegroundColor White
Write-Host "  2. Inicializar novo Git AQUI (na pasta HSF2)" -ForegroundColor White
Write-Host "  3. Adicionar todos os arquivos" -ForegroundColor White
Write-Host "  4. Fazer commit inicial limpo" -ForegroundColor White
Write-Host "  5. Preparar para push" -ForegroundColor White
Write-Host ""

$confirm = Read-Host "Deseja continuar? (s/n)"
if ($confirm -ne "s" -and $confirm -ne "S") {
    Write-Host "Operação cancelada." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "🚀 Iniciando correção..." -ForegroundColor Green
Write-Host ""

# Passo 1: Remover Git atual (se existir)
Write-Host "1️⃣ Removendo Git atual..." -ForegroundColor Yellow
if (Test-Path .git) {
    Remove-Item .git -Recurse -Force
    Write-Host "   ✅ Git removido" -ForegroundColor Green
} else {
    Write-Host "   ℹ️  Nenhum Git encontrado na pasta" -ForegroundColor Gray
}

# Passo 2: Inicializar novo Git
Write-Host ""
Write-Host "2️⃣ Inicializando novo Git na pasta correta..." -ForegroundColor Yellow
git init
git branch -M main
Write-Host "   ✅ Git inicializado em: $(Get-Location)" -ForegroundColor Green

# Passo 3: Verificar estrutura antes de adicionar
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
} else {
    Write-Host "   ❌ ERRO: package.json não está na raiz!" -ForegroundColor Red
    exit 1
}

# Passo 6: Commit
Write-Host ""
Write-Host "6️⃣ Fazendo commit..." -ForegroundColor Yellow
git commit -m "Initial commit: SmartCred website - estrutura correta na raiz"
Write-Host "   ✅ Commit realizado" -ForegroundColor Green

# Passo 7: Mostrar próximos passos
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ CORREÇÃO CONCLUÍDA!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📤 Próximos passos:" -ForegroundColor Cyan
Write-Host ""
Write-Host "OPÇÃO 1: Usar repositório existente (force push)" -ForegroundColor Yellow
Write-Host "   git remote add origin https://github.com/haast7/horizonte.git" -ForegroundColor White
Write-Host "   git push origin main --force" -ForegroundColor White
Write-Host ""
Write-Host "OPÇÃO 2: Criar NOVO repositório GitHub" -ForegroundColor Yellow
Write-Host "   1. Crie novo repo em: https://github.com/new" -ForegroundColor White
Write-Host "   2. Execute:" -ForegroundColor White
Write-Host "      git remote add origin https://github.com/haast7/NOME-DO-NOVO-REPO.git" -ForegroundColor White
Write-Host "      git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "✅ Estrutura agora está CORRETA!" -ForegroundColor Green
Write-Host "   package.json está na raiz do repositório" -ForegroundColor Gray
Write-Host ""
