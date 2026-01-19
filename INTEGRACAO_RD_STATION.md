# Integração com RD Station - Guia Completo

## 📋 Visão Geral

Este projeto possui **duas formas** de enviar leads para o RD Station:

1. **Captura Automática** - Via script do RD Station (já configurado)
2. **Envio Manual via API** - Via código quando formulários são submetidos

---

## 🔧 Como Funciona

### 1. Captura Automática (Script RD Station)

O componente `RDStation.tsx` carrega o script oficial do RD Station que **automaticamente captura** formulários HTML que atendem aos requisitos:

- ✅ Formulário dentro de tags `<form></form>`
- ✅ Campo de email com `type="email"` ou `name="email"`
- ✅ Botão com `type="submit"`
- ✅ Formulário NÃO dentro de iframes

**Onde está configurado:**
- `components/analytics/RDStation.tsx` - Carrega o script
- `app/layout.tsx` - Script é carregado em todas as páginas

**Token do Script:** `3c92e6a5-ab7e-48a5-bad9-3cb83405ad02`

---

### 2. Envio Manual via API

Quando um formulário é submetido, o código **explicitamente envia** os dados para o RD Station via API.

**Fluxo:**
1. Usuário preenche formulário
2. Formulário chama `trackRDStationLead()` de `lib/services/rdStation.ts`
3. Serviço chama API route `/api/rd-station`
4. API route tenta enviar para RD Station usando dois métodos:
   - **API Moderna** (`/platform/events`) - Primeira tentativa
   - **API Legada** (`/api/1.2/conversions`) - Fallback se a moderna falhar

**Formulários que já enviam via API:**
- ✅ `ModalFormularioHome` - Modal da página inicial
- ✅ `ModalFormularioInvestidores` - Modal da página de investidores
- ✅ `FormularioInvestidoresSection` - Formulário da seção de investidores
- ✅ `ContactSection` - Formulário de contato (RECÉM ADICIONADO)

---

## 🔑 Configuração dos Tokens

### Tokens Configurados

Os tokens estão configurados em `app/api/rd-station/route.ts`:

#### Token Público (API Key)
- **Token padrão:** `93c7c9126b473974f313bbdf25ef397b`
- **Variável de ambiente:** `RD_STATION_TOKEN_PUBLIC` ou `RD_STATION_TOKEN`
- **Uso:** Envio de conversões/leads (uso principal)
- **Características:** Não expira, permissões limitadas a conversões

#### Token Privado (Access Token)
- **Token padrão:** `8a34954d9798273cd6467f2f16b3cae4`
- **Variável de ambiente:** `RD_STATION_TOKEN_PRIVATE`
- **Uso:** Operações mais sensíveis (leitura/escrita de contatos, relatórios)
- **Características:** Pode expirar, permissões amplas

### Diferença entre Token Público e Privado

| Característica | Token Público | Token Privado |
|---|---|---|
| **Uso Principal** | Envio de conversões/leads | Operações completas (CRUD) |
| **Expiração** | Não expira | Pode expirar |
| **Permissões** | Limitadas (apenas conversões) | Amplas (contatos, relatórios, etc.) |
| **Segurança** | Menos sensível, mas ainda importante proteger | Muito sensível, nunca expor publicamente |
| **Quando Usar** | Formulários, eventos de conversão | Integrações completas, apps públicos |

### Como Obter/Verificar os Tokens

1. **Acesse o RD Station Marketing**
2. Vá em **Configurações** → **Integrações** → **API**
3. Na seção **"Dados de integração (API)"** você encontrará:
   - **Token público** - Para conversões
   - **Token privado** - Para operações completas
4. Copie os tokens e configure nas variáveis de ambiente:
   - `RD_STATION_TOKEN_PUBLIC` - Token público
   - `RD_STATION_TOKEN_PRIVATE` - Token privado (opcional)

**⚠️ IMPORTANTE:** 
- Para envio de leads/conversões, use o **token público**
- O token privado é usado apenas para operações mais complexas
- Ambos os tokens devem ser protegidos e nunca expostos no código front-end

---

## 📊 Onde os Leads Aparecem no RD Station

### RD Station Marketing vs RD Station CRM

- **RD Station Marketing:** Recebe leads de formulários e conversões
- **RD Station CRM:** Recebe leads do Marketing automaticamente (se integrado)

**Os leads enviados via API aparecem em:**
1. **RD Station Marketing** → **Leads** → Lista de contatos
2. **RD Station CRM** → Se houver integração entre Marketing e CRM

### Identificadores de Conversão

