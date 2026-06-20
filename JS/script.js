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

function openForm() {
  document.getElementById('overlay').classList.add('show');
  document.getElementById('formContent').style.display = 'block';
  document.getElementById('successMsg').style.display = 'none';
}
function closeForm() {
  document.getElementById('overlay').classList.remove('show');
}
function closeOnBg(e) {
  if (e.target === document.getElementById('overlay')) closeForm();
}
function onSelectChange(sel) {
  sel.classList.remove('placeholder-active');
}
function submitForm() {
  const fio = document.getElementById('fio').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const email = document.getElementById('email').value.trim();
  const event = document.getElementById('event').value;
  if (!fio || !tel || !email || !event) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  document.getElementById('formContent').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
}

function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    const counter = document.getElementById('basketCount');
    if (counter) {
        const current = parseInt(counter.textContent, 10) || 0;
        const next = current + 1;
        counter.textContent = next;
        counter.classList.add('show');
    }
}

const bookGallery = document.querySelector('.book-gallery');
if (bookGallery) {
    bookGallery.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            bookGallery.scrollLeft += e.deltaY;
        }
    }, { passive: false });
}