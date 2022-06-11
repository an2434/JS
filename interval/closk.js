const clock = document.querySelector("h2#clock");

function getclock() {
    const date = new Date();
   
    const hours = String(date.getHours()).padStart(2,"0");
    const mins =String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
  // clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   clock.innerText =`${hours}:${mins}:${sec}`;

}
getclock();
setInterval(getclock, 1000);
//setTimeout(sayhello, 2000);