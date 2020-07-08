test:
	echo "test from makefile"
lint:
	npx eslint .
init:
	npm ci
fix_eslint:
	eslint bin/src --fix
