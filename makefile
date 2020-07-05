test:
	echo "test from makefile"
lint:
	eslint bin/src
init:
	npm install
fix_eslint:
	eslint bin/src --fix
