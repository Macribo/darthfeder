bundle.js: tileworld.js maps.js
	node_modules/.bin/browserify tileworld.js > bundle.js
