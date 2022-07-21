var toggle = document.querySelector('.box')
var circle = document.querySelector('.circle')
var body = document.querySelector('body');

var initalMode = localStorage.getItem('mode')

const backGrounds = {
    day:'#F1F1F1',
    night: '#292C35'
}

function saveOnStorage(mode){
    localStorage.setItem('mode',mode)
}

function scroll(side,opost){
    circle.style[side] = '0';
    circle.style[opost] = 'auto';
}
function load(){
    if(initalMode=='day'){
        body.style.backgroundColor = backGrounds['day']
        scroll("left","right")
    }
    else{
        body.style.backgroundColor = backGrounds['night']
        scroll("right","left")
    }
}
load()
function changeMode(mode){
    if(mode=='day'){
        body.style.backgroundColor = backGrounds['night']
        mode = 'night';
        scroll("right","left")
    }
    else{
        body.style.backgroundColor = backGrounds['day']
        mode = "day";
        scroll("left","right")
    }
    initalMode = mode;
    saveOnStorage(mode)
}
toggle.addEventListener('click',()=>{
    console.log(changeMode(initalMode))
})