var menuIcon = document.getElementById("menuIcon")
var menuEl = document.getElementById("menuList")
var mybutton = document.getElementById("myBtn")
function menuClick(){
    if (menuEl.style.display == "block"){
        menuEl.style.display = "none"
        hr.style.display = "none"
    }else{
        menuEl.style.display = "block"
        hr.style.display = "block"
    }
}
function setDisplay(){
    console.log("set display")
    if (window.innerWidth >= 768){
        hr.style.display = "none"
        if (menuEl.style.display == "none"){
            menuEl.style.display = "block";
        }
    }else{
        hr.style.display = "block"
        menuEl.style.display == "none"
    }
}
window.onscroll = function(){
    scrollFunction()
}
function scrollFunction(){
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
        mybutton.style.display = "block"
    }else{
        mybutton.style.display = "none"
    }
}
mybutton.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}