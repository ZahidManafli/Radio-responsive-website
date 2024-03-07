//go up button
let goUpButton = document.getElementById("goUpButton")

let height;
let width;

if(window.innerWidth<768){
    height= 15;
    width = 15;
}else{
    height = 5;
    width = 5;
}

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if(scroll>=70){
    goUpButton.setAttribute("style",`
    display:block;
    position: fixed;
    z-index:999999;
    border-radius: 50%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2vw;
    right: 2vw;
    `) 
  }
  else if(scroll<36){
    goUpButton.style.display = "none"
  }
});