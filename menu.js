document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector(".burger");
    const menuBefore850 = document.querySelector(".menu__before850");
    const closeIcon = document.querySelector(".closeicon");

    burger.addEventListener('click', () => menuBefore850.classList.toggle("showMenu"));
    closeIcon.addEventListener('click', () => menuBefore850.classList.remove("showMenu"));


    const mobileMenu = document.querySelectorAll('.nav a');
    mobileMenu.forEach(link => {
        link.addEventListener('click', () => {
            menuBefore850.classList.remove("showMenu")
        })
    })

});