(() => {
  const $counter = document.getElementById("js-counter");

  const selfSet = () => {
    let element = document.getElementById("js-selfset-input").value;
    $counter.textContent = parseInt(element);
  }

  document.getElementById("js-selfset-button").addEventListener("click", selfSet)
})();