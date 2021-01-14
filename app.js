//nav-mobile open and close using display metod

const menu = document.getElementById("menu-open"),
  navMobile = document.getElementById("nav-mobile"),
  nav = document.getElementById("nav"),
  menuClose = document.getElementById("menu-close");
  
  
  menu.addEventListener('click', () => {
  navMobile.style.display = 'flex';
  nav.style.display = "none";
    
  });

  menuClose.addEventListener('click', () => {
  navMobile.style.display = 'none';
  nav.style.display = 'flex';
 // main.classList.remove("main")
  
});
 


// Get all buttons with class="btn" inside the container 
 // Loop through the buttons and add the active class to the current/clicked button

 var btns = document.querySelectorAll(".button")
 for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active");
     //console.log(current)
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";

   });

 }


