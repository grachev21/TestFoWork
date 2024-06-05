const ambulance = document.querySelector('.ambulance');
let offset = 0;

export function carousel() {
    document.querySelector('.next-right').addEventListener('click', function () {
        offset = offset + 360;
        if (offset >= 1080) {
            offset = 0;
        }
        ambulance.style.left = -offset + 'px';
    });

    document.querySelector('.next-left').addEventListener('click', function () {
        offset = offset - 360;
        if (offset <= 0) {
            offset = 0;
        }
        ambulance.style.left = -offset + 'px';

    });
}