
const weatherBtn = document.getElementById('weatherBtn')
const showWeatherMSG = document.getElementById('show-weather')
const inputValue = document.getElementById('inputCity');

weatherBtn.addEventListener('click',()=>{
    const inputValue = document.getElementById('inputCity').value;
    const apiKey = 'f3da1d07106c4f25ac510348252304'
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}`;
      
    fetch(url)
    .then(res=>res.json())
    .then(data => showWeather(data))

})


function showWeather(data){
    console.log(data);
   showWeatherMSG.innerHTML=`
    <p>Last_update:${data.current.last_updated}</p>
    <p>Cloud:${data.current.cloud}</p>
    <p>Wind_degree:${data.current.wind_degree}</p>
    <p>Wind_dir${data.current.wind_dir}</p>
    <p>Temp_c:${data.current.temp_c}</p>
    <p>Temp_f:${data.current.temp_f}</p>
    <h2>Name:${data.location.name}</h2>
    <h2>Country${data.location.country}</h2>
    <h2>Localtime:${data.location.localtime}</h2>
    `
    inputValue.value='';
}
