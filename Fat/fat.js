function calculateExchange() {
  const mus = parseFloat(document.getElementById("mus").value) || 0;
  const growth = parseFloat(document.getElementById("growth").value) || 0;
  const age = parseFloat(document.getElementById("age").value) || 0;

  if (mus > 0 && growth > 0 && age > 0) {
    const exchange = (mus * 10 + growth * 6.25 - age * 5 + 5).toFixed(2);
    document.getElementById("exchange").textContent = exchange;
  } else {
    document.getElementById("exchange").textContent = "0";
  }
}

document.querySelectorAll(".form_calculate input").forEach((input) => {
  input.addEventListener("input", calculateExchange);

  const reset = document.querySelector(".form_reset");
  reset.addEventListener("click", () => {
    document.getElementById("mus").value = "";
    document.getElementById("growth").value = "";
    document.getElementById("age").value = "";
    document.getElementById("exchange").textContent = "0";
  });
});
