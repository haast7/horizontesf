# Script para reorganizar estrutura do Git
# Move todos os arquivos de CÓDIGOS/HAAST/HSF2/ para a raiz

Write-Host "🔧 Reorganizando estrutura do Git..." -ForegroundColor Yellow

# Verificar se estamos no diretório correto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Erro: Execute este script na raiz do projeto HSF2" -ForegroundColor Red
    exit 1
}

# Criar backup do .git atual
Write-Host "📦 Criando backup..." -ForegroundColor Yellow
$backupDir = ".git-backup-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Copy-Item -Path .git -Destination $backupDir -Recurse -Force

Write-Host "✅ Backup criado em: $backupDir" -ForegroundColor Green

# Verificar estrutura atual no Git
Write-Host "`n📋 Verificando estrutura atual..." -ForegroundColor Yellow
$files = git ls-tree -r HEAD --name-only | Where-Object { $_ -like "CÓDIGOS/HAAST/HSF2/*" }

if ($files.Count -eq 0) {
    Write-Host "✅ Estrutura já está correta!" -ForegroundColor Green
    exit 0
}

Write-Host "Encontrados $($files.Count) arquivos com prefixo incorreto" -ForegroundColor Yellow

# Criar um novo commit movendo os arquivos
Write-Host "`n🔄 Movendo arquivos para a raiz..." -ForegroundColor Yellow

foreach ($file in $files) {
    $newPath = $file -replace "^CÓDIGOS/HAAST/HSF2/", ""
    if ($newPath -ne $file -and $newPath -ne "") {
        Write-Host "  Movendo: $file -> $newPath" -ForegroundColor Gray
        git mv "$file" "$newPath" 2>$null
    }
}

Write-Host "`n💾 Fazendo commit da reorganização..." -ForegroundColor Yellow
git commit -m "fix: Reorganizar estrutura - mover arquivos para raiz do repositório"

Write-Host "`n✅ Reorganização concluída!" -ForegroundColor Green
Write-Host "📤 Faça push: git push origin main --force" -ForegroundColor Cyan
