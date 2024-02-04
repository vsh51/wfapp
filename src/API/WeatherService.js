export default class WeatherService {
    // https://www.weatherapi.com/my/

    constructor () {
        this.API_KEY = '';
    }
    
    async forecast(amountOfDays) {
        let endpoint = `http://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=Lviv&days=${amountOfDays}&aqi=no&alerts=no`;

        const response = async () =>
            await(await fetch(endpoint)).json();

        const res = await response();
        return res.forecast.forecastday;
    }
}