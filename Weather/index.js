// const API__KEY = 8b2a77caee3048f3bf3120230251604;
// const API__URL = http://api.weatherapi.com/v1;

const refs = {
  form: document.querySelector(".weather__form"),
  list: document.querySelector(".weather_list"),
};

refs.form.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const { city, days } = event.currentTarget.elements;
  serviceWeather(city.value, days.value)
    .then(
      (data) => (refs.list.innerHTML = createMurcup(data.forecast.forecastday))
    )
    .catch((err) => console.log(err))
    .finally(refs.form.reset());
}

function serviceWeather(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "8b2a77caee3048f3bf3120230251604";

  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&day=${days}&lang=uk`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка: ${response.status}`);
    }
    return response.json();
  });
}

function createMurcup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `<li>
        <img src="${icon}" alt="${text}"
        <h2>${date}</h2>
        <h3>${text}</h3>
        <h3>${avgtemp_c}</h3>
        </li>
      `
    )
    .join("");
}
