# Festival Lowrider & Cultura Chicana 🚗

Landing page oficial do maior festival de cultura lowrider e chicana do Brasil.

## 🎯 Sobre o Projeto

Site desenvolvido em **Svelte + Vite** para o Festival Lowrider & Cultura Chicana, evento que acontecerá nos dias **28 e
29 de junho de 2025** no Aeroporto Municipal.

### ✨ Principais Características

- 🎨 **Design Responsivo** - Otimizado para todas as telas
- 🚗 **Galeria Interativa** - Fotos autênticas de festivais lowrider
- 📱 **Formulário de Inscrição** - Sistema completo de cadastro
- 🎵 **Programação Completa** - Cronograma dos dois dias de evento
- ♿ **Acessibilidade Total** - Conforme padrões WCAG

## 🛠️ Tecnologias

- **Framework**: Svelte 5.38.1
- **Build Tool**: Vite 7.1.2
- **Linguagem**: JavaScript com suporte TypeScript
- **Estilização**: CSS Vanilla com CSS Variables
- **Gerenciador**: npm

## 🚀 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Script interativo
./start.sh
```

## 📁 Estrutura do Projeto

```
src/
├── lib/                    # Componentes da página
│   ├── Header.svelte      # Navegação responsiva
│   ├── Hero.svelte        # Banner principal
│   ├── About.svelte       # Sobre o evento
│   ├── Activities.svelte  # Principais atrações
│   ├── Gallery.svelte     # Galeria de fotos
│   ├── Schedule.svelte    # Programação
│   ├── Location.svelte    # Local do evento
│   ├── Partners.svelte    # Parceiros
│   ├── Team.svelte        # Equipe organizadora
│   ├── Contact.svelte     # Formulário de contato
│   ├── Footer.svelte      # Rodapé
│   └── AssetManager.js    # Gerenciamento de assets
├── App.svelte             # Componente principal
├── main.js                # Entry point
└── app.css                # Estilos globais
```

## 🎨 Sistema de Cores

```css
:root {
    --primary: #ff6b35; /* Laranja */
    --secondary: #764ba2; /* Roxo */
    --accent: #667eea; /* Azul */
    --dark: #1a1a1a; /* Escuro */
    --light: #f8f9fa; /* Claro */
}
```

## 📸 Galeria de Imagens

A galeria utiliza imagens autênticas de festivais lowrider, incluindo:

- Cultura Lowrider Old School
- Hispanic Heritage Festival
- Altar Dia de los Muertos
- Lowrider Laranja Festival
- Lowrider Bike da Juventude
- Chevys Vintage 1939-1949
- Família no Festival Lowrider
- Cultura Pachuco - Zoot Suits
- Slow & Low Chicago Festival

## 🎪 Principais Atrações

- 🚗 **Exposição Lowriders** - 200+ carros customizados
- 🚲 **Lowbikes Show** - Bikes com estilo único
- 🏁 **Disputa In Roça** - Corrida radical de bikes
- 🚙 **Trilhas 4x4** - Aventura off-road
- 🎨 **Arte Chicana** - Grafite e arte ao vivo
- 🏆 **Hop Contest** - Competição de suspensão hidráulica

## 📱 Desenvolvimento

### Configuração IDE Recomendada

[VS Code](https://code.visualstudio.com/) + [Svelte Extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

### Padrões de Código

- Componentes isolados e reutilizáveis
- CSS com escopo por componente
- Sistema de variáveis CSS centralizadas
- Design mobile-first
- Acessibilidade como prioridade

## 🌐 Deploy

O projeto está configurado para deploy no Netlify com build automático.

## 📄 Licença

© 2025 Festival Lowrider & Cultura Chicana. Todos os direitos reservados.
