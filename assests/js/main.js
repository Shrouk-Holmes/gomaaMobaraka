let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let shery = document.querySelector('.shery');
let music = new Audio('assets/Audio/1.mp3');
window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    shery.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        shery.style.fontSize = '67px';
        shery.style.position = 'fixed';
        if (scrollY >= 450) {
            shery.style.display = 'none';
        } else {
            shery.style.display = 'block';
        }
        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }
    }
};

let play=document.getElementById('play');
function playmusic(){
    let audio = new Audio("assests/Audio/1.mp3");
    audio.play();
}
play.addEventListener('click',playmusic);







