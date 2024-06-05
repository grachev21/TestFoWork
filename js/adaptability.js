const ADDRES = document.querySelectorAll('.addres');
const NUMBER = document.querySelectorAll('.number');
const LOGO = [document.querySelector('.logo')];


export function on() {
    cycle(ADDRES, 'display: none;', 'on');
    cycle(NUMBER, 'font-size: 9px; font-weight: 700; padding: 5px; text-align: center;', 'on');
    cycle(LOGO, 'width: 60px; height: 30px', 'on')
}

export function off() {
    cycle(ADDRES, null, "off");
    cycle(NUMBER, null, 'off');
    cycle(LOGO, null, 'off')
}


function cycle(params, style, flag) {
    for (let index = 0; index < params.length; index++) {
        if (flag == "on") {
            params[index].setAttribute("style", style)
        }
        if (flag == "off") {
            params[index].removeAttribute("style")
        }
    }
}