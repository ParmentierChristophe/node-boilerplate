start-db:
	@docker-compose up -d postgres
.PHONY: start-db

migrate:
	@docker-compose up migrate
.PHONY: migrate

migrate-undo-all:
	@docker-compose up migrate-undo-all
.PHONY: migrate-undo

setup-db: start-db migrate
.PHONY: setup-db

seed:
	@docker-compose up seed
.PHONY: seed

app:
	@docker-compose up app
.PHONY: app
