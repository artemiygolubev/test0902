document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active')
    document.querySelector('.header__menu').classList.toggle('open')
})