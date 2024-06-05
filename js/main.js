import { on, off } from './adaptability.js';
import { slider_menu } from './slider_menu.js';
import { zoomWindow } from './animation.js';
import { carousel } from './carousel.js';


window.onload = function main() {

    window.addEventListener("resize", mobile);
    document.addEventListener("DOMContentLoaded", mobile())
    function mobile() {
        const change_mobile = document.documentElement.clientWidth;
        if (change_mobile <= 991) {
            on()
        } else {
            off()
        }
    }

    slider_menu()
    zoomWindow()
    carousel()

}