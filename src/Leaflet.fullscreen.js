L.Control.Fullscreen = L.Control.extend({
    options: {
        position: 'topleft',
        title: 'View Fullscreen'
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-control-fullscreen leaflet-bar leaflet-control'),
            link = L.DomUtil.create('a', 'leaflet-control-fullscreen-button leaflet-bar-part', container);

        this._map = map;

        link.href = '#';
        link.title = this.options.title;

        L.DomEvent.on(link, 'click', this._click, this);

        return container;
    },

    _click: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this._map.toggleFullscreen();
    }
});

L.Map.include({
    isFullscreen: function () {
        if ('fullscreenElement' in document) {
            return document.fullscreenElement === this.getContainer();
        } else if ('mozFullScreenElement' in document) {
            return document.mozFullScreenElement === this.getContainer();
        } else if ('webkitFullscreenElement' in document) {
            return document.webkitFullscreenElement === this.getContainer();
        } else {
            return false;
        }
    },

    toggleFullscreen: function () {
        if (this.isFullscreen()) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        } else {
            if (document.documentElement.requestFullscreen) {
                this.getContainer().requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                this.getContainer().mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                this.getContainer().webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
    }
});

L.Map.mergeOptions({
    fullscreenControl: false
});

L.Map.addInitHook(function () {
    if (this.options.fullscreenControl) {
        this.fullscreenControl = new L.Control.Fullscreen();
        this.addControl(this.fullscreenControl);
    }
});

L.control.fullscreen = function (options) {
    return new L.Control.Fullscreen(options);
};
