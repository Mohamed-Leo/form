const container = document.querySelector(".container");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");

const iconclose = document.querySelector('.icon-close');

const login = document.querySelector('.login');


registerlink.addEventListener('mousedown' , () => {

    container.classList.add('active');
});


loginlink.addEventListener('mousedown' , () => {

    container.classList.remove('active');
});


$(iconclose).click(() => {

    $(container).fadeOut(500);
});



$(login).click(() => {

    $(container).fadeIn(500);
});