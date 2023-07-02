# INFORMAÇÕES ÚTEIS REACT

## Criação do projeto

A criacão do projeto pode ser feita com:

- `npx create-react-app <nome do projeto>`
- `npm create vite@latest`

Assim criamos um projeto com base no Vite.

## CSS

Os estilos css usados não são scoped, ou seja, qualquer estilo pode impactar na exibição de um elemento.

## Routers

Quaisquer components que utilizem alguma funcionalidade disponibilizada pelo router, devem ser filhos do browser router

## Hooks

**useReducer**: é como se fosse o useState, mas ao invés da simples atribuição, é possível executar uma função

**useRef**: não re-renderiza o componente

**useLayoutEffect**: executa a função antes da renderização do componente

**useImperativeHandle**: manipulação de elementos no componente filho a partir do componente pai

## Testes

O setup para uso de testes do jest no react são feitos da seguinte maneira:

1. `npm install jest -D`
2. `npx jest --init` (Cria os arquivos de configuração para uso do jest)
3. Adicionar `"jest/globals": true` no env do `eslintrc.cjs`
4. `npm i jest-environment-jsdom -D` para uso do react
4. Adicionar configurações para react no `jest.config`
5. `npm i @swc/core @swc/jest -D` (permite o uso do react por meio da conversão de código)
6. Adicionar lib de testes: `npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event -D`
