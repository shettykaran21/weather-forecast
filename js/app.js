const weather = new Weather('Pune');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((res) => {
      console.log(res);
      ui.paint(res);
    })
    .catch((err) => console.log(err));
}
