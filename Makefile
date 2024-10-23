# Makefile

.PHONY: all build copy-dist copy-api

all: build copy-dist copy-api

build:
	npm run build

copy-dist:
	sudo cp -R dist/* /var/www/html/

copy-api:
	sudo cp public/api/index.php /var/www/html/api/
