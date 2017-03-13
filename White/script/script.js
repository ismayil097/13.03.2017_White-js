function clickMe(param){
    var scrollCount = 0;
    var attr = param.getAttribute('name');
    var bodyHeight = document.body.clientHeight;
    document.body.style.height = bodyHeight+"px";
    var baseArr = document.querySelectorAll(".base");
    for(i=0;i<baseArr.length;i++){
        if(baseArr[i].getAttribute("id") == attr){
            for(j=0;j<i;j++){
                scrollCount+=baseArr[j].clientHeight;
            }
            window.scrollTo(0,scrollCount);
        }
    }
}

var imagesArr=['img/works1.jpg','img/works2.jpg','img/works3.jpg','img/works4.jpg','img/works5.jpg','img/works6.jpg','img/works7.jpg'];
var galery = document.querySelector('.galery');
var galeryMain = document.querySelector(".galery-main");
var leftBtn = document.querySelector('#leftBtn');
var rightBtn = document.querySelector('#rightBtn');
var imageItemWidth=0;
var columnNumber;
var slideNumber = 0;
var iteration = 0;

function Slider(){
    galery.innerHTML="";
    imageItemWidth = 1000;
    if(window.innerWidth>992){
        columnNumber=4;
    }
    else if(window.innerWidth>768 && window.innerWidth<992){
        columnNumber=3;
    }
    else if(window.innerWidth>480 && window.innerWidth<769){
        columnNumber=2;
    }
    else{
        columnNumber=1;
    }
    for(i=0;i<imagesArr.length;i++){
        item = document.createElement('div');
        item.setAttribute('class','item');
        img = document.createElement('img');
        img.setAttribute('src',imagesArr[i]);
        galery.appendChild(item);
        item.appendChild(img);
        imageItemWidth+=item.clientWidth;
        galery.style.width = imageItemWidth+"px";
        item.style.width = galeryMain.clientWidth/columnNumber+'px';
    }
}
Slider()
window.onresize = function(event) {
    Slider()
};

rightBtn.addEventListener('click',function(){
    iteration-=item.clientWidth;
    slideNumber++;
    if(slideNumber>imagesArr.length-columnNumber){
        slideNumber=0;
        iteration=0;
    }
    galery.style.left = iteration + "px";
})

leftBtn.addEventListener('click',function(){
    iteration+=item.clientWidth;
    slideNumber--;
    if(slideNumber<=-1){
        slideNumber=imagesArr.length-columnNumber;
        iteration=-((imagesArr.length-columnNumber)*item.clientWidth);
    }
    galery.style.left = iteration + "px";
})


titles = [ "<b>Clean</b> Code", "<b>Technical</b> Support","<b>Responsive</b>","<b>Documentation</b>","<b>Quality</b>","<b>Support</b>"];
titles2 =[ "Clean Code", "Support","Responsive","Documentation","Quality","Support"];
tabs = document.querySelectorAll("#clean-code .tab div");
title = document.querySelector("#clean-code .clean-title");
smallTitle = document.querySelectorAll('.tab-item span');
tabItem = document.querySelectorAll(".tab-item");
var topTitle=-150;
lastActiveTab=1;

for(var i=0; i<tabs.length;i++){
    tabs[i].addEventListener("click", ChangeTab)
}
function ChangeTab(event){
    tab = event.target;
    val = tab.getAttribute('data-value');
    if(lastActiveTab!=val-1){
    cleanTitle = document.querySelector('.clean-title p');
    cleanTitle.innerHTML = titles[val-1];
    smallTitle[val-1].innerHTML = titles2[val-1];
    tabItem[val-1].style.backgroundColor= "white";
    reset(tabItem,'sprt')
    tabItem[val-1].classList.toggle('sprt');
    for (i=0;i<smallTitle.length;i++){
        if(i != val-1){
            smallTitle[i].innerHTML = '';
            tabItem[i].style.background="transparent";
            lastActiveTab=val-1;
        }
    }
        var topTitle=-150;
    interval = setInterval(function(){
        slide()
    },1);
    }
}
function reset(arr,cls){
    for (var i = 0; i < arr.length;i++) {
        arr[i].classList.remove(cls);
    }
}
function slide(){
    topTitle +=1;
    title.style.top = topTitle + 'px';
    if(topTitle === 0){
        clearInterval(interval);
        topTitle = -150;
    }
}
function reset(arr, cls) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].classList.remove(cls);
    }
}
//Home page slider section
var homeArr = ['img/slide1_bg.jpg','img/slide2_bg.jpg','img/slide3_bg.jpg']
var bgCount = 0;
var slidesImg = document.querySelectorAll('.slides div img');
var home = document.getElementById('home');
for(k=0;k<slidesImg.length;k++){
    slidesImg[k].addEventListener('click',clickImage);
}
var textArray = home.querySelectorAll(".titles");
console.log(textArray);

