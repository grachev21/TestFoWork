const windowZoom = document.getElementById('window');
const styleOn = 'width: 80px; height: 70px; font-size: 24px; transition: .7s;'
const styleOff = 'width: 90px; height: 80px; font-size: 28px; transition: .7s;'

export function zoomWindow(params) {
    setInterval(zoom, 1000)
}

function zoom(params) {
    var style = window.getComputedStyle(windowZoom)

    if (style.width == '90px') {
        windowZoom.setAttribute('style', styleOn)
    } else {
        windowZoom.setAttribute('style', styleOff)
    }
}