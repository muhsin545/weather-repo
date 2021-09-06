const API_key = `24fd5a91064cabe75228b126b58515fb`;
const searchTemperature = () => {
    const cityName = document.getElementById('cityName');
    const city = cityName.value;
    cityName.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => display(data))

}

const display = temperature => {
    const inputCity = document.getElementById('city');
    inputCity.innerHTML = `${temperature.name}`;
    const temp = document.getElementById('temperature');
    temp.innerHTML = `${temperature.main.temp}`;
    const condition = document.getElementById('condition');
    condition.innerHTML = `${temperature.weather[0].main}`;
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const img = document.getElementById('weather-icon');
    img.setAttribute('src', url)

}

// functional way 
// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text
// }
// const display = temperature => {
//     setInnerText('city', temperature.name);
//     setInnerText('temperature', temperature.main.temp);
//     setInnerText('condition', temperature.weather[0].main);
//     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
//     const imgIcon = document.getElementById('weather-icon');
//     imgIcon.setAttribute('src', url);
// }
