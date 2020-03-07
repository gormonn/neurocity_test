document.addEventListener("DOMContentLoaded", init);
function init(){
    window.Elements = new Elements(3);
    document.onclick = clickHandler;
}
var clickHandler = debounce(function(e){
    switch(e.target.dataset.action){
        case 'randomShow':
            window.Elements.toggleElements();
        case undefined:
            return;
    }
}, 600)
class Elements{
    constructor(count){
        this.container = document.getElementsByClassName('container')[0];
        this.items = this.container.children;
        this.itemNodes = Array.prototype.slice.call(this.items);
        this.controllerItem = this.container.querySelector('.container__item[data-action="randomShow"]');
        this.controllerIndex = this.itemNodes.indexOf(this.controllerItem);
        this.exceptNums = new Set([this.controllerIndex]);
        this.shown = false;

        this.max = this.items.length - 1;
        this.count = count || 3;
        this.errorsHandler();
    }
    toggleElements(){
        let { exceptNums, count, max, items, shown, controllerIndex } = this;
        if(shown){
            for (let index of exceptNums){
                if(index !== controllerIndex){
                    exceptNums.delete(index);
                    window.requestAnimationFrame(()=>items[index].classList.toggle('shown'))
                }
            }
            this.shown = false;
        }else{
            while(count--){
                this.errorsHandler();
                let index = randomInteger(0, max, exceptNums);
                exceptNums.add(index);
                window.requestAnimationFrame(()=>items[index].classList.toggle('shown'))
            }
            this.shown = true;
        }
    }
    errorsHandler(){
        if(this.count > this.max) throw Error('There are too few dom-elements!');
        if(this.exceptNums.size > this.max) throw Error('There are too few dom-elements!');
    }
}
function randomInteger(min, max, setOfExceptedNums) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (setOfExceptedNums.has(num)) ? randomInteger(min, max, setOfExceptedNums) : num;
}
function debounce(func, ms) {
    let isCooldown = false;
    return function() {
        if (isCooldown) return;
        func.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}