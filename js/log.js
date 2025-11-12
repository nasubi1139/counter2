const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

if(minutes < 10){
  minutes = `0${minutes}`;
}

// Logボタンを押すと日時とカウントを表示
(() => {
  const $counter = document.getElementById("js-counter");
  const $log = document.getElementById("js-log-table");

  const logPush = () => {
  const $logChild = document.createElement("div");
  $logChild.className = "log"

  $logChild.innerHTML = `${year}/${month}/${day}&nbsp;` +
  `${hour}:${minutes}&nbsp;&nbsp;` +$counter.textContent;

  $log.style.display = "block";
  $log.appendChild($logChild);
  }
  
  document.getElementById("js-log-button").addEventListener("click", logPush);
})();