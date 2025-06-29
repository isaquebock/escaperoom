# Escape Room: Serra Bits

Aplicação web no estilo **Escape Room** composta por três desafios (salas).  
O frontend utiliza **Next.js** e o backend é feito com **Node.js/Express** e **Prisma (SQLite)**.

## Estrutura
.<br>
├── backend/ # API Express + Prisma<br>
├── frontend/ # App Next.js<br>
├── docker-compose.yml<br>
└── Makefile<br>

## Executando com Docker

1. Instale **Docker** e **docker compose**.
2. Na raiz do repositório, execute:

```bash
make build    # gera as imagens
make start    # inicia os containers em segundo plano
A aplicação ficará disponível em:

Frontend: http://localhost:3000

Backend: http://localhost:3001/api

Para encerrar, use make down.

Execução manual (sem Docker)
Backend
bash
Copiar
cd backend
npm install
npm run dev       # desenvolvimento
# ou para produção:
npm run build
npm start
Frontend
Crie (ou edite) .env.local na pasta frontend com a URL da API:

bash
Copiar
NEXT_PUBLIC_API_URL=http://localhost:3001/api
bash
Copiar
cd frontend
npm install
npm run dev       # aplicação em http://localhost:3000
```

## Sobre os desafios
Desafio 1 – cálculo de tábuas para uma estante.</br>
Desafio 2 – memorização das ferramentas apresentadas.<br>
Desafio 3 – enigma final sobre o ofício de marcenaria.<br>

O backend controla o progresso do usuário, impedindo pular etapas. Ao resolver as três salas, a página de sucesso é exibida e o jogo pode ser reiniciado.