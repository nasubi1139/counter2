(() => {
  const $selfSet = document.getElementById("js-counter");

  const selfSet = () => {
    $selfSet.textContent = test;
  }

  document.getElementById("js-selfset-button").addEventListener("click", selfSet)
})();