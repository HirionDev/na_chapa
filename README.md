# Na Chapa

Sistema completo de gestão para lanchonete (pedidos, cardápio, relatórios, IA local, WhatsApp, impressora).

## Estrutura

- **backend/** — Servidor Node.js (API, IA, WhatsApp, impressora, banco)
- **frontend/** — React + Electron (interface de operação)
- **data/** — Imagens, seeds, backups
- **scripts/** — Scripts auxiliares (população, backup, etc)
- **ai/** — (Opcional) microserviços Python, modelos extra de IA local

## Passos para rodar

### 1. Banco de dados
- Suba um PostgreSQL local:  
  - Usuário: `postgres`  
  - Senha: `hirion`  
  - Banco: `na_chapa`
- Ou ajuste no `.env`

### 2. Backend
```sh
cd backend
cp .env.example .env  # e edite se precisar
npm install
npx prisma migrate dev --name init
npm run dev           # ou npm start
