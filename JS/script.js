// Бегущая строка
const marqueeContent = document.getElementById('marqueeContent');

function setMarqueeSpeed(speedSeconds) {
    if (marqueeContent) {
        marqueeContent.style.animationDuration = `${speedSeconds}s`;
    }
}

function reverseMarquee() {
    if (marqueeContent) {
        if (marqueeContent.style.animationDirection === 'reverse') {
            marqueeContent.style.animationDirection = 'normal';
        } else {
            marqueeContent.style.animationDirection = 'reverse';
        }
    }
}