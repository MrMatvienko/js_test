const bounce = document.querySelector(".game-circle");

document.addEventListener("keydown", handledown);

function handledown(event) {
  if (!bounce) return;

  if (event.key === "ArrowUp") {
    let currentMarginBottom =
      parseInt(window.getComputedStyle(bounce).marginBottom) || 0;
    bounce.style.marginBottom = currentMarginBottom + 30 + "px";
    console.log(currentMarginBottom);
  }

  if (event.key === "ArrowRight") {
    let currentMarginLeft =
      parseInt(window.getComputedStyle(bounce).marginLeft) || 0;
    bounce.style.marginLeft = currentMarginLeft + 10 + "px";
  }
}
document.addEventListener("keyup", handleUp);

function handleUp(event) {
  console.log(event);
  if (event.key === "ArrowUp") {
    bounce.style.marginBottom = "0";
  }
}
