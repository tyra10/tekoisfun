const hamMenu = document.querySelector('ham-menu');

const offScreenMenu = document.querySelecotor('.off-screen-menu');
hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})