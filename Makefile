# See the README for installation instructions.
UGLIFY = node_modules/.bin/uglifyjs
SASS = node_modules/.bin/sass

.PHONY: all
all: dist/Leaflet.fullscreen.min.js dist/Leaflet.fullscreen.min.css

.PHONY: clean
clean:
	rm -f dist/Leaflet.fullscreen.min.js dist/Leaflet.fullscreen.min.css

dist/Leaflet.fullscreen.min.js:
	$(UGLIFY) src/Leaflet.fullscreen.js > dist/Leaflet.fullscreen.min.js

dist/Leaflet.fullscreen.min.css:
	$(SASS) src/Leaflet.fullscreen.scss dist/Leaflet.fullscreen.min.css
