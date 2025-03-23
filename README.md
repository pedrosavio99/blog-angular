# Blog Angular

Este é um projeto de blog desenvolvido em Angular para exibir posts de tecnologia. O blog tem um "Post Destaque" em um Big Card e outros posts em Small Cards (3 por linha, centralizados).

## Tecnologias Utilizadas
- Angular 17
- TypeScript
- HTML
- CSS
- Git

## Funcionalidades
- "Post Destaque" em um Big Card na página inicial.
- 12 posts em Small Cards, 3 por linha, centralizados.
- Imagens fictícias (Unsplash) relacionadas aos temas dos posts.
- Navegação para página de conteúdo ao clicar em "Leia mais".
- Estado de carregamento com mensagem "Carregando posts...".
- Layout responsivo (2 cartões por linha em tablets, 1 por linha em celulares).

## Estrutura do Projeto
- src/app/home: Componente principal (Big Card e Small Cards).
- src/app/big-card: Componente do Big Card.
- src/app/small-card: Componente do Small Card.
- src/app/post.service.ts: Serviço com os dados dos posts.
- src/app/app.component.css: Estilização global para centralizar o conteúdo.

## Como Rodar o Projeto
1. Clone o repositório
2. Entre na pasta do projeto:
   cd blog-angular
3. Instale as dependências:
   npm install
4. Inicie o servidor:
   ng serve
5. Acesse no navegador:
   http://localhost:4200

## Tópicos dos Posts
- CI/CD: Automatizando o Desenvolvimento
- Princípios SOLID no Desenvolvimento
- Docker Compose: Gerenciando Múltiplos Containers
- Containers em Aplicações Linux
- Configurando Servidores Pessoais
- Comandos Git Essenciais
- Algoritmos: Fundamentos e Aplicações
- React: Construindo Interfaces Modernas
- Reducers: Gerenciando Estado em Aplicações
- Padrão MVC: Organizando seu Código
- Spring: Desenvolvendo com Java
- Daily Scrum: Melhorando a Comunicação

## Contribuindo
1. Faça um fork do repositório.
2. Crie uma branch:
   git checkout -b minha-nova-funcionalidade
3. Faça suas alterações e commit:
   git commit -m "Adiciona nova funcionalidade"
4. Envie para o remoto:
   git push origin minha-nova-funcionalidade
5. Crie um Pull Request no GitHub.

## Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
