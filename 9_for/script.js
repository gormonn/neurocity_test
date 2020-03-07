document.addEventListener("DOMContentLoaded", init);
function init(){
    draw();
}
function draw(){
    let WIDTH = 800, HEIGHT = 600;
    let canvas = document.getElementById('canv');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    for(let i = 10; i <= 100; i++){
        let rectSize = randomInteger(10, 100);
        let x = randomInteger(0, WIDTH);
        let y = randomInteger(0, HEIGHT);
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(x, y, rectSize, rectSize);
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}