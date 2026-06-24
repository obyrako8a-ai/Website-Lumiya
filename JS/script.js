/* Бегущая строка */
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

/*  Форма */ 
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

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(tel) {
    return /^[\d\+\-\(\)\s]{10,18}$/.test(tel);
}

function submitForm() {
    const fio = document.getElementById('fio').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const email = document.getElementById('email').value.trim();
    const event = document.getElementById('event').value;
    
    if (!fio) {
        alert('Пожалуйста, введите ФИО');
        return;
    }
    if (!tel || !isValidPhone(tel)) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }
    if (!email || !isValidEmail(email)) {
        alert('Пожалуйста, введите корректный email');
        return;
    }
    if (!event) {
        alert('Пожалуйста, выберите тип мероприятия');
        return;
    }
    
    document.getElementById('formContent').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
}

/* Корзина */
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

/* Скролл книги */
const bookGallery = document.querySelector('.book-gallery');
if (bookGallery) {
    bookGallery.addEventListener('wheel', function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            bookGallery.scrollLeft += e.deltaY;
        }
    }, { passive: false });
}

/* Заставка */
const splashScreen = document.getElementById('splashScreen');
const indexBody = document.querySelector('.index-page');

if (splashScreen && indexBody) {
    const urlParams = new URLSearchParams(window.location.search);
    const skipSplash = urlParams.get('skip') === 'true';

    if (skipSplash) {
        splashScreen.classList.add('hide');
        indexBody.classList.remove('splash-active');
        document.body.style.overflow = '';
        document.body.style.overflowY = 'auto';
    } else {
        indexBody.classList.add('splash-active');
        document.body.style.overflow = 'hidden';

        let splashClosed = false;

        function closeSplash() {
            if (splashClosed) return;
            splashClosed = true;
            splashScreen.classList.add('hide');
            indexBody.classList.remove('splash-active');
            document.body.style.overflow = '';
            document.body.style.overflowY = 'auto';
        }

        window.addEventListener('wheel', function(e) {
            if (!splashClosed && e.deltaY > 0) {
                closeSplash();
            }
        }, { passive: true });

        let touchStartY = 0;
        window.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        window.addEventListener('touchmove', function(e) {
            if (splashClosed) return;
            const touchY = e.touches[0].clientY;
            if (touchStartY - touchY > 30) {
                closeSplash();
            }
        }, { passive: true });
    }
}

/* Мобильное меню */
(function() {
    const burger = document.getElementById('burgerBtn');
    const dropdown = document.getElementById('mobileDropdown');
    const overlay = document.getElementById('overlayMenu');
    
    if (!burger || !dropdown || !overlay) return;
    
    const links = dropdown.querySelectorAll('a');

    function toggleMenu(forceState) {
        const isOpen = (forceState !== undefined) ? forceState : !dropdown.classList.contains('open');
        
        if (isOpen) {
            dropdown.classList.add('open');
            overlay.classList.add('open');
        } else {
            dropdown.classList.remove('open');
            overlay.classList.remove('open');
        }
    }

    burger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    overlay.addEventListener('click', function() {
        toggleMenu(false);
    });

    links.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu(false);
        });
    });

    document.addEventListener('click', function(e) {
        const target = e.target;
        const isBurger = burger.contains(target);
        const isDropdown = dropdown.contains(target);
        const isOverlay = overlay.contains(target);
        
        if (!isBurger && !isDropdown && !isOverlay) {
            if (dropdown.classList.contains('open')) {
                toggleMenu(false);
            }
        }
    });

    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 414) {
            if (dropdown.classList.contains('open')) {
                toggleMenu(false);
            }
        }
    });
})();

/* Регистрация */ 
document.addEventListener('DOMContentLoaded', function() {
    /* Кнопки "Зарегистрироваться" на стр мероприятий */
    document.querySelectorAll('.events-button[data-form="open"]').forEach(function(btn) {
        btn.addEventListener('click', openForm);
    });
});