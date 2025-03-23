import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PostSection {
  title: string;
  text: string;
  items?: string[];
}

export interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  sections: PostSection[];
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    // Post Destaque (já existente e funcionando)
    {
      id: 1,
      title: 'Post Destaque',
      description: 'Este é o post principal do blog.',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      sections: [
        {
          title: 'Como Criar um Blog em Angular: Um Passo a Passo Completo',
          text: 'Neste artigo, vou detalhar o processo que usamos para criar este blog em Angular. Vamos cobrir desde a configuração inicial até as estilizações e configurações de roteamento.'
        },
        {
          title: '1. Configuração Inicial do Projeto',
          text: 'Começamos criando um novo projeto Angular usando o Angular CLI. No Project IDX, executamos o comando:',
          items: [
            'ng new blog-app',
            'Escolhemos usar SCSS para os estilos e ativamos o roteamento.',
            'Depois, inicializamos um repositório Git para versionamento: git init, git add ., git commit -m "Initial commit".'
          ]
        },
        {
          title: '2. Criação dos Componentes',
          text: 'Criamos os componentes principais do blog: Header, Big Card, Small Card e Footer. Usamos os seguintes comandos:',
          items: [
            'ng generate component header',
            'ng generate component big-card',
            'ng generate component small-card',
            'ng generate component footer'
          ]
        },
        {
          title: '3. Estruturação do Layout',
          text: 'No app.component.html, organizamos o layout geral com o cabeçalho, o conteúdo principal e o rodapé. Usamos flexbox no app.component.css para fixar o rodapé no final da página:',
          items: [
            'Adicionamos <app-header>, <main> com <router-outlet>, e <app-footer>.',
            'Estilização com flexbox: min-height: 100vh, flex: 1 0 auto no main, e flex-shrink: 0 no footer.'
          ]
        },
        {
          title: '4. Configuração do Roteamento',
          text: 'Configuramos as rotas no app.routes.ts para navegar entre a página inicial e a página de conteúdo. Criamos o HomeComponent para exibir o Big Card e os Small Cards na página inicial:',
          items: [
            'Rotas: { path: "", component: HomeComponent }, { path: "content/:id", component: ContentPageComponent }',
            'Comando: ng generate component home'
          ]
        },
        {
          title: '5. Estilização dos Componentes',
          text: 'Estilizamos os componentes para um design moderno e funcional. Aqui estão alguns detalhes:',
          items: [
            'Header: Fundo escuro, links brancos com hover interativo.',
            'Big Card: Imagem grande, sombra suave, botão "Leia mais" azul com hover.',
            'Small Card: Layout flexível, sombra suave, botão "Leia mais" verde com hover.',
            'Footer: Fundo escuro, seções organizadas, ícones de redes sociais com hover.'
          ]
        },
        {
          title: '6. Configuração de Dados Dinâmicos',
          text: 'Criamos um PostService para simular dados dinâmicos e fornecer os posts para o blog:',
          items: [
            'Comando: ng generate service post',
            'Adicionamos um array de posts com título, descrição, imagem e seções de conteúdo.'
          ]
        },
        {
          title: '7. Criação da Página de Conteúdo',
          text: 'Por fim, criamos o ContentPageComponent para exibir o conteúdo dinâmico de um post com base no ID da URL. Usamos o ActivatedRoute para obter o ID e o PostService para buscar os dados.'
        },
        {
          title: 'Conclusão',
          text: 'Com isso, o blog está funcional, estilizado e pronto para uso! Continue adicionando mais posts e personalizando o design conforme necessário.'
        }
      ]
    },
    // Post: CI/CD
    {
      id: 2,
      title: 'CI/CD: Automatizando o Desenvolvimento',
      description: 'Entenda como CI/CD pode melhorar seu fluxo de desenvolvimento.',
      imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028', // Código e automação
      sections: [
        {
          title: 'O que é CI/CD?',
          text: 'CI/CD (Integração Contínua/Entrega Contínua) é uma prática que automatiza o processo de integração, teste e entrega de código.'
        },
        {
          title: 'Benefícios do CI/CD',
          text: 'Alguns benefícios incluem:',
          items: [
            'Redução de erros manuais.',
            'Entregas mais rápidas e frequentes.',
            'Melhor colaboração entre equipes.'
          ]
        },
        {
          title: 'Ferramentas Populares',
          text: 'Existem várias ferramentas para implementar CI/CD:',
          items: [
            'Jenkins: Uma das mais populares para automação.',
            'GitHub Actions: Integração nativa com repositórios GitHub.',
            'GitLab CI/CD: Solução integrada no GitLab.'
          ]
        }
      ]
    },
    // Post: SOLID
    {
      id: 3,
      title: 'Princípios SOLID no Desenvolvimento',
      description: 'Conheça os princípios SOLID para escrever código mais limpo.',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', // Quadro com diagramas de design
      sections: [
        {
          title: 'O que é SOLID?',
          text: 'SOLID é um acrônimo para cinco princípios de design de software que ajudam a criar sistemas mais robustos e manuteníveis.'
        },
        {
          title: 'Os Cinco Princípios',
          text: 'Os princípios SOLID são:',
          items: [
            'S - Single Responsibility Principle: Uma classe deve ter apenas uma responsabilidade.',
            'O - Open/Closed Principle: Classes devem estar abertas para extensão, mas fechadas para modificação.',
            'L - Liskov Substitution Principle: Subclasses devem ser substituíveis por suas superclasses.',
            'I - Interface Segregation Principle: Classes não devem ser forçadas a implementar interfaces que não usam.',
            'D - Dependency Inversion Principle: Dependa de abstrações, não de implementações concretas.'
          ]
        }
      ]
    },
    // Post: Docker Compose
    {
      id: 4,
      title: 'Docker Compose: Gerenciando Múltiplos Containers',
      description: 'Aprenda a usar Docker Compose para orquestrar containers.',
      imageUrl: 'https://images.unsplash.com/photo-1597495211020-2b4d8b3e5e1d', // Containers e servidores
      sections: [
        {
          title: 'O que é Docker Compose?',
          text: 'Docker Compose é uma ferramenta para definir e gerenciar aplicações multi-container usando arquivos YAML.'
        },
        {
          title: 'Como Usar',
          text: 'Passos básicos para usar Docker Compose:',
          items: [
            'Crie um arquivo docker-compose.yml.',
            'Defina os serviços, redes e volumes necessários.',
            'Execute o comando: docker-compose up.'
          ]
        }
      ]
    },
    // Post: Container em Aplicações Linux
    {
      id: 5,
      title: 'Containers em Aplicações Linux',
      description: 'Como usar containers para rodar aplicações em Linux.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Servidor Linux
      sections: [
        {
          title: 'Introdução aos Containers',
          text: 'Containers permitem empacotar aplicações e suas dependências para rodar de forma consistente em qualquer ambiente.'
        },
        {
          title: 'Vantagens no Linux',
          text: 'Usar containers em Linux oferece:',
          items: [
            'Isolamento de processos.',
            'Uso eficiente de recursos.',
            'Facilidade de implantação.'
          ]
        }
      ]
    },
    // Post: Servidores Pessoais
    {
      id: 6,
      title: 'Configurando Servidores Pessoais',
      description: 'Dicas para criar e gerenciar seu próprio servidor.',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', // Servidor físico
      sections: [
        {
          title: 'Por que Ter um Servidor Pessoal?',
          text: 'Um servidor pessoal pode ser usado para hospedar sites, armazenar dados ou rodar aplicações.'
        },
        {
          title: 'Passos Iniciais',
          text: 'Como configurar um servidor pessoal:',
          items: [
            'Escolha um sistema operacional (ex.: Ubuntu Server).',
            'Configure um IP estático.',
            'Instale e configure serviços como Apache ou Nginx.'
          ]
        }
      ]
    },
    // Post: Comandos Git
    {
      id: 7,
      title: 'Comandos Git Essenciais',
      description: 'Os comandos Git que todo desenvolvedor precisa conhecer.',
      imageUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498', // Terminal com código
      sections: [
        {
          title: 'Introdução ao Git',
          text: 'Git é um sistema de controle de versão amplamente usado para gerenciar código.'
        },
        {
          title: 'Comandos Básicos',
          text: 'Alguns comandos essenciais do Git:',
          items: [
            'git init: Inicializa um repositório.',
            'git add .: Adiciona arquivos ao staging.',
            'git commit -m "mensagem": Cria um commit.',
            'git push: Envia alterações para o repositório remoto.'
          ]
        }
      ]
    },
    // Post: Algoritmos
    {
      id: 8,
      title: 'Algoritmos: Fundamentos e Aplicações',
      description: 'Entenda os conceitos básicos de algoritmos.',
      imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae00ca6', // Quadro com fórmulas
      sections: [
        {
          title: 'O que são Algoritmos?',
          text: 'Algoritmos são sequências de passos para resolver um problema.'
        },
        {
          title: 'Exemplos Comuns',
          text: 'Alguns algoritmos fundamentais:',
          items: [
            'Busca Binária: Para encontrar elementos em uma lista ordenada.',
            'Ordenação por Bolha: Para ordenar listas.',
            'DFS e BFS: Para busca em grafos.'
          ]
        }
      ]
    },
    // Post: React
    {
      id: 9,
      title: 'React: Construindo Interfaces Modernas',
      description: 'Aprenda os conceitos básicos do React.',
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f1348acda96b', // Interface de usuário
      sections: [
        {
          title: 'O que é React?',
          text: 'React é uma biblioteca JavaScript para construir interfaces de usuário.'
        },
        {
          title: 'Conceitos Principais',
          text: 'Alguns conceitos fundamentais do React:',
          items: [
            'Componentes: Blocos reutilizáveis de UI.',
            'Estado (State): Gerencia dados dinâmicos.',
            'Props: Passa dados entre componentes.'
          ]
        }
      ]
    },
    // Post: Reducers
    {
      id: 10,
      title: 'Reducers: Gerenciando Estado em Aplicações',
      description: 'Como usar reducers para gerenciar estado.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Código em um laptop
      sections: [
        {
          title: 'O que são Reducers?',
          text: 'Reducers são funções puras que determinam como o estado de uma aplicação muda em resposta a uma ação.'
        },
        {
          title: 'Uso com Redux',
          text: 'No Redux, os reducers são usados para:',
          items: [
            'Receber o estado atual e uma ação.',
            'Retornar um novo estado com base na ação.'
          ]
        }
      ]
    },
    // Post: MVC
    {
      id: 11,
      title: 'Padrão MVC: Organizando seu Código',
      description: 'Entenda o padrão MVC e suas aplicações.',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd0c82c411', // Diagrama de arquitetura
      sections: [
        {
          title: 'O que é MVC?',
          text: 'MVC (Model-View-Controller) é um padrão de arquitetura que separa a lógica de negócios, a interface e o controle.'
        },
        {
          title: 'Componentes do MVC',
          text: 'Os três componentes principais são:',
          items: [
            'Model: Gerencia os dados e a lógica de negócios.',
            'View: Exibe os dados para o usuário.',
            'Controller: Intermediário entre Model e View.'
          ]
        }
      ]
    },
    // Post: Spring
    {
      id: 12,
      title: 'Spring: Desenvolvendo com Java',
      description: 'Conheça o framework Spring para aplicações Java.',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', // Laptop com código
      sections: [
        {
          title: 'O que é Spring?',
          text: 'Spring é um framework Java que simplifica o desenvolvimento de aplicações empresariais.'
        },
        {
          title: 'Módulos Principais',
          text: 'Alguns módulos importantes do Spring:',
          items: [
            'Spring Boot: Para criar aplicações rapidamente.',
            'Spring MVC: Para construir aplicações web.',
            'Spring Data: Para acesso a dados.'
          ]
        }
      ]
    },
    // Post: Daily
    {
      id: 13,
      title: 'Daily Scrum: Melhorando a Comunicação',
      description: 'Como o Daily Scrum pode ajudar sua equipe.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Reunião de equipe
      sections: [
        {
          title: 'O que é Daily Scrum?',
          text: 'Daily Scrum é uma reunião diária curta usada em metodologias ágeis, como Scrum, para alinhar a equipe.'
        },
        {
          title: 'Como Fazer',
          text: 'Passos para um Daily Scrum eficaz:',
          items: [
            'Reúna a equipe por 15 minutos.',
            'Cada membro responde: O que fiz ontem? O que farei hoje? Há algum impedimento?',
            'Mantenha o foco e evite discussões longas.'
          ]
        }
      ]
    }
  ];

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPost(id: number): Observable<Post> {
    const post = this.posts.find(p => p.id === id);
    return of(post!);
  }
}