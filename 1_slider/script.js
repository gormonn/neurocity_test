document.addEventListener("DOMContentLoaded", init);
function init(){
    window.onresize = calcSizes;
    document.addEventListener('click', clickHandler); 
    document.addEventListener('touchstart', handleTouchStart);        
    document.addEventListener('touchmove', handleTouchMove);
}
function calcSizes(){
    let {innerWidth: w, innerHeight: h} = window;
    return {w,h}
}
class Swipe {
    constructor(){
        let {w,h} = calcSizes();
        this.w = w;
        this.h = h;
        this.posX = 0;
        this.posY = 0;
        this.maxPosX = w;
        this.maxPosY = h;
    }
    checkX(num){
        let { w } = this;
        if((num < w) || (num > w)) return;
        return num;
    }
    checkY(num){
        let { h } = this;
        if((num < h) || (num > h)) return;
        return num;
    }
    swipeLeft(){
        let { posX, w } = this;
        this.posX = checkX(posX - w);
    }
    swipeRight(){
        let { posX, w } = this;
        this.posX = checkX(posX + w);
    }
    swipeTop(){
        let { posY, h } = this;
        this.posY = checkY(posY - h);
    }
    swipeBot(){
        let { posY, h } = this;
        this.posY = checkY(posY + h);
    }
    handleTouchStart(e) {
        const firstTouch = getTouches(e)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    }
    handleTouchMove(e) {
        if (!xDown || !yDown) {
            return;
        }
    
        var xUp = e.touches[0].clientX;                                    
        var yUp = e.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
    
        if (Math.abs(xDiff) > Math.abs(yDiff)){
            if ( xDiff > 0 ) {
                /* left swipe */ 
            } else {
                /* right swipe */
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    }
}
function goR(){
    document.getElementsByClassName('container__item')[1].scrollIntoView({ 
        behavior: 'smooth' 
    })
}
function goL(){
    
}
function goT(){
    
}
function goB(){
    
}
function clickHandler(e){
    switch(e.target.dataset.dir){
        case 'left':
            goR();
            break;
        case 'right':
            goR();
            break;
        case 'top':
            goR();
            break;
        case 'bot':
            goR();
            break;
        case undefined:
            return;
    }
}
function handleTouchStart(e) {
    const firstTouch = getTouches(e)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
}
function handleTouchMove(e) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = e.touches[0].clientX;                                    
    var yUp = e.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)){
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            /* right swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};