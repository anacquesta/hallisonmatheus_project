# HM · Hallison Matheus — Advocacia Estratégica

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62B)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

Um website institucional e painel administrativo ultra-premium desenvolvido para o escritório **Hallison Matheus Advocacia**. O projeto combina uma identidade visual sofisticada de alta-costura digital com um sistema robusto de gerenciamento de conteúdo integrado ao banco de dados em tempo real.

---

## 🎨 Conceito Visual & Design System

O projeto adota a identidade **Light Premium (Cloudy Day)**, fugindo de clichês corporativos escuros ou excessivamente contrastantes, oferecendo uma experiência de leitura limpa, luxuosa e editorial.

### 🎨 Paleta de Cores
* **Fundo Primário (`#ECEEF1`):** Um cinza-claro suave e sofisticado que transmite calmaria, sobriedade e refinamento.
* **Azul Escuro Navy (`#1A2B4A`):** Cor da autoridade e do intelecto jurídico, aplicada em títulos e botões principais.
* **Azul Royal Accent (`#185FA5`):** Utilizado para links dinâmicos e focos visuais estratégicos.
* **Ouro Nobre Warm (`#B8A068`):** Detalhes decorativos de molduras, cantoneiras e marcações que conferem o selo de sofisticação.
* **Linhas de Grade (`rgba(15, 30, 60, 0.035)`):** Um grid sutil que confere uma estrutura geométrica de luxo à navegação.

### 📐 Geometria de Molduras e Simetria
* **Alinhamento a 64px:** O header de navegação (Navbar), o painel principal (Hero) e o rodapé (Footer) compartilham do mesmo recuo lateral de `64px` nos desktops, criando um fluxo visual coeso e simétrico do topo à base do site.
* **Moldura de Retrato Premium:** O retrato principal no Hero é recuado a exatos `24px` de sua moldura cinza em todas as quatro direções, apresentando uma borda perfeitamente regular.
* **Cantoneiras Flutuantes (Regra dos 5px):** Cantoneiras decorativas douradas de cantos e arestas flutuam precisamente a exatos `5px` para fora dos limites físicos do retrato.
* **Efeito Tridimensional das Especialidades:** As tags de área de atuação jurídica cruzam e se projetam a `10px` para fora da borda do retrato, dando um toque de profundidade editorial tridimensional inédito.

---

## 🚀 Principais Funcionalidades

### 💻 Landing Page (Página Principal)
* **Navbar Dinâmica:** Muda sua opacidade e estilo de forma inteligente ao rolar a página (`scroll > 80px`), adicionando desfoque de fundo (backdrop-filter blur).
* **Hero Section Editorial:** Enquadramento de revista de luxo, com textos, links de agendamento e o retrato simétrico otimizados para encaixe exato em 100% da altura da tela (`100vh`), sem sobras.
* **Seção de Diferenciais (Carrossel 3D):** Apresentação interativa tridimensional das vantagens e metodologias de atuação do escritório.
* **Áreas de Atuação Jurídica:** Acordeões responsivos detalhando a atuação em Direito Civil, Compliance, Trabalhista, Empresarial e Imobiliário.
* **Blog Integrado:** Exibição dinâmica de artigos e teses jurídicas de autoria do advogado.
* **Contatos & Formulários:** Links inteligentes direcionados diretamente ao agendamento de consultas pelo WhatsApp corporativo.

### 🔐 Painel Administrativo (`/admin`)
* **Rota Protegida:** Acesso restrito a administradores via `ProtectedRoute` e sistema de estado global com `AuthContext`.
* **Gerenciamento Completo de Conteúdo:** Edição em tempo real de textos do Hero, informações de perfil ("Sobre Mim"), respostas de FAQ e publicações do Blog.
* **Sincronização Direta:** Conexão nativa com a API do **Supabase** para salvar alterações no banco de dados e sincronizá-las instantaneamente com a página pública.

---

## 📁 Estrutura de Pastas e Arquivos

```text
hallisonmatheus_project/
├── public/                 # Assets públicos (imagens de portraits e logotipos)
├── src/
│   ├── api/
│   │   └── mockData.js     # Dados estáticos e estruturas de fallback da aplicação
│   ├── components/
│   │   ├── admin/          # Componentes reutilizáveis do Painel Admin
│   │   ├── landing/        # Módulos estruturais da Landing Page (Hero, Navbar, etc.)
│   │   └── ui/             # Componentes primitivos Shadcn UI (button, card, dialog...)
│   ├── hooks/
│   │   └── use-mobile.jsx  # Hook para detecção de viewports de dispositivos móveis
│   ├── lib/
│   │   ├── AuthContext.jsx # Contexto global de controle de autenticação do usuário
│   │   ├── supabase.js     # Inicialização e cliente do Supabase
│   │   └── utils.js        # Utilitários de classes e junção de Tailwind
│   ├── pages/
│   │   ├── admin/          # Páginas de gerenciamento administrativo
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminBlog.jsx
│   │   │   └── ...
│   │   └── Home.jsx        # Página inicial unificada (ponto central da Landing Page)
│   ├── App.jsx             # Roteador principal e gerenciador de fluxos da aplicação
│   ├── index.css           # Estilos globais e tokens do Design System
│   └── main.jsx            # Ponto de entrada de compilação da aplicação React
├── tailwind.config.js      # Configurações de breakpoints e temas do Tailwind
├── vite.config.js          # Configuração de build e plugins do Vite
└── README.md               # Este guia descritivo
```

---

## 🛠️ Tecnologias Utilizadas

* **React (v18):** Biblioteca para desenvolvimento de componentes reativos e interfaces SPA.
* **Vite:** Bundler de última geração com recarregamento rápido (HMR) em desenvolvimento.
* **Vanilla CSS + Tailwind CSS:** Combinação de Tailwind para utilitários de grid e Vanilla CSS para o design de alta precisão do Hero e elementos artísticos.
* **Supabase:** Banco de dados Postgres e autenticação administrada em nuvem.
* **Lucide React:** Pacote de ícones vetoriais modernos e minimalistas.
* **Shadcn UI:** Primitivos de componentes acessíveis e totalmente customizáveis.

---

## ⚙️ Instalação e Execução Local

### Pré-requisitos
* **Node.js** (v18 ou superior recomendado)
* Gerenciador de pacotes **npm**

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/anacquesta/hallisonmatheus_project.git
   cd hallisonmatheus_project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e configure as credenciais do seu Supabase:
   ```env
   VITE_SUPABASE_URL=sua_url_aqui
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:5173`.

---

## 📦 Build e Deploy

Para gerar o pacote estático otimizado e pronto para produção, execute:
```bash
npm run build
```

Os arquivos de distribuição prontos para hospedagem serão gerados na pasta `/dist`.

---

## ✒️ Licença e Autores

Desenvolvido para **Hallison Matheus Advocacia Estratégica**.
Design System e engenharia de layout projetados sob rígidos padrões de sofisticação.

---
📅 *Última atualização de layout e sincronização de simetria: Maio de 2026.*
