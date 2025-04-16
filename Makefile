build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

logs:
	docker-compose logs -f

rebuild:
	docker-compose down -v
	docker-compose build --no-cache
	docker-compose up