function clickImage(){
    reset(textArray, 'active');
    textArray[this.getAttribute("data-arr")].classList.add("active");
    imgSource = this.getAttribute('src');
    bgCount = homeArr.indexOf(imgSource);
    home.setAttribute('style','background-image:url('+ imgSource +')');
}
var prevHome = document.querySelector('.prev div');
var nextHome = document.querySelector('.next div');

nextHome.addEventListener('click',function(){
    bgCount++;
    if(bgCount > 2){
        bgCount = 0;
    }
    reset(textArray, 'active');
    textArray[bgCount].classList.add("active");
    home.setAttribute('style','background-image:url('+ homeArr[bgCount] +')');
})
prevHome.addEventListener('click',function(){
    bgCount--;
    if(bgCount < 0){
        bgCount = 2;
    }
    reset(textArray, 'active');
    textArray[bgCount].classList.add("active");
    home.setAttribute('style','background-image:url('+ homeArr[bgCount] +')');
})

//our team section

var teamLeft = document.querySelector('#teamLeft');
var teamRight = document.querySelector('#teamRight');
var teamMemberArr = document.querySelectorAll('.team-member');
var teamMembers = document.querySelector('.team-members');
var each=3;
var count=0;
teamRight.onclick = function () {
    each++;
    if (each === 8) {
        each = 3;
        count = 0;
        teamMembers.style.left = count + 'px';
        return
    }
    count -= 400;
    teamMembers.style.left = count + 'px';
};

teamLeft.onclick = function () {
    each--;
    if (each === 2) {
        count = -1600;
        each = 7;
        teamMembers.style.left = count + 'px';
        return;
    }
    count += 400;
    teamMembers.style.left = count + 'px';
};

//status section
var statusItem = document.querySelectorAll('.status-slider');
var statusButtons = document.querySelectorAll('.status-button');
var statusRow = document.querySelector('#status-row');
var butCount = 0;
var t=0;
var j=0;
statusRow.style.left = 0;
statusButtons[0].onclick = function(){
    statusButtons[0].innerHTML='<i class="fa fa-circle" aria-hidden="true"></i>';
    statusButtons[0].style.fontSize = "22px";
    statusButtons[1].innerHTML='<i class="fa fa-circle-o" aria-hidden="true"></i>';
    statusButtons[1].style.fontSize = "inherit";
    statusButtons[2].innerHTML='<i class="fa fa-circle-o" aria-hidden="true"></i>';
    statusButtons[2].style.fontSize = "inherit";
    t=0;
    statusRow.style.left = 0 + 'px';
    j=0;
}

statusButtons[1].onclick = function(){
    statusButtons[1].innerHTML='<i class="fa fa-circle" aria-hidden="true"></i>';
    statusButtons[1].style.fontSize = "22px";
    statusButtons[0].innerHTML='<i class="fa fa-circle-o" aria-hidden="true"></i>';
    statusButtons[0].style.fontSize = "inherit";
    statusButtons[2].innerHTML='<i class="fa fa-circle-o" aria-hidden="true"></i>';
    statusButtons[2].style.fontSize = "inherit";
    if(t==0){
        butCount -= 1170;
        statusRow.style.left = butCount + 'px';
    }
    t++;
    butCount = 0;
    j=0;
}

statusButtons[2].onclick = function(){
    statusButtons[2].innerHTML='<i class="fa fa-circle" aria-hidden="true"></i>';
    statusButtons[2].style.fontSize = "22px";
    statusButtons[0].innerHTML='<i class="fa fa-circle-o" aria-hidden="true"></i>';
    statusButtons[0].style.fontSize = "inherit";
    statusButtons[1].innerHTML='<i class="fa fa-circle-o" aria-hidden="true"></i>';
    statusButtons[1].style.fontSize = "inherit";
    if(j==0){
        j++;
        butCount -= 2340;
        statusRow.style.left = butCount + 'px';
    }
    t=0;
    butCount = 0;
}













