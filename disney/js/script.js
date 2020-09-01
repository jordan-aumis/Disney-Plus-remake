// Ici je recupere mes element du dom
let body = document.querySelector("main")
let nav1 = document.querySelector("#nav1")
let nav2 = document.querySelector("#nav2")
let nav3 = document.querySelector("#nav3")

console.log(nav2);
console.log(nav1);

var x = 0;
// MON CODE POUR TELEPHONE
if (window.matchMedia("(max-width : 769px)").matches) {
    // j'utilise l'eventlistener Scroll pour faire apparaitre ou disparaitre mes navs
    window.addEventListener("scroll", function (){
    if (window.scrollY < 300){
        nav1.style.display = "flex"
        nav2.style.display = "none"
        nav3.style.display = "none"

    }
    else if (window.scrollY > 300 && window.scrollY < 600){
        nav2.style.display = "flex"
        nav1.style.display = "none" 
        nav3.style.display = "none"
         
    }
    else if (window.scrollY > 600){
        nav2.style.display = "flex"
        nav1.style.display = "none" 
        nav3.style.display = "flex"
    }
})
} 
// CODE POUR ORDINATEUR
else {
   window.addEventListener("scroll", function (){
    if (window.scrollY > 600){
        nav1.style.display = "none"
        nav2.style.display = "flex"
    }
    else if (window.scrollY < 600){
        nav2.style.display = "none"
        nav1.style.display = "flex"  
    }
})
    
}