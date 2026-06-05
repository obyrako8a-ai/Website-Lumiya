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

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // отменяем отправку на сервер
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  console.log('Данные формы:', data);
  alert('Форма собрана! Данные в консоли');
});