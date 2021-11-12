//burger btn
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const navMenu = document.querySelector('.burger-menu');
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        navMenu.style.top = "100px"
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        navMenu.style.top = "-1000px"
        menuOpen = false;
    }
});

//navbar
window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// btn image Web
const btnPreWeb = document.querySelector(".btn-pre-web");
const btnNextWeb = document.querySelector(".btn-next-web");

btnPreWeb.addEventListener('click',()=>{
    const imgWeb1 = document.getElementById("webImg1").src;
    const imgWeb2 = document.getElementById("webImg2").src;
    const imgWeb3 = document.getElementById("webImg3").src;
    const imgWeb4 = document.getElementById("webImg4").src;
    const imgWeb5 = document.getElementById("webImg5").src;
    const imgWeb6 = document.getElementById("webImg6").src;
    const imgWeb7 = document.getElementById("webImg7").src;
    const imgWeb8 = document.getElementById("webImg8").src;
    const imgWeb9 = document.getElementById("webImg9").src;
    
    document.getElementById("webImg1").src = imgWeb9;
    document.getElementById("webImg2").src = imgWeb1;
    document.getElementById("webImg3").src = imgWeb2;
    document.getElementById("webImg4").src = imgWeb3;
    document.getElementById("webImg5").src = imgWeb4;
    document.getElementById("webImg6").src = imgWeb5;
    document.getElementById("webImg7").src = imgWeb6;
    document.getElementById("webImg8").src = imgWeb7;
    document.getElementById("webImg9").src = imgWeb8;
});

btnNextWeb.addEventListener('click',()=>{
    const imgWeb1 = document.getElementById("webImg1").src;
    const imgWeb2 = document.getElementById("webImg2").src;
    const imgWeb3 = document.getElementById("webImg3").src;
    const imgWeb4 = document.getElementById("webImg4").src;
    const imgWeb5 = document.getElementById("webImg5").src;
    const imgWeb6 = document.getElementById("webImg6").src;
    const imgWeb7 = document.getElementById("webImg7").src;
    const imgWeb8 = document.getElementById("webImg8").src;
    const imgWeb9 = document.getElementById("webImg9").src;
    
    document.getElementById("webImg1").src = imgWeb2;
    document.getElementById("webImg2").src = imgWeb3;
    document.getElementById("webImg3").src = imgWeb4;
    document.getElementById("webImg4").src = imgWeb5;
    document.getElementById("webImg5").src = imgWeb6;
    document.getElementById("webImg6").src = imgWeb7;
    document.getElementById("webImg7").src = imgWeb8;
    document.getElementById("webImg8").src = imgWeb9;
    document.getElementById("webImg9").src = imgWeb1;
});

//btn image game
const btnPreGame = document.querySelector(".btn-pre-game");
const btnNextGame = document.querySelector(".btn-next-game");


btnPreGame.addEventListener('click',()=>{
    const imgGame1 = document.getElementById("gameImg1").src;
    const imgGame2 = document.getElementById("gameImg2").src;
    const imgGame3 = document.getElementById("gameImg3").src;
    const imgGame4 = document.getElementById("gameImg4").src;
    const imgGame5 = document.getElementById("gameImg5").src;
    
    document.getElementById("gameImg1").src = imgGame5;
    document.getElementById("gameImg2").src = imgGame1;
    document.getElementById("gameImg3").src = imgGame2;
    document.getElementById("gameImg4").src = imgGame3;
    document.getElementById("gameImg5").src = imgGame4;
});

btnNextGame.addEventListener('click',()=>{
    const imgGame1 = document.getElementById("gameImg1").src;
    const imgGame2 = document.getElementById("gameImg2").src;
    const imgGame3 = document.getElementById("gameImg3").src;
    const imgGame4 = document.getElementById("gameImg4").src;
    const imgGame5 = document.getElementById("gameImg5").src;
    
    document.getElementById("gameImg1").src = imgGame2;
    document.getElementById("gameImg2").src = imgGame3;
    document.getElementById("gameImg3").src = imgGame4;
    document.getElementById("gameImg4").src = imgGame5;
    document.getElementById("gameImg5").src = imgGame1;
});