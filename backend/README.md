# Backend do Projeto Golpista

## Requisitos

- Node.js (versão recomendada: 18+)
- npm

## Instalação

```bash
npm install
```

## Como iniciar o servidor

```bash
node server.js
```

## Deploy na Vercel

No painel da Vercel, crie um projeto apontando para esta pasta (`backend/`) como
Root Directory. A Vercel detectará `api/index.js` automaticamente.

Depois do deploy, a API ficará disponível em:

```text
https://SEU-PROJETO.vercel.app/api
```

O SQLite usa `db/database.sqlite` localmente e `/tmp/database.sqlite` na Vercel.
O diretório `/tmp` é efêmero, portanto os dados podem ser apagados entre
execuções. Para dados persistentes, use um banco externo e defina `DB_PATH`
apenas quando o ambiente fornecer um caminho persistente.

## Estrutura

- `controllers/` — Lógica dos controllers
- `models/` — Modelos de dados
- `routes/` — Rotas da aplicação
- `db/` — Banco de dados SQLite

## Observações

- O arquivo `db/database.sqlite` está ignorado no git.
- Crie um arquivo `.env` para variáveis de ambiente, se necessário.