test:
	echo "test from makefile"
lint:
	npx eslint .
install:
	npm install
fix_eslint:
	eslint . --fix
brain-games:
	npm run
publish:
	npm publish --dry-run
link:
	npm link bin
