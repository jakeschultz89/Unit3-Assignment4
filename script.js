var hunger=100;
var energy=0;

function feed(){
    if(hunger>0){
        hunger=hunger-10;
        display();
    }
    if(energy<100){
        energy=energy+10;
        display();
    }
}

var dirty=100;
var clean=0;

function shower(){
    if(dirty>0){
        dirty=dirty-10;
        display();
    }
    if(clean<100){
        clean=clean+10;
        display();
    }
}

function display(){
    document.getElementById('info-c1').innerHTML=`
    <p><b>Hunger:</b> ${hunger}<p>
    <p><b>Energy:</b> ${energy}<p>
    `;
    document.getElementById('info-c2').innerHTML=`
    <p><b>Dirty:</b> ${dirty}<p>
    <p><b>Clean:</b> ${clean}<p>
    `;
}

function init(){
    display();
}

window.onload=init;