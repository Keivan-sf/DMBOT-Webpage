
function navigate(element){
    const link = element.dataset.href;
    window.open(link)
}

function mouseFollower(){
    var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
    var screenHight = window.screen.height;
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
    var e = window.event;
    var x = e.pageX;
    var y = e.pageY;
    var hHeader = $('header').height();
    //if(y >= (screenHight - (screenHight/100)*7.9)){
        //document.getElementsByTagName('header')[0].style.cursor = "auto";
       // return;
   // }
   if(y>= hHeader+30){
    return;
   }
    var shadow = document.getElementsByClassName('shadow')[0];
    shadow.style.opacity = "1";
    shadow.style.display = "block";
    var sizeDiv = document.getElementsByClassName('fullsize')[0];
    sizeDiv.style.opacity = "1";
    sizeDiv.style.display="block";
    var circle = "circle(75px at " + x + "px " + y + "px)";
    var c2 = "circle(8.5% at 50% 50%)"
    sizeDiv.style.clipPath  = circle
    shadow.style.marginLeft = x-75 + 'px';
    shadow.style.marginTop = y-75 + 'px';
    //clip-path: circle(8.5% at 40px 10px);
   // mainDiv.style.marginLeft = `${x}px`
    //mainDiv.style.marginTop = `${y}px
 //    document.getElementById('title1').innerHTML = `x : ${width} , y: ${height}`
}


function cursorOut(){
    var sizeDiv = document.getElementsByClassName('fullsize')[0];
    sizeDiv.style.opacity = "0";
    sizeDiv.style.display="none";
    var shadow = document.getElementsByClassName('shadow')[0];
    shadow.style.opacity = "0";
    shadow.style.display = "none";
}


function headerout(){
    var sizeDiv = document.getElementsByClassName('fullsize')[0];
    sizeDiv.style.opacity = "0";
    sizeDiv.style.display="none";
    var shadow = document.getElementsByClassName('shadow')[0];
    shadow.style.opacity = "0";
    shadow.style.display = "none";
}


var inviteHover , Eltop;


function inviteButton(){
    var e = window.event;
    var x = e.pageX;
    var y = e.pageY;
    var el = document.getElementById('invite-txt')
    var elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top
    Eltop = inviteHover ? Eltop : elDistanceToTop;
    var topBelow = Eltop + 25 > y ? 'higher' : 'lower'
    var elecs = document.getElementsByClassName('elecs');
    for(var i=0; i<elecs.length; i++){
        elecs[i].classList.add('elec-transition');
    }
    if(topBelow == 'higher'){
        var distance = (Eltop+25) - y;
        el.style.transform = `translateY(${-distance}px)`
        elecs[0].style.transform = `rotate(${(30 - distance/2)}deg)`;
        elecs[1].style.transform = `rotate(${(30 - distance/2)}deg)`;
        elecs[2].style.transform = `rotate(${(-30 - distance/2)}deg) translate(5px , -25px)`;
        elecs[2].style.width = `${90 + distance}px`
        elecs[3].style.transform = `rotate(${(-30 - distance/2)}deg) translate(5px , -25px)`;
        elecs[3].style.width = `${90 + distance}px`
        elecs[4].style.transform = `rotate(${(distance/2 - 30)}deg)`;
        elecs[5].style.transform = `rotate(${(distance/2 - 30)}deg)`;
        elecs[6].style.transform = `rotate(${(distance/2 + 30)}deg) translate(${-distance/2-15}px , -15px)`;
        elecs[6].style.width = `${90 + distance}px`
        elecs[7].style.transform = `rotate(${(distance/2 + 30)}deg) translate(${-distance/2-15}px , -15px)`;
        elecs[7].style.width = `${90 + distance}px`
    }else{
        var distance = y- (Eltop+25);
        el.style.transform = `translateY(${distance}px)`
        elecs[0].style.transform = `rotate(${(distance/2 + 30)}deg) translate(5px , 25px)`;
        elecs[0].style.width = `${90 + distance}px`
        elecs[1].style.transform = `rotate(${(distance/2 + 30)}deg) translate(5px , 25px)`;
        elecs[1].style.width = `${90 + distance}px`
        elecs[2].style.transform = `rotate(${(distance/2 - 30)}deg)`;
        elecs[3].style.transform = `rotate(${(distance/2 - 30)}deg)`;;
        elecs[4].style.transform = `rotate(${(-30 - distance/2)}deg) translate(${-distance/2-10}px , 15px)`;
        elecs[4].style.width = `${90 + distance}px`
        elecs[5].style.transform = `rotate(${(-30 - distance/2)}deg) translate(${-distance/2-10}px , 15px)`;
        elecs[5].style.width = `${90 + distance}px`
        elecs[6].style.transform = `rotate(${(30 - distance/2)}deg)`;
        elecs[7].style.transform = `rotate(${(30 - distance/2)}deg)`;
    }
    inviteHover = true;
    el.classList.remove("invite-txt-animation");
}


function inviteButtonOut(){
    inviteHover = false;
    var elecs = document.getElementsByClassName('elecs');
    for(var i=0; i<elecs.length; i++){
        elecs[i].classList.remove('elec-transition');
    }
    var el = document.getElementById('invite-txt')
    el.classList.add("invite-txt-animation");
    el.style.transform = `translateY(0px)`
    elecs[0].style.transform = `rotate(30deg) translate(0px , 0px)`;
    elecs[0].style.width = `90px`
    elecs[1].style.transform = `rotate(30deg) translate(0px , 0px)`;
    elecs[1].style.width = `90px`
    elecs[2].style.transform = `rotate(-30deg) translate(0px , 0px)`;
    elecs[2].style.width = `90px`
    elecs[3].style.transform = `rotate(-30deg) translate(0px , 0px)`;
    elecs[3].style.width = `90px`
    elecs[4].style.transform = `rotate(-30deg) translate(0px , 0px)`;
    elecs[4].style.width = `90px`
    elecs[5].style.transform = `rotate(-30deg) translate(0px , 0px)`;
    elecs[5].style.width = `90px`
    elecs[6].style.transform = `rotate(30deg) translate(0px , 0px)`;
    elecs[6].style.width = `90px`
    elecs[7].style.transform = `rotate(30deg) translate(0px , 0px)`;
    elecs[7].style.width = `90px`
}

