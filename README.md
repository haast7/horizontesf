# SmartCred - Website Institucional

Site institucional premium desenvolvido para SmartCred, seguindo padrões de design moderno e responsivo para fintechs e instituições financeiras.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **React Icons** - Biblioteca de ícones

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório
```bash
git clone https://github.com/haast7/hsf.git
cd hsf
```

2. Instale as dependências
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto com:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=1234567890123456
NEXT_PUBLIC_WHATSAPP_NUMBER=5518999999999
```

4. Execute o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy no Vercel

O projeto está configurado para deploy automático no Vercel:

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. O deploy será feito automaticamente a cada push na branch principal

### Variáveis de Ambiente no Vercel:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_FB_PIXEL_ID` - Facebook Pixel ID
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - Número do WhatsApp (formato: 5518999999999)

## 📁 Estrutura do Projeto

```
HSF2/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal com SEO
│   ├── page.tsx           # Página inicial
│   ├── investidores-usina-solar/  # Landing Page de Investidores
│   ├── globals.css        # Estilos globais
│   ├── sitemap.ts        # Sitemap para SEO
│   └── robots.ts         # Robots.txt
├── components/
│   ├── analytics/        # Componentes de tracking
│   ├── layout/           # Componentes de layout
│   ├── sections/         # Seções da página
│   └── ui/               # Componentes UI reutilizáveis
├── contexts/             # Context API
├── public/               # Arquivos estáticos
├── types/                # Tipos TypeScript
└── package.json
```

## 🎨 Design System

### Cores

- **Verde Petróleo Escuro** (`petroleum-dark`): #0d1751 - Base institucional
- **Verde Petróleo Claro** (`petroleum-light`): #1a2a6b - Hover states
- **Amarelo Primário** (`yellow-primary`): #FFD700 - CTAs e destaques
- **Amarelo Claro** (`yellow-light`): #FFE44D - Hover de CTAs
- **Cinza Claro** (`gray-light`): #F5F5F5 - Fundos alternativos

### Tipografia

- **Fonte**: Inter (Google Fonts)
- **Títulos**: Font-weight semibold/bold
- **Corpos**: Font-weight regular

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔍 SEO

O site está preparado para SEO com:
- Meta tags otimizadas
- Sitemap.xml automático
- Robots.txt configurado
- Open Graph tags
- Estrutura semântica HTML5

## 📊 Tracking e Analytics

O projeto está preparado para integração com:
- **Google Analytics** - Via variável `NEXT_PUBLIC_GA_ID`
- **Facebook Pixel** - Via variável `NEXT_PUBLIC_FB_PIXEL_ID`

Os componentes de tracking são carregados apenas se as variáveis estiverem configuradas.

## 🎯 Funcionalidades

### Páginas

1. **Home Page** - Site institucional completo
2. **Landing Page de Investidores** (`/investidores-usina-solar`) - LP focada em conversão para investidores qualificados

### Componentes Interativos

- **Header Fixo** - Menu sticky com transparência (apenas na home)
- **Modal de Formulário** - Formulário em modal para landing page
- **Formulário de Contato** - Validação e submissão
- **Botão WhatsApp Flutuante** - Acesso rápido ao WhatsApp
- **Animações** - Transições suaves com Framer Motion

## 🚀 Build para Produção

```bash
npm run build
npm start
```

## 📝 Próximos Passos

Para personalizar o site:

1. **Imagens**: Substitua as URLs do Unsplash por suas próprias imagens
2. **Conteúdo**: Atualize textos e informações nas seções
3. **Logos**: Adicione os logos reais dos parceiros
4. **Formulário**: Integre o formulário com sua API/backend
5. **Newsletter**: Configure integração com serviço de email marketing

## 📄 Licença

Este projeto é proprietário da SmartCred.

## 👨‍💻 Desenvolvimento

Desenvolvido seguindo:
- Clean Architecture
- Princípios SOLID
- Melhores práticas de React/Next.js
- Acessibilidade (WCAG)
- Performance otimizada
