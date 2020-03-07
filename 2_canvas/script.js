// Таблица совместимости let:
// https://caniuse.com/#search=let
document.addEventListener("DOMContentLoaded", init);
function init(){
    // window.requestAnimationFrame(draw);
    draw();
}

function draw(){
    let WIDTH = 800, HEIGHT = 600;
    let canvas = document.getElementById('canv');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    ctx.fillStyle = "green";
    let arcRadius = 50;
    ctx.arc(0 + arcRadius, 0 + arcRadius, arcRadius, 0, 2 * Math.PI, false);
    ctx.fill();

    let rectSize = 100;
    ctx.fillStyle = "blue";
    ctx.fillRect(WIDTH - rectSize, 0, rectSize, rectSize);

    // triangle
    let tSize = 100;
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, HEIGHT);
    ctx.lineTo(tSize/2, HEIGHT - tSize);
    ctx.lineTo(tSize, HEIGHT);
    ctx.fill();
    
    let rectSize2 = rectSize*1.5;
    ctx.fillStyle = "orange";
    ctx.fillRect(WIDTH - rectSize, HEIGHT - rectSize2, rectSize, rectSize2);
    
    // window.requestAnimationFrame(draw);
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}