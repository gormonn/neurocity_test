document.addEventListener("DOMContentLoaded", init);
function init(){
    document.onclick = clickHandler;
}
function clickHandler(e){
    switch(e.target.dataset.action){
        case 'randomShow':
            randomShow()
        case undefined:
            return;
    }
}
function randomShow(){
    let items = document.getElementsByClassName('container')[0];
    let itemNodes = Array.prototype.slice.call(items.children);
    let controllerItem = items.querySelector('.container__item[data-action="randomShow"]');
    let controllerIndex = itemNodes.indexOf(controllerItem);
    let exceptIndex = new Set([controllerIndex]);
    let maxIndexes = items.children.length - 1;
    toggleItems(0, maxIndexes, exceptIndex, items.children);
}
function toggleItems(min, max, exceptNums, items){
    let count = 3;
    if(count > max) throw Error('There are too few dom-elements!');
    while(count--){
        let index = randomInteger(min, max, exceptNums);
        exceptNums.add(index);
        window.requestAnimationFrame(()=>items[index].classList.toggle('shown'))
    }
    return exceptNums;
}
function randomInteger(min, max, setOfExceptedNums) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return (setOfExceptedNums.has(num)) ? randomInteger(min, max, setOfExceptedNums) : num;
}