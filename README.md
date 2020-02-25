## Leaflet.fullscreen
A HTML5 fullscreen plugin for Leaflet.

> Reason for the @runette fork : The root repo is not being actively  managed. This fork starts with version 1.0.3
>
> changes :
>
>* Remove onFullscreenchange and replace with enterFullscreen event in README (#108)
>* included index.d.ts (#106)
>* changed the icon to SVG (#102 and #103)
>* remove fullscreen listener (#100)
>


### Usage

To provide a button for toggling fullscreen on and off:

``` js
// Create a new map with a fullscreen button:
var map = new L.Map('map', {
    fullscreenControl: true,
    // OR
    fullscreenControl: {
        pseudoFullscreen: false // if true, fullscreen to page width and height
    }
});

// or, add to an existing map:
map.addControl(new L.Control.Fullscreen());
```

The plugin also adds several methods to `L.Map` which are always available, even if you choose not to use the fullscreen button:

``` js
map.isFullscreen() // Is the map fullscreen?
map.toggleFullscreen() // Either go fullscreen, or cancel the existing fullscreen.

// `enterFullscreen` Event that's fired when entering  fullscreen.
map.on('enterFullscreen', function () {
    if (map.isFullscreen()) {
        console.log('entered fullscreen');
});

### Localization

To change fullscreen control text:

``` js
map.addControl(new L.Control.Fullscreen({
    title: {
        'false': 'View Fullscreen',
        'true': 'Exit Fullscreen'
    }
}));
```

### Including via NPM

```sh
npm install @runette/leaflet-fullscreen
```

### Type definitions

This version includes a `index.d.ts` with Typescript type definitions for :

```typescript
interface FullscreenOptions extends ControlOptions {}
```
and extensions to the following with the additional properties and methods
```typescript
    interface Map {}

    namespace control  {}

    namespace Control {}
```



### Supported Leaflet Versions

Leaflet 1.0 and later is supported. Earlier versions may work, but are not tested.
