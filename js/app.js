const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.querySelector('.search__form').addEventListener('submit', (e) => {
  const city = document.querySelector('.search__input').value;

  // Change city
  weather.changeLocation(city);

  // Display weather again
  getWeather();

  storage.setLocationData(city);

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
