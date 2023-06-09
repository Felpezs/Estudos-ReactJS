# INFORMAÇÕES ÚTEIS REACT

## Criação do projeto

A criacão do projeto pode ser feita com:

- npx create-react-app \<nome do projeto>
- npm create vite@latest

## CSS

Os estilos css usados não são scoped, ou seja, qualquer estilo pode impactar na exibição de um elemento.

## Routers

Quaisquer components que utilizem alguma funcionalidade disponibilizada pelo router, devem ser filhos do browser router

## Hooks

**useReducer**: é como se fosse o useState, mas ao invés da simples atribuição, é possível executar uma função

**useRef**: não re-renderiza o componente

**useLayoutEffect**: executa a função antes da renderização do componente

**useImperativeHandle**: manipulação de elementos no componente filho a partir do componente pai
