document.addEventListener('DOMContentLoaded', () => {
    const blogSection = document.getElementById('blog-section');

    blogSection.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            blogSection.scrollBy(0, 50);
        } else {
            blogSection.scrollBy(0, -50);
        }
    });

    blogSection.addEventListener('touchstart', handleTouchStart, false);
    blogSection.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;
    let y1 = null;

    function handleTouchStart(evt) {
        const firstTouch = evt.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
        if (!x1 || !y1) {
            return;
        }

        let x2 = evt.touches[0].clientX;
        let y2 = evt.touches[0].clientY;

        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            // Horizontal swipe detected
        } else {
            // Vertical swipe detected
            if (yDiff > 0) {
                blogSection.scrollBy(0, -50);
            } else {
                blogSection.scrollBy(0, 50);
            }
        }

        x1 = null;
        y1 = null;
    }

    const enBtn = document.getElementById('en-btn');
    const ruBtn = document.getElementById('ru-btn');

    // Логика переводаЖ
    // enBtn.addEventListener('click', () => {
    //     document.documentElement.lang = 'en';
    // });
    // ruBtn.addEventListener('click', () => {
    //     document.documentElement.lang = 'ru';
    // });


});
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const headerContainer = document.querySelector('.header-container');

    menuToggle.addEventListener('click', () => {
        headerContainer.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const logInButton = document.querySelector('.log-in');
    const signUpButton = document.querySelector('.sign-up');
    const partner = document.querySelector('.partner');

    logInButton.addEventListener('click', () => {
        // Добавьте логику для кнопки "LOG IN"
        window.location.href = '#';
        console.log('LOG IN')
    });

    signUpButton.addEventListener('click', () => {
        // Добавьте логику для кнопки "SIGN UP"
        window.location.href = '#';
        console.log('SIGN UP')
    });
    partner.addEventListener('click', () => {
        // Добавьте логику для кнопки "BECOM PARTNER"
        window.location.href = '#';
        console.log('BECOM PARTNER')
    });


});

document.addEventListener('DOMContentLoaded', () => {
    const items1 = document.getElementById('graphic-items-1');
    const items2 = document.getElementById('graphic-items-2');
    const items3 = document.getElementById('graphic-items-3');

    function updateAnimationDuration() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            items1.style.animationDuration = `${items1.scrollHeight / 10}s`; // Adjust speed based on content height
            items2.style.animationDuration = `${items2.scrollHeight / 10}s`;
            items3.style.animationDuration = `${items3.scrollHeight / 10}s`;
        } else {
            items1.style.animationDuration = `${items1.scrollHeight / 50}s`;
            items2.style.animationDuration = `${items2.scrollHeight / 50}s`;
            items3.style.animationDuration = `${items3.scrollHeight / 50}s`;
        }
    }

    updateAnimationDuration(); // Initial check
    window.addEventListener('resize', updateAnimationDuration); // Update on resize

    items1.style.animationName = 'scrollUp';
    items2.style.animationName = 'scrollDown';
    items3.style.animationName = 'scrollUp';
});