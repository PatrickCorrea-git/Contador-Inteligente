# Contador Inteligente (React)

## Descrição

Este é um projeto simples de *contador inteligente* feito com *React*. O projeto demonstra como gerenciar o estado, trabalhar com referências (via useRef) e atualizar o DOM de forma eficiente com React. Além disso, o contador de renderizações é exibido a cada interação com o estado, mostrando a quantidade de vezes que o componente foi re-renderizado.

## Funcionalidades

- *Contador de valores*: Um botão de incremento (+), decremento (-) e reset (Resetar).
- *Contador de renderizações*: Mostra o número de vezes que o componente foi re-renderizado.
- *Botão Reset*: Reseta o contador de valores e o número de renderizações para 0.

## Tecnologias Utilizadas

- *React* (com hooks como useState, useEffect, useRef).
- *JavaScript*.
- *CSS simples* para estilização.

## Como rodar o projeto

1. Clone este repositório:

    git clone https://github.com/seu-usuario/contador-inteligente.git

2. Navegue até a pasta do projeto:

    cd contador-inteligente
    
3. Instale as dependências:

    npm install
    
4. Inicie o servidor de desenvolvimento:

    npm run dev
    
6. Abra o navegador e acesse http://localhost:3000.

## Como funciona

- O contador de *valores* é gerenciado com useState, e seu valor é atualizado a cada clique nos botões de incremento ou decremento.
- O número de *renderizações* é mantido com useRef, permitindo que você acompanhe quantas vezes o componente foi re-renderizado.
- O botão *reset* zera tanto o valor do contador quanto o número de renderizações.

## O que aprendi

- *Gerenciamento de estado* com useState.
- *Uso de referências* com useRef para armazenar valores que não causam re-renderizações.
- Como usar *useEffect* para executar efeitos colaterais, como contar o número de renderizações.
- *Organização de código* e boas práticas em React.
- *Criação de interações simples* e manipulação de DOM.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
