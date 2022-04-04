const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const links = document.querySelectorAll('.header .nav-bar .nav-list ul li a, body');
const header = document.querySelector('.header.container')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent'
    }
});

links.forEach(function (e) {
    e.onclick = function (el) {
        el.preventDefault();
        document.querySelector(el.target.dataset.after).scrollIntoView({

            behavior: "smooth"

        })

        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active')

    }
})
