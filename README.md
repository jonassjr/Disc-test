## Tete DISC

O Teste DISC é um projeto desenvolvida em Next.js com o objetivo de fornecer uma solução gratuita e acessível para avaliação comportamental baseada no modelo DISC. Este projeto de código aberto permite que desenvolvedores e entusiastas explorem, personalizem e utilizem a ferramenta em diversos contextos, como empresas, projetos acadêmicos ou aplicações pessoais.

Com uma interface intuitiva e funcional, o sistema permite a aplicação de testes, cálculo de resultados e análise das dimensões comportamentais (Dominância, Influência, Estabilidade e Conformidade) de maneira simples e eficiente.

## Principais recursos

- Realize avaliações com base no modelo DISC, permitindo identificar os quatro principais perfis comportamentais: Dominância, Influência, Estabilidade e Conformidade.
- Visualize os resultados das avaliações diretamente na página.
- Código aberto, permitindo que desenvolvedores contribuam e personalizem o projeto de acordo com suas necessidades.

## Tecnologias utilizadas

[![My Skills](https://skillicons.dev/icons?i=ts,next,react,tailwind,npm,git)](https://skillicons.dev)

## instalação


- clone o repositorio
  
``` bash 
  git clone https://github.com/jonassjr/Disc-test.git
```

- instale as dependências
``` bash
  npm install
```

- Execute o projeto
``` bash
  npm run dev
```

## Estrutura do projeto

- `/app/disct-test`: Contem página do teste e questões.
- `/app/results`: Contem página de resultados.
- `/app/components`: Contem componentes reutilizáveis.
- `/app/utils`: Contém utilitários, configurações ou funções auxiliares reutilizáveis em diferentes partes do projeto, como por exemplos:
  calular o resultar e gerar análise.
- `/app/context`: Contém gerenciamento de estado e compartilhamento de dados entre componentes. Essa pasta centraliza lógica de contexto, como controle do estado do teste DISC.
