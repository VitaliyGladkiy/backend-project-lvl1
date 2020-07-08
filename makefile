test:
	echo "test from makefile"
lint:
	eslint .
install:
	npm install
fix_eslint:
	eslint bin/src --fix
