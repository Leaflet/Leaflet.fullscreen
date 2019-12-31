// Type definitions for leaflet-fullscreen 1.0.2
// Project: https://github.com/Leaflet/Leaflet.fullscreen
// Original Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Updated by : Paul Harwood <https://github.com/runette>

import {Control, ControlOptions} from 'leaflet';

declare module 'leaflet' {
    interface MapOptions {
        fullscreenControl?: boolean | fullscreenOptions;
    }

    interface fullscreenOptions extends ControlOptions {
        pseudoFullscreen?: boolean
        title?: {
            'false': string,
            'true': string
        }
    }

    interface Map {
        isfullscreen(): boolean;
        toggleFullscreen(): void;
    }

    namespace control {
        function fullscreen(options: fullscreenOptions): Control.Fullscreen;
        }
    
    namespace Control {
        export class Fullscreen extends Control{
            constructor (options: fullscreenOptions);
            options: fullscreenOptions;
        }
    }

}
