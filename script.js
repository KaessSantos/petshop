"user strict"

let c = (e)=>document.querySelector(e);
let cs = (e)=>document.querySelectorAll(e);


let menu = c('header');
let menuOpen = c('.fa-bars');
let closeMenu = c('.fa-xmark');


menuOpen.addEventListener('click', (event)=>{
    event.preventDefault();
    menu.style.display = 'flex'
    c('.fa-bars').style.display = 'none'
    closeMenu.style.display = 'flex'
});


closeMenu.addEventListener('click', (event)=>{
    event.preventDefault();
    menu.style.display = 'none'
    c('.fa-bars').style.display = 'flex'
    closeMenu.style.display = 'none'
});

