# Portfolio - Currículo
## Descrição
Este projeto é um aplicativo de portfólio desenvolvido em React Native utilizando o Expo. Ele apresenta informações sobre o desenvolvedor, incluindo detalhes pessoais, 
formações, habilidades e projetos realizados. A navegação é feita através de um menu que permite alternar entre diferentes seções do portfólio.

## Funcionalidades
Início: Exibe uma imagem e informações básicas sobre o desenvolvedor, além de links para perfis no LinkedIn e GitHub.
Sobre Mim: Fornece uma descrição detalhada sobre a trajetória e interesses do desenvolvedor.
Formações: Lista as formações acadêmicas e profissionais do desenvolvedor.
Habilidades: Mostra uma coleção de habilidades técnicas do desenvolvedor.
Projetos: Exibe uma galeria de projetos realizados, com descrições e links para os repositórios no GitHub.

## Instalação
Clone o repositório:
`git clone https://github.com/BarbaraLeimig/portfolio-app.git
cd portfolio-app`

Instale as dependências:
`npm install`

Inicie o aplicativo:
`npx expo start`

## Estrutura do Projeto
App.js: Componente principal que gerencia a navegação e a exibição das diferentes páginas do portfólio.
assets/js/AboutMe.js: Componente que renderiza a seção "Sobre Mim".
assets/js/Education.js: Componente que renderiza a seção "Formações".
assets/js/Skills.js: Componente que renderiza a seção "Habilidades".
assets/js/Projects.js: Componente que renderiza a seção "Projetos".
assets/js/Home.js: Componente que renderiza a seção "Início".

## Dependências
- react: ^17.0.2
- react-native: ^0.64.2
- expo: ^42.0.0
- @expo/vector-icons: ^12.0.0
