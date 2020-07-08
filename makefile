test:
	echo "test from makefile"
lint:
	npx eslint .
install:
	npm install
fix_eslint:
	eslint . --fix
