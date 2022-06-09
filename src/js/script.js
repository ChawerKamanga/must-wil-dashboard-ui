const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const bigPercentage = document.getElementById('big-percentage');

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

const maxValue = parseInt(bigPercentage.innerText);

let counter = 0;
setInterval(() => {
  if(counter == maxValue ){
    clearInterval();
  }else{
    counter+=1;
    bigPercentage.textContent = counter;
  }
}, 60);
