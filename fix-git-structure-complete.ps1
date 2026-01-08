# Script Completo para Corrigir Estrutura Git
# Move arquivos de CÓDIGOS/HAAST/HSF2/ para a raiz

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🔧 CORREÇÃO DE ESTRUTURA GIT" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se está na pasta correta
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERRO: Execute este script na pasta HSF2 (onde está package.json)" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Pasta correta detectada" -ForegroundColor Green
Write-Host ""

# Verificar estrutura atual no Git
Write-Host "📋 Verificando estrutura atual..." -ForegroundColor Yellow
$allFiles = git ls-tree -r HEAD --name-only 2>$null
$filesWithPrefix = $allFiles | Where-Object { $_ -match "C[ÓO]DIGOS.*HSF2" }

if ($filesWithPrefix.Count -eq 0) {
    Write-Host "✅ Estrutura já está correta!" -ForegroundColor Green
    exit 0
}

Write-Host "⚠️  Encontrados $($filesWithPrefix.Count) arquivos com prefixo incorreto" -ForegroundColor Yellow
Write-Host ""

# Confirmar ação
Write-Host "Este script vai:" -ForegroundColor Cyan
Write-Host "  1. Criar backup do Git atual" -ForegroundColor White
Write-Host "  2. Remover .git atual" -ForegroundColor White
Write-Host "  3. Inicializar novo Git na pasta correta" -ForegroundColor White
Write-Host "  4. Fazer commit com estrutura correta" -ForegroundColor White
Write-Host "  5. Fazer force push (substitui histórico remoto)" -ForegroundColor White
Write-Host ""

$confirm = Read-Host "Deseja continuar? (s/n)"
if ($confirm -ne "s" -and $confirm -ne "S") {
    Write-Host "Operação cancelada." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "🚀 Iniciando correção..." -ForegroundColor Green
Write-Host ""

# Passo 1: Backup
Write-Host "1️⃣ Criando backup..." -ForegroundColor Yellow
$backupName = ".git-backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
if (Test-Path .git) {
    Copy-Item .git $backupName -Recurse -Force
    Write-Host "   ✅ Backup criado: $backupName" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  .git não encontrado, pulando backup" -ForegroundColor Yellow
}

# Passo 2: Remover Git atual
Write-Host ""
Write-Host "2️⃣ Removendo Git atual..." -ForegroundColor Yellow
if (Test-Path .git) {
    Remove-Item .git -Recurse -Force
    Write-Host "   ✅ Git removido" -ForegroundColor Green
}

# Passo 3: Inicializar novo Git
Write-Host ""
Write-Host "3️⃣ Inicializando novo Git..." -ForegroundColor Yellow
git init
git branch -M main
Write-Host "   ✅ Git inicializado" -ForegroundColor Green

# Passo 4: Configurar remote
Write-Host ""
Write-Host "4️⃣ Configurando remote..." -ForegroundColor Yellow
git remote add origin https://github.com/haast7/horizonte.git
Write-Host "   ✅ Remote configurado" -ForegroundColor Green

# Passo 5: Adicionar arquivos
Write-Host ""
Write-Host "5️⃣ Adicionando arquivos..." -ForegroundColor Yellow
git add .
$fileCount = (git ls-files | Measure-Object).Count
Write-Host "   ✅ $fileCount arquivos adicionados" -ForegroundColor Green

# Passo 6: Verificar estrutura
Write-Host ""
Write-Host "6️⃣ Verificando estrutura..." -ForegroundColor Yellow
$packageJson = git ls-files | Select-String "^package.json$"
if ($packageJson) {
    Write-Host "   ✅ package.json está na raiz!" -ForegroundColor Green
} else {
    Write-Host "   ❌ ERRO: package.json não encontrado na raiz!" -ForegroundColor Red
    exit 1
}

# Passo 7: Commit
Write-Host ""
Write-Host "7️⃣ Fazendo commit..." -ForegroundColor Yellow
git commit -m "fix: Reorganizar estrutura - arquivos na raiz do repositório"
Write-Host "   ✅ Commit realizado" -ForegroundColor Green

# Passo 8: Mostrar próximos passos
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ CORREÇÃO CONCLUÍDA!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📤 Próximo passo:" -ForegroundColor Cyan
Write-Host "   Execute: git push origin main --force" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  ATENÇÃO: Force push substitui o histórico remoto!" -ForegroundColor Red
Write-Host ""
