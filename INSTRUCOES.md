# 🚀 Instruções Rápidas - SmartCred Website

## ⚡ Início Rápido

1. **Instalar dependências:**
```bash
npm install
```

2. **Configurar variáveis de ambiente:**
Crie um arquivo `.env.local` na raiz do projeto com:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=1234567890123456
NEXT_PUBLIC_WHATSAPP_NUMBER=5518999999999
```

3. **Executar em desenvolvimento:**
```bash
npm run dev
```

O site estará disponível em: **http://localhost:3000**

## 📝 Personalizações Necessárias

### 1. Imagens
Substitua as URLs do Unsplash nas seguintes seções:
- `components/sections/HeroSection.tsx` - Imagem do hero
- `components/sections/SecondHeroSection.tsx` - Imagem do segundo hero
- `components/sections/ProductsSection.tsx` - Imagens dos produtos
- `components/sections/BlogSection.tsx` - Imagens dos posts
- `components/sections/PartnersSection.tsx` - Logos dos parceiros

### 2. Conteúdo
Atualize os textos em:
- `components/sections/HeroSection.tsx` - Headline principal
- `components/sections/ProductsSection.tsx` - Lista de produtos
- `components/sections/MetricsSection.tsx` - Métricas e números
- `components/layout/Footer.tsx` - Informações da empresa

### 3. Formulário de Contato
Integre o formulário em `components/sections/ContactSection.tsx` com:
- API própria
- Serviço de email (SendGrid, Mailgun, etc.)
- CRM (HubSpot, Salesforce, etc.)

### 4. Newsletter
Configure a integração em `components/sections/NewsletterSection.tsx` com:
- Mailchimp
- SendGrid
- Outro serviço de email marketing

### 5. Blog
Para criar páginas dinâmicas de blog:
1. Crie `app/blog/[id]/page.tsx`
2. Configure uma API ou CMS para buscar posts
3. Atualize os links em `components/sections/BlogSection.tsx`

## 🎨 Cores Personalizadas

As cores podem ser ajustadas em `tailwind.config.ts`:
- `petroleum-dark`: Verde petróleo escuro
- `yellow-primary`: Amarelo dos CTAs
- Outras cores conforme necessário

## 📱 Testes de Responsividade

Teste em diferentes tamanhos:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 🔍 SEO Checklist

- ✅ Meta tags configuradas
- ✅ Sitemap.xml criado
- ✅ Robots.txt configurado
- ✅ Open Graph tags
- ⚠️ Adicionar imagens alt text personalizadas
- ⚠️ Configurar Google Search Console
- ⚠️ Adicionar schema.org markup (opcional)

## 📊 Analytics

Após configurar as variáveis de ambiente:
- Google Analytics será carregado automaticamente
- Facebook Pixel será carregado automaticamente
- Eventos podem ser adicionados conforme necessário

## 🐛 Troubleshooting

### Erro ao instalar dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de build
```bash
npm run build
# Verifique os erros no console
```

### Imagens não carregam
- Verifique se o domínio está em `next.config.js`
- Use imagens otimizadas (WebP recomendado)
- Verifique URLs das imagens

## 📞 Suporte

Para dúvidas ou problemas, consulte:
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação Framer Motion](https://www.framer.com/motion/)
