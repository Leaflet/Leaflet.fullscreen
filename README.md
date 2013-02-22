A HTML5 fullscreen implementation for Leaflet.

## Usage

```
var map = new L.Map('map', {fullscreenControl: true});
```

## API

`L.Map#isFullscreen()`: Is the map fullscreen?

`L.Map#toggleFullscreen()`: Either go fullscreen, or cancel the existing fullscreen.

`fullscreenchange` event: Fired by map when entering or exiting fullscreen.

`L.Control.Fullscreen`: A fullscreen button. Or use the `{fullscreenControl: true}` option when creating L.Map.
