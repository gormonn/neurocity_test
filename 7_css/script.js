document.addEventListener("DOMContentLoaded", init);
function init(){
    window.onresize = setChildPosMid;
    setChildPosMid();
}
function setChildPosMid(){
    let { parent, child } = getElements();
    let {offsetWidth: parentWidth, offsetHeight: parentHeight} = parent;
    let {offsetWidth: childWidth, offsetHeight: childHeight} = child;
    child.style.top = `${parentHeight/2 - childHeight/2}px`;
    child.style.left = `${parentWidth/2 - childWidth/2}px`;
}
function getElements(){    
    let parent = document.getElementsByClassName('parent-js')[0];
    let child = parent.getElementsByClassName('parent__child-js')[0];
    return {parent, child};
}