.PHONY: stop setup test e2e dev

setup: stop
	rm -Rf .next cache node_modules
	docker-compose up setup

stop:
	docker-compose down

test:
	xhost +local:*
	docker-compose up cypress-components -d

e2e:
	xhost +local:*
	docker-compose up cypress-e2e -d

dev:
	docker-compose up dev -d

all: dev e2e test