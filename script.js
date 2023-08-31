const navigation = document.querySelector('.navigation');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navigation.classList.add('scrolled');
    } else {
        navigation.classList.remove('scrolled');
    }
});

menu.addEventListener('mouseenter', () => {
    menu.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
});

menu.addEventListener('mouseleave', () => {
    menu.style.backgroundColor = 'transparent';
});
