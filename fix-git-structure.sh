#!/bin/bash
# Script para corrigir estrutura do Git
# Move arquivos de CÓDIGOS/HAAST/HSF2/ para a raiz

echo "🔧 Corrigindo estrutura do Git..."

# Verificar se há arquivos com prefixo incorreto
FILES=$(git ls-tree -r HEAD --name-only | grep "^CÓDIGOS/HAAST/HSF2/")

if [ -z "$FILES" ]; then
    echo "✅ Estrutura já está correta!"
    exit 0
fi

echo "📋 Encontrados arquivos com prefixo incorreto"
echo "🔄 Movendo arquivos para a raiz..."

# Mover cada arquivo
for file in $FILES; do
    new_path=$(echo "$file" | sed 's|^CÓDIGOS/HAAST/HSF2/||')
    if [ -n "$new_path" ] && [ "$file" != "$new_path" ]; then
        echo "  Movendo: $file -> $new_path"
        git mv "$file" "$new_path" 2>/dev/null || true
    fi
done

echo "💾 Fazendo commit..."
git commit -m "fix: Reorganizar estrutura - mover arquivos para raiz do repositório"

echo "✅ Correção concluída!"
echo "📤 Execute: git push origin main --force"
