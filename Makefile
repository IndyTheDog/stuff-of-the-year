.PHONY: stop setup test e2e dev
.SILENT: stop setup test e2e dev

setup: stop
	rm -Rf .next cache node_modules
	docker-compose up setup

stop:
	docker-compose down

test:
	xhost +local:* >/dev/null
	docker-compose up -d cypress-components

e2e:
	xhost +local:* >/dev/null
	docker-compose up -d cypress-e2e

dev:
	rm -Rf .next/cache
	docker-compose up -d dev

all: dev e2e test