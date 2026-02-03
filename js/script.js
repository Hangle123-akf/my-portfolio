
const lantern = document.getElementById('lantern');
const images = lantern.querySelectorAll('img');

const radius = 120;
let angle = 0;
let isPaused = false;

images.forEach((img, index) => {
    const rotateY = (360 / images.length) * index;
    img.style.transform =
        `rotateY(${rotateY}deg) translateZ(${radius}px) translate(-50%, -50%)`;

    img.addEventListener('mouseenter', () => isPaused = true);
    img.addEventListener('mouseleave', () => isPaused = false);
});

function rotateLantern() {
    if (!isPaused) {
        angle += 0.3;
        lantern.style.transform = `rotateY(${angle}deg)`;
    }
    requestAnimationFrame(rotateLantern);
}

rotateLantern();

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Nhật Duy đã load xong!');

    alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
});