Cada formulário envia um `identificador` (source) diferente:
- `home_modal` - Modal da página inicial
- `investidores_modal` - Modal da página de investidores
- `investidores_page` - Formulário da página de investidores
- `contact_section` - Formulário de contato

Você pode criar **conversões diferentes** no RD Station para cada identificador e acompanhar separadamente.

---

## 🧪 Como Testar

### 1. Teste Manual
1. Preencha qualquer formulário do site
2. Abra o **Console do Navegador** (F12)
3. Procure por mensagens:
   - `"Lead enviado para RD Station: ..."` - Sucesso
   - `"RD Station API Error: ..."` - Erro

### 2. Verificar no RD Station
1. Acesse o RD Station Marketing
2. Vá em **Leads** ou **Contatos**
3. Procure pelo email que você usou no teste
4. Verifique se os dados estão corretos (nome, telefone, tags)

### 3. Verificar Logs da API
Se estiver rodando localmente, verifique o terminal onde o Next.js está rodando. Você verá logs como:
- `"Lead enviado para RD Station (API Moderna): ..."`
- `"Lead enviado para RD Station (API Legada): ..."`

---

## 🐛 Troubleshooting

### Leads não aparecem no RD Station

1. **Verifique o token:**
   - Confirme que o token está correto
   - Verifique se a API Key está ativa no RD Station

2. **Verifique o console do navegador:**
   - Procure por erros de API
   - Verifique se a requisição está sendo feita

3. **Verifique os logs do servidor:**
   - Veja se há erros na API route
   - Confirme que o endpoint está respondendo

4. **Teste o endpoint diretamente:**
   ```bash
   curl -X POST http://localhost:3000/api/rd-station \
     -H "Content-Type: application/json" \
     -d '{"leadData":{"email":"teste@exemplo.com","name":"Teste","phone":"11999999999","source":"teste"}}'
   ```

### Erro 401 (Não autorizado)

- Token inválido ou expirado
- Verifique se está usando uma API Key válida

### Erro 400 (Bad Request)

- Email faltando ou inválido
- Verifique se o email está sendo enviado corretamente

### Erro 500 (Internal Server Error)

- Problema no servidor
- Verifique os logs do Next.js para mais detalhes

---

## 📝 Estrutura dos Dados Enviados

### Dados Padrão Enviados:
```json
{
  "email": "lead@exemplo.com",
  "name": "Nome Completo",
  "phone": "11999999999",
  "product": "Nome do Produto",
  "source": "identificador_da_origem"
}
```

### Campos Mapeados para RD Station:
- `email` → Campo email (obrigatório)
- `name` → Campo nome
- `phone` → Campo telefone
- `product` → Adicionado nas tags
- `source` → Usado como `conversion_identifier`

---

## 🔄 Próximos Passos Recomendados

1. **Configurar variáveis de ambiente em produção:**
   - Adicione `RD_STATION_TOKEN_PUBLIC` nas variáveis de ambiente do Vercel/deploy
   - (Opcional) Adicione `RD_STATION_TOKEN_PRIVATE` se precisar de operações mais complexas
   - **Valores atuais:**
     - Token Público: `93c7c9126b473974f313bbdf25ef397b`
     - Token Privado: `8a34954d9798273cd6467f2f16b3cae4`

2. **Criar conversões no RD Station:**
   - Crie conversões para cada `source` (home_modal, investidores_modal, etc.)
   - Configure automações baseadas nessas conversões

3. **Monitorar leads:**
   - Configure alertas no RD Station para novos leads
   - Acompanhe a origem dos leads usando as tags

4. **Testar em produção:**
   - Após deploy, teste todos os formulários
   - Verifique se os leads estão chegando corretamente

---

## 📚 Referências

- [Documentação RD Station API](https://developers.rdstation.com/)
- [API de Conversões RD Station](https://developers.rdstation.com/reference/conversao)
- [Autenticação API Key](https://developers.rdstation.com/reference/autenticacao-api-key)

---

## ✅ Checklist de Configuração

- [x] Script RD Station carregado no layout
- [x] API route configurada (`/api/rd-station`)
- [x] Serviço de integração criado (`lib/services/rdStation.ts`)
- [x] Formulários integrados:
  - [x] ModalFormularioHome
  - [x] ModalFormularioInvestidores
  - [x] FormularioInvestidoresSection
  - [x] ContactSection
- [ ] Tokens configurados em variáveis de ambiente (produção)
  - [ ] `RD_STATION_TOKEN_PUBLIC` configurado
  - [ ] `RD_STATION_TOKEN_PRIVATE` configurado (opcional)
- [ ] Conversões criadas no RD Station
- [ ] Testes realizados em produção
