## 1.0.6

Updates this fork with [PR #118](https://github.com/Leaflet/Leaflet.fullscreen/pull/118) from the origin:

Rework Legacy PNG Icons with Font Awesome SVG 

NOTE - this release includes the following breaking change :

`dist/Leaflet.fullscreen.js` is removed and `src/Leaflet.fullscreen.js` added. Use `dist/Leaflet..fullscreen.min.js` in your builds.

## 1.0.5

* Add `role="button"` to the control, and lowercase "fullscreen" in the `title`
attribute to align with Leaflet's core controls. (#2)

NOTE - this release includes a breaking change to correct a type in index.d.ts:

WAS

isfullscreen

NOW

isFullscreen

## 1.0.4

* reinstated backward compatibility with `fullscreenOptions`

## 1.0.3

* included index.d.ts (#106)
* changed the icon to SVG (#102 and #103)
* remove fullscreen listener (#100)


## 1.0.2

* Invalidate map size on fullscreen toggle (#61)

## 1.0.1

* Fix package.json main
* Switch license to ISC

## 1.0.0

* pseudoFullscreen option
* Fix project structure and CSS

## 0.0.4

* Fix for multiple maps on one page
* Fix cancel full screen mode in Firefox (#29)
* Center icon on touch devices (#31)
* Fix IE8 support (#32)

## 0.0.3

* Added IE11 native fullscreen support (#27)

## 0.0.2

* Set appropriate title when fullscreen (#17)
* Replace on('load') with whenReady (#19)

## 0.0.1

* Project restructuring
* New icons, including retina icons

## 0.0.0

* Initial release
