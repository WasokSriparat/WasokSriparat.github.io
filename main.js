const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});