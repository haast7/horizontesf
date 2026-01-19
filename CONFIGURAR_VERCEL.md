# 🚀 Como Configurar Variáveis de Ambiente no Vercel

## 📋 Passo a Passo Completo

### 1. Acessar o Painel do Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login na sua conta
3. Selecione o projeto **HSF2** (ou o nome do seu projeto)

---

### 2. Configurar Variáveis de Ambiente

1. No painel do projeto, clique em **Settings** (Configurações)
2. No menu lateral esquerdo, clique em **Environment Variables** (Variáveis de Ambiente)
3. Você verá uma lista de variáveis (pode estar vazia)

---

### 3. Adicionar Token Público do RD Station

1. Clique no botão **Add New** (Adicionar Nova)
2. Preencha os campos:
   - **Name** (Nome): `RD_STATION_TOKEN_PUBLIC`
   - **Value** (Valor): `93c7c9126b473974f313bbdf25ef397b`
   - **Environments** (Ambientes): Marque TODAS as opções:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. Clique em **Save** (Salvar)

---

### 4. Adicionar Token Privado do RD Station (Opcional)

1. Clique novamente em **Add New**
2. Preencha os campos:
   - **Name**: `RD_STATION_TOKEN_PRIVATE`
   - **Value**: `8a34954d9798273cd6467f2f16b3cae4`
   - **Environments**: Marque TODAS as opções:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. Clique em **Save**

---

### 5. Verificar Outras Variáveis (Se Necessário)

Se você já tem outras variáveis configuradas, verifique se estão corretas:
- `NEXT_PUBLIC_GA_ID` (opcional)
- `NEXT_PUBLIC_FB_PIXEL_ID` (opcional)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` (opcional)

---

### 6. Fazer Redeploy

**⚠️ IMPORTANTE:** Após adicionar variáveis de ambiente, você PRECISA fazer um novo deploy!

#### Opção 1: Redeploy Manual
1. Vá em **Deployments** (Deploys)
2. Clique nos **três pontos** (⋯) do último deployment
3. Selecione **Redeploy**
4. Aguarde o deploy terminar

#### Opção 2: Novo Push
1. Faça um pequeno commit (pode ser só um espaço em branco)
2. Faça push para o repositório
3. O Vercel fará deploy automático

---

## 🔍 Como Verificar se Está Funcionando

### 1. Verificar Logs do Deploy

1. Vá em **Deployments**
2. Clique no último deployment
3. Veja a aba **Build Logs**
4. Procure por mensagens de sucesso ou erro

### 2. Testar o Formulário Online

1. Acesse seu site em produção
2. Preencha um formulário
3. Abra o **Console do Navegador** (F12 → Console)
4. Procure por:
   - ✅ `"Lead enviado para RD Station: ..."` - Sucesso!
   - ❌ `"RD Station API Error: ..."` - Erro (veja detalhes abaixo)

### 3. Verificar Logs em Produção

1. No Vercel, vá em **Deployments**
2. Clique no último deployment
3. Vá na aba **Functions** (Funções)
4. Clique em `/api/rd-station`
5. Veja os logs de execução

---

## 🐛 Troubleshooting

### Problema: Formulário não envia / Erro 500

**Possíveis causas:**
1. Variáveis de ambiente não configuradas
2. Variáveis configuradas mas deploy não foi refeito
3. Token inválido

**Solução:**
1. Verifique se as variáveis estão configuradas (passo 2-4 acima)
2. Faça um **Redeploy** (passo 6 acima)
3. Verifique os logs do deployment

### Problema: Erro 401 (Não autorizado)

**Causa:** Token inválido ou incorreto

**Solução:**
1. Verifique se o token está correto no Vercel
2. Confirme que copiou o token completo (sem espaços)
3. Verifique se o token está ativo no RD Station

### Problema: Variáveis não aparecem no código

**Causa:** Deploy feito antes de adicionar as variáveis

**Solução:**
1. Adicione as variáveis no Vercel
2. Faça um **Redeploy** obrigatório
3. Aguarde o deploy terminar completamente

---

## 📸 Visual Guide (Passo a Passo com Imagens)

### Passo 1: Settings → Environment Variables
```
Vercel Dashboard
├── Seu Projeto
    ├── Settings (⚙️)
        └── Environment Variables
```

### Passo 2: Adicionar Variável
```
[Add New] botão
    ↓
Name: RD_STATION_TOKEN_PUBLIC
Value: 93c7c9126b473974f313bbdf25ef397b
Environments: ☑ Production ☑ Preview ☑ Development
    ↓
[Save]
```

---

## ✅ Checklist Final

Antes de considerar tudo pronto, verifique:

- [ ] Token público (`RD_STATION_TOKEN_PUBLIC`) adicionado no Vercel
- [ ] Token privado (`RD_STATION_TOKEN_PRIVATE`) adicionado (opcional)
- [ ] Variáveis marcadas para todos os ambientes (Production, Preview, Development)
- [ ] Redeploy feito após adicionar variáveis
- [ ] Deploy concluído com sucesso
- [ ] Formulário testado em produção
- [ ] Console do navegador verificado (sem erros)
- [ ] Lead apareceu no RD Station

---

## 🔗 Links Úteis

- [Documentação Vercel - Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [RD Station API Documentation](https://developers.rdstation.com/)

---

## 💡 Dica Extra

Se você quiser testar localmente antes de fazer deploy:

1. Crie um arquivo `.env.local` na raiz do projeto:
```env
RD_STATION_TOKEN_PUBLIC=93c7c9126b473974f313bbdf25ef397b
RD_STATION_TOKEN_PRIVATE=8a34954d9798273cd6467f2f16b3cae4
```

2. Execute `npm run dev`
3. Teste o formulário localmente
4. Se funcionar localmente, o problema está na configuração do Vercel

---

**Pronto!** Após seguir esses passos, seus formulários devem funcionar corretamente em produção. 🎉
