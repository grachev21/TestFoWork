export function slider_menu() {
    document.querySelector("body").onclick = function (event) {
        let target = event.target;
        let class_name = target.className;

        if (class_name == "click-menu") {
            document.querySelector(".slider").setAttribute("style", "left: 0px; transition: .3s;");
            document.querySelector(".blackout").setAttribute("style", "display: block;");
            document.querySelector('.close-menu').setAttribute('style', 'display: block;');
            document.querySelector('.click-menu').setAttribute('style', 'display: none;');
            document.querySelector('.intro').setAttribute('style', 'z-index: -50;');
        }
        if (class_name == "blackout" || class_name == "close-menu") {
            document.querySelector(".slider").removeAttribute("style");
            document.querySelector(".blackout").removeAttribute("style");
            document.querySelector('.close-menu').removeAttribute('style');
            document.querySelector('.click-menu').removeAttribute('style');
            document.querySelector('.intro').removeAttribute('style');
        }
    }
}