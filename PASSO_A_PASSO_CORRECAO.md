# 🚀 PASSO A PASSO: Corrigir Estrutura Git

## ✅ PROBLEMA IDENTIFICADO

**CAUSA DO ERRO 404:** Todos os arquivos estão commitados com prefixo `CÓDIGOS/HAAST/HSF2/` em vez de estarem na raiz.

## 🔧 SOLUÇÃO (Execute na ordem)

### Passo 1: Backup
```powershell
# Criar backup do Git atual
Copy-Item .git .git-backup-$(Get-Date -Format 'yyyyMMdd-HHmmss') -Recurse -Force
```

### Passo 2: Remover Git Atual
```powershell
# Remover .git (vamos criar um novo)
Remove-Item .git -Recurse -Force
```

### Passo 3: Inicializar Git Corretamente
```powershell
# Inicializar Git na pasta correta (HSF2)
git init
git branch -M main
```

### Passo 4: Configurar Remote
```powershell
# Adicionar remote do GitHub
git remote add origin https://github.com/haast7/horizonte.git
```

### Passo 5: Adicionar Todos os Arquivos
```powershell
# Adicionar tudo (agora na raiz correta)
git add .
```

### Passo 6: Verificar Estrutura
```powershell
# Verificar que package.json está na raiz
git ls-files | Select-String "^package.json$"
# Deve retornar apenas: package.json (sem prefixo)
```

### Passo 7: Commit Inicial
```powershell
git commit -m "fix: Reorganizar estrutura - arquivos na raiz do repositório"
```

### Passo 8: Force Push
```powershell
# ⚠️ ATENÇÃO: Isso sobrescreve o histórico remoto!
git push origin main --force
```

## ✅ Após Correção

1. **Verificar no GitHub:**
   - Acesse: https://github.com/haast7/horizonte
   - Deve ver `package.json` na raiz (não dentro de pastas)

2. **No Vercel:**
   - Settings → General → Clear Build Cache
   - Deployments → Redeploy
   - Deve funcionar agora! ✅

## 🎯 Por Que Isso Resolve?

**Antes:**
```
GitHub:
  CÓDIGOS/
    HAAST/
      HSF2/
        package.json  ❌
        app/
          page.tsx
```

**Depois:**
```
GitHub:
  package.json  ✅
  app/
    page.tsx
```

Vercel procura `package.json` na raiz → encontra → detecta Next.js → funciona! ✅
