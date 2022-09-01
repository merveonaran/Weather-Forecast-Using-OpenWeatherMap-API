const url ='https://api.openweathermap.org/data/2.5/';
const key = 'eddabe78ca45cd66ec30950e592872bd';

const searchBar=document.getElementById('searchBar');

const setQuery=(e)=>{
    if(e.keyCode =='13')
        getResult(searchBar.value);
}

const getResult=(cityName)=>{
    console.log(cityName);
    let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult);
}


const displayResult=(result)=>{
console.log(result)
let city =document.querySelector('.city')
city.innerText=`${result.name}, ${result.sys.country}`
let temparature =document.querySelector('.temparature')
temparature.innerText=`${Math.round(result.main.temp)}°C`
let status =document.querySelector('.status')
status.innerText=`${result.weather[0].description}`
let minmax =document.querySelector('.minmax')
minmax.innerText=` ${Math.round(result.main.temp_min)}°C - ${Math.round(result.main.temp_max)}°C`


}

searchBar.addEventListener('keypress',setQuery);