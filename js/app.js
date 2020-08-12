const weather = new Weather('Pune');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.querySelector('.search__form').addEventListener('submit', (e) => {
  const city = document.querySelector('.search__input').value;

  // Change city
  weather.changeLocation(city);

  // Display weather again
  getWeather();

  e.preventDefault();
});

function getWeather() {
  weather
    .getWeather()
    .then((res) => {
      console.log(res);
      ui.paint(res);
    })
    .catch((err) => console.log(err));
}
