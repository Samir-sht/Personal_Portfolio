 // function menu(){
 //       let menu=document.getElementById("links");
 //       menu.style.display="block";
 //      }

 let navlinks=document.querySelector("#links");
 let toggle=document.querySelector(".btn");

 toggle.addEventListener("click",function(){
 	navlinks.classList.toggle("active");

 })
      