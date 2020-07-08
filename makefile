test:
	echo "test from makefile"
lint:
	npx eslint .
install:
	npm ci
fix_eslint:
	eslint bin/src --fix
