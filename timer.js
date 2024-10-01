const time = document.querySelector(".timer-time");
const start = document.querySelector(".timer-button");
const reset = document.querySelector(".timer-reset");
const timer = document.querySelector(".timer");
const indicator = document.querySelector(".timer-indicator");

let initialCountdown = parseInt(time.textContent); // Змінна для відліку
let countdown = initialCountdown;
let intervalId; // Змінна для збереження ID інтервалу
const totalDegrees = 360;
const degreesPerSecond = totalDegrees / initialCountdown;

start.addEventListener("click", () => {
  if (start.textContent === "START") {
    // Якщо кнопка "START", запускаємо таймер
    start.textContent = "STOP";
    reset.disabled = true;
    intervalId = setInterval(() => {
      countdown -= 1; // Зменшуємо таймер
      time.textContent = countdown.toString().padStart(2, "0");
      const elapsedDegrees = (initialCountdown - countdown) * degreesPerSecond;
      indicator.style.backgroundImage = `conic-gradient(green ${elapsedDegrees}deg, transparent ${elapsedDegrees}deg)`;
      // Якщо таймер досягає нуля, зупиняємо інтервал
      if (countdown <= 0) {
        clearInterval(intervalId);
        reset.disabled = false;
        indicator.style.backgroundImage = "";
        start.textContent = "START"; // Повертаємо текст кнопки
        countdown = initialCountdown; // Відновлюємо значення таймера
      }
    }, 1000);
  } else {
    // Якщо кнопка "STOP", зупиняємо таймер
    clearInterval(intervalId);
    reset.disabled = false;
    start.textContent = "START"; // Повертаємо текст кнопки
  }
});
reset.addEventListener("click", () => {
  clearInterval(intervalId); // Зупиняємо інтервал, якщо він активний
  countdown = initialCountdown; // Відновлюємо початкове значення таймера
  time.textContent = countdown; // Оновлюємо текст таймера на екрані
  indicator.style.backgroundImage = "";
  start.textContent = "START"; // Повертаємо текст кнопки "START"
  reset.disabled = false; // Вмикаємо кнопку "RESET"
});
