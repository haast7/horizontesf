# 🔧 Solução para Erro 404 no Vercel

## Problema
Erro `404: NOT_FOUND` após deploy no Vercel.

## Soluções

### 1. Verificar Configuração do Projeto no Vercel

No painel do Vercel:
1. Vá em **Settings** → **General**
2. Verifique se:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (ou deixe vazio para auto-detect)
   - **Output Directory**: (deixe vazio)
   - **Install Command**: `npm install` (ou deixe vazio)

### 2. Verificar Build Logs

1. Vá em **Deployments**
2. Clique no último deployment
3. Veja os **Build Logs**
4. Procure por erros de build

### 3. Configurações Importantes

#### Variáveis de Ambiente
Certifique-se de que as variáveis estão configuradas como **opcionais** (não obrigatórias):
- `NEXT_PUBLIC_GA_ID` (opcional)
- `NEXT_PUBLIC_FB_PIXEL_ID` (opcional)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (opcional)

#### Node.js Version
No Vercel, configure:
- **Node.js Version**: 18.x ou 20.x

### 4. Rebuild do Projeto

1. No painel do Vercel
2. Vá em **Deployments**
3. Clique nos três pontos do último deployment
4. Selecione **Redeploy**

### 5. Verificar Estrutura de Arquivos

Certifique-se de que:
- ✅ `package.json` existe na raiz
- ✅ `next.config.js` existe na raiz
- ✅ `app/` ou `pages/` existe
- ✅ `app/page.tsx` ou `pages/index.tsx` existe

### 6. Limpar Cache e Rebuild

No Vercel:
1. **Settings** → **General**
2. Role até **Clear Build Cache**
3. Clique em **Clear**
4. Faça um novo deploy

## Comandos para Testar Localmente

```bash
# Limpar cache
rm -rf .next node_modules

# Reinstalar dependências
npm install

# Testar build local
npm run build

# Testar produção local
npm start
```

Se o build local funcionar, o problema está na configuração do Vercel.

## Checklist Final

- [ ] Build funciona localmente (`npm run build`)
- [ ] Framework detectado como Next.js no Vercel
- [ ] Node.js version configurada (18.x ou 20.x)
- [ ] Variáveis de ambiente configuradas (opcionais)
- [ ] Cache limpo no Vercel
- [ ] Redeploy feito após correções

## Se o Problema Persistir

1. Verifique os logs de build no Vercel
2. Compare com o build local
3. Verifique se há erros de TypeScript: `npm run lint`
4. Verifique se todas as dependências estão no `package.json`
