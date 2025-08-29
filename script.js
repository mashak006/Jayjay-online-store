const images = [
    'images/menpic1.jpg',
    'images/menpic2.jpg',
    'images/menpic3.jpg'
];
let index = 0;
const hero = document.getElementById('hero');

function changeHeroBg() {
    hero.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}
setInterval(changeHeroBg, 3000); // Change every 3 seconds
window.onload = changeHeroBg;

const bar= document.getElementById('bar');
const nav= document.getElementById('navbar')
const close= document.getElementById('close')

if(bar){
    bar .addEventListener('click',()=> {
        nav.classList.add('active');
    })
}

if(close){
    close .addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}