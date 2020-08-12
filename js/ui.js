class UI {
  constructor() {
    this.timeDate = document.querySelector('.weather__time');
    this.location = document.querySelector('.weather__location');
    this.icon = document.querySelector('.weather-info__icon');
    this.temperature = document.querySelector('.weather-info__temp');
    this.description = document.querySelector('.weather-info__description');
  }

  paint(res) {
    this.setLocation(res);
    this.setTimeDate(res);
    this.setIcon(res);
    this.setTemperature(res);
    this.setDescription(res);
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
