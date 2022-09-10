let counter = 0;
let timeout;
let timer_on = 0;

function timedCount() {
  document.getElementById("demo").innerHTML = counter;
  counter++;
  timeout = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}

let esperar;

function Esperar(){
    esperar = setTimeout(Abrir_pestana, 5000);
    startCount();
}


function Abrir_pestana(){
    window.open("index2.html", "_blank");
    document.getElementById("demo").style.display = "none";
}