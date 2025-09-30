# Educational Scam

Este projeto é uma plataforma educativa para simular golpes online e ensinar como identificá-los.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (instalado junto com o Node.js)

## Instalação

1. Após clonar o repositório de tê-lo em sua máquina, abra na raiz do projeto.:

   ```sh
   cd educational-scam
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

## Rodando o projeto

Para iniciar o servidor de desenvolvimento, execute:

```sh
npm run dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173) (ou conforme indicado no terminal).

## Scripts disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento.
- `npm run build` — Gera a versão de produção.

## Project Tree

```
educational-scam
├─ public
│  └─ icon.svg
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ index.css
│  ├─ main.jsx
│  └─ pages
│     ├─ FakeEmail.jsx
│     ├─ FakePayment.jsx
│     ├─ FakePurchase.jsx
│     ├─ LogsTable.jsx
│     ├─ RedFlag.jsx
│     ├─ Registration.jsx
│     ├─ Simulations.jsx
│     ├─ Tips.jsx
│     └─ UsersTable.jsx
```