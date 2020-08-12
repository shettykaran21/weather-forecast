class Weather {
  constructor(city) {
    this.apiKey = 'cef57a98fcb033daa44e6fd2f8b54556';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
