let hanburger_icon = document.getElementById("hanburger_icon")
 let close_icon = document.getElementById("close_icon")
 let header = document.getElementById("header")
 let nav = document.getElementById("nav")

 hanburger_icon.addEventListener("click",function(){
  close_icon.setAttribute("style","left:-2vw;");
  close_icon.classList.remove("passive-slidebar-icon")
  close_icon.classList.add("active-slidebar-icon")
  hanburger_icon.classList.remove("active-slidebar-icon")
  hanburger_icon.classList.add("passive-slidebar-icon")
  header.classList.add("opened");
  nav.classList.add("navbar-open");
  if(nav.className.search("navbar-close") == true){
    nav.classList.remove("navbar-close")
  }
  document.body.setAttribute("style","overflow:hidden;")
 })
 close_icon.addEventListener("click",function(){
  close_icon.classList.remove("active-slidebar-icon")
  close_icon.classList.add("passive-slidebar-icon")
  hanburger_icon.classList.add("active-slidebar-icon")
  hanburger_icon.classList.remove("passive-slidebar-icon")
  header.classList.remove("opened");
  nav.classList.remove("navbar-open");
  nav.classList.add("navbar-close");
  document.body.setAttribute("style","overflow:visible;")
 })
