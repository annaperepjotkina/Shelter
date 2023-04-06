
    const burgerMenu = document.querySelector('.burger_menu');
    const navItems = document.querySelector('.nav_menu');
    const docBody = document.querySelector('body');

burgerMenu.addEventListener('click', function(){
    navItems.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    docBody.classList.toggle('lock');
    });

navItems.addEventListener('click', function(){
    navItems.classList.toggle('active');
    burgerMenu.classList.toggle('active')
    });

    