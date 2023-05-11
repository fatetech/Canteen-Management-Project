// Header code
window.addEventListener("scroll", function(){
    let header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0);
})



let btn = document.querySelectorAll('.menu-items-btn');
let homeOderBtn = document.querySelector(".btn-oder");
 let nav = document.querySelectorAll('li');

 for(i = 0; i <= nav.length; i++){
   let loginBtn = document.querySelector('.current-nav-bar');
   if(loginBtn.classList === 'current-nav-bar'){
    alert
   }
 }


// ----------------toggle form --------------

let loginForm = document.getElementById("LoginForm");
let RegForm = document.getElementById("RegForm");
let indicator = document.getElementById('Indicator');
let Login = document.getElementById('Login');
let Register = document.getElementById('Register');


Register.addEventListener("click",function(){
    //indicator login toggle
    RegForm.style.transform = "translateX(0px)"
    loginForm.style.transform = "translateX(0px)"
    indicator.style.transform ="translateX(100px)"
})
Login.addEventListener("click",function(){
    //indicator Register toggle
    loginForm.style.transform = "translateX(300px)"
    RegForm.style.transform = "translateX(300px)"
    indicator.style.transform ="translateX(0px)"
})


