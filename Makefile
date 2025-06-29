.PHONY: build up down logs backend frontend

build:
	docker compose build

start:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

backend:
	docker compose exec backend sh

frontend:
	docker compose exec frontend sh
