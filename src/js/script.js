let hamburger = document.querySelector('.promo__hamburger'),
    overflow = document.querySelector('.overflow'),
    hamburgerOverflow = document.querySelector('.promo__hamburger-left');

hamburger.addEventListener('click', () => {
    overflow.classList.add('overflow__active');
})

hamburgerOverflow.addEventListener('click', () => {
    overflow.classList.remove('overflow__active')
})