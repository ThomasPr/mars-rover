
all: dep build test

verify:
	@[ "`node -v`" ] || (echo "node.js not installed"; exit 1)

dep: verify
	npm install

build: verify
	npm run-script build

test: verify
	npm run-script test

clean:
	rm -r dist/
