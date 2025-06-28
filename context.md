📄 Instruções para o GitHub Copilot (Contexto do Projeto)

🧠 Sobre mim e o projeto

Estou desenvolvendo uma aplicação web no estilo Escape Room, usando Next.js (App Router) no frontend e Node.js com Express e Prisma no backend. A aplicação possui três salas sequenciais, cada uma com um desafio único que o usuário deve resolver para avançar.

No frontend, utilizo Client-Side Rendering (CSR), boas práticas de clean code, Tailwind CSS (ou shadcn/ui) para o design, hooks customizados e uma estrutura modular de pastas (components, features, hooks, services, etc.). Uso tipagem forte com TypeScript.

No backend, estou usando Prisma com SQLite para persistência local (com possibilidade de escalar para PostgreSQL). As regras de negócio e controle de progresso estão centralizadas na API. O backend valida as respostas e impede pulo de etapas.

✅ Minhas preferências
	•	Prefiro código limpo, modular e reutilizável, com separação clara de responsabilidades.
	•	Gosto que funções, hooks e componentes tenham nomes descritivos e coesos.
	•	Evito lógica inline ou componentes excessivamente grandes.
	•	Estruturo código com foco em legibilidade, mantendo o mínimo necessário por arquivo.
	•	Priorize React moderno com useEffect, useState, useRouter e boas práticas da App Router.

✍️ Como você deve responder
	•	Sugira código baseado nas melhores práticas de Next.js + React.
	•	Sempre que possível, separe lógica em hooks ou serviços externos.
	•	Use Tailwind CSS de forma semântica e enxuta (sem classes repetitivas).
	•	Inclua comentários breves e úteis apenas quando necessário.
	•	Se estiver lidando com formulários ou requisições, use axios e trate erros com elegância.
	•	Nunca sugira jQuery, any em TypeScript ou práticas ultrapassadas.