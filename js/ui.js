class UI {
  constructor() {
    this.timeDate = document.querySelector('.weather__time');
    this.location = document.querySelector('.weather__location');
    this.icon = document.querySelector('.weather-info__icon');
  }

  paint(res) {
    this.setLocation(res);
    this.setTimeDate();
    this.setIcon(res);
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

  setTimeDate() {
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
    const day = days[d.getDay()];
    let hr = d.getHours();
    let min = d.getMinutes();
    if (min < 10) {
      min = '0' + min;
    }
    let ampm = 'am';
    if (hr > 12) {
      hr -= 12;
      ampm = 'pm';
    }
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    this.timeDate.innerHTML = `
      ${hr}:${min}${ampm}, ${day}, ${date} ${month}, ${year}
    `;
  }
}
