class UI {
  constructor() {
    this.timeDate = document.querySelector('.weather__time');
    this.location = document.querySelector('.weather__location');
    this.icon = document.querySelector('.weather-info__icon');
    this.temperature = document.querySelector('.weather-info__temp');
    this.description = document.querySelector('.weather-info__description');
    this.feels = document.querySelector('.weather-info__extras--feels');
    this.wind = document.querySelector('.weather-info__extras--wind');
    this.pressure = document.querySelector('.weather-info__extras--pressure');
    this.humidity = document.querySelector('.weather-info__extras--humidity');
    this.visibility = document.querySelector(
      '.weather-info__extras--visibility'
    );
    this.windDirection = document.querySelector(
      '.weather-info__extras--wind-direction'
    );
  }

  paint(res) {
    this.setLocation(res);
    this.setTimeDate(res);
    this.setIcon(res);
    this.setTemperature(res);
    this.setDescription(res);
    this.setExtras(res);
  }

  setExtras(res) {
    const main = res.main;
    this.feels.innerHTML = `Feels like ${Math.round(
      main.feels_like
    )}<sup>&deg;</sup>C`;
    this.wind.innerHTML = `Wind &nbsp;<i class="fas fa-location-arrow"></i> &nbsp; ${res.wind.speed}m/s W`;
    this.windDirection.innerHTML = `Wind Direction: ${res.wind.deg}<sup>&deg;</sup>`;
    this.pressure.innerHTML = `<i class="far fa-compass"></i>&nbsp; ${main.pressure}hPa`;
    this.humidity.innerHTML = `Humidity: ${main.humidity}%`;
    this.visibility.innerHTML = `Visibility: ${res.visibility / 1000}km`;
  }

  setDescription(res) {
    this.description.innerHTML = `${this.capitalize(
      res.weather[0].description
    )}`;
  }

  setTemperature(res) {
    this.temperature.innerHTML = `${Math.round(
      res.main.temp
    )}<sup>&deg;</sup>C`;
  }

  setIcon(res) {
    const iconId = res.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    this.icon.innerHTML = `<img src="${iconUrl}" alt="Icon"/>`;
  }

  setLocation(res) {
    this.location.appendChild(
      document.createTextNode(`${res.name}, ${res.sys.country}`)
    );
  }

  setTimeDate(res) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const d = new Date();

    const utc = d.getTime() + d.getTimezoneOffset() * 60000;

    const offset = res.timezone / 3600;

    const newD = new Date(utc + 3600000 * offset);
    // console.log(newD.toLocaleString());

    const day = days[newD.getDay()];
    let hr = newD.getHours();
    let min = newD.getMinutes();
    if (min < 10) {
      min = '0' + min;
    }
    let ampm = 'am';
    if (hr > 12) {
      hr -= 12;
      ampm = 'pm';
    }
    const date = newD.getDate();
    const month = months[newD.getMonth()];
    const year = newD.getFullYear();
    this.timeDate.innerHTML = `
      ${hr}:${min} ${ampm}, ${day}<br> ${date} ${month} ${year}
    `;
  }

  capitalize(str) {
    str = str.split(' ');
    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ');
  }
}
