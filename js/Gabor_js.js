document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('myTopnav');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('nav-colored');
        nav.classList.remove('nav-transparent');
    } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-colored');
    }
});