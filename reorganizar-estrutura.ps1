# Script para reorganizar estrutura do Git
# Move arquivos de CÓDIGOS/HAAST/HSF2/ para a raiz

Write-Host "🔧 Reorganizando estrutura do Git..." -ForegroundColor Yellow
Write-Host "⚠️  Isso vai reorganizar TODOS os arquivos do repositório" -ForegroundColor Red
Write-Host ""

# Verificar se há arquivos com prefixo
$allFiles = git ls-tree -r HEAD --name-only
$filesWithPrefix = $allFiles | Where-Object { $_ -match "^C[ÓO]DIGOS/HAAST/HSF2/" }

if ($filesWithPrefix.Count -eq 0) {
    Write-Host "✅ Estrutura já está correta!" -ForegroundColor Green
    exit 0
}

Write-Host "📋 Encontrados $($filesWithPrefix.Count) arquivos com prefixo incorreto" -ForegroundColor Yellow
Write-Host ""

# Criar branch de backup
Write-Host "💾 Criando backup..." -ForegroundColor Yellow
git branch backup-before-reorganize 2>$null
Write-Host "✅ Backup criado na branch: backup-before-reorganize" -ForegroundColor Green
Write-Host ""

# Mover arquivos
Write-Host "🔄 Movendo arquivos para a raiz..." -ForegroundColor Yellow
$moved = 0

foreach ($file in $filesWithPrefix) {
    $newPath = $file -replace "^C[ÓO]DIGOS/HAAST/HSF2/", ""
    
    if ($newPath -ne $file -and $newPath -ne "") {
        # Verificar se o arquivo existe no working directory
        $localPath = Join-Path (Get-Location) $file
        if (Test-Path $localPath) {
            # Criar diretório de destino se necessário
            $destDir = Split-Path $newPath -Parent
            if ($destDir -and -not (Test-Path $destDir)) {
                New-Item -ItemType Directory -Path $destDir -Force | Out-Null
            }
            
            # Mover arquivo localmente primeiro
            Move-Item -Path $localPath -Destination $newPath -Force -ErrorAction SilentlyContinue
        }
        
        # Mover no Git
        git mv $file $newPath 2>$null
        if ($LASTEXITCODE -eq 0) {
            $moved++
            Write-Host "  ✓ $newPath" -ForegroundColor Gray
        }
    }
}

Write-Host ""
Write-Host "✅ $moved arquivos movidos" -ForegroundColor Green
Write-Host ""

# Verificar status
Write-Host "📋 Status após reorganização:" -ForegroundColor Yellow
git status --short | Select-Object -First 20

Write-Host ""
$confirm = Read-Host "Deseja fazer commit desta reorganização? (s/n)"
if ($confirm -eq "s" -or $confirm -eq "S") {
    Write-Host "💾 Fazendo commit..." -ForegroundColor Yellow
    git commit -m "fix: Reorganizar estrutura - mover arquivos de CÓDIGOS/HAAST/HSF2/ para raiz"
    
    Write-Host ""
    Write-Host "✅ Commit realizado!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📤 Próximo passo:" -ForegroundColor Cyan
    Write-Host "   git push origin main --force" -ForegroundColor White
    Write-Host ""
    Write-Host "⚠️  ATENÇÃO: Force push sobrescreve o histórico remoto!" -ForegroundColor Red
} else {
    Write-Host "Operação cancelada. Use 'git reset --hard HEAD' para desfazer." -ForegroundColor Yellow
}
