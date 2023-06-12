.PHONY: stop setup test e2e dev

setup:
	xhost +local:*
	docker-compose up setup

stop:
	docker-compose down

test:
	docker-compose up cypress-components

e2e:
	docker-compose up cypress-e2e -d

dev:
	docker-compose up dev -d