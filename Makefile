bundle.js: tileworld.js maps.js camera.js
	node_modules/.bin/browserify tileworld.js > bundle.js
