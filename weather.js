let apikey="92ca25a72fad7d8ea34e1c7eeb82f0dd";
let base="https://api.openweathermap.org/data/2.5/weather?";









let searchtext=document.getElementById('input')
let searchbtn=document.getElementById('submit')
searchbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    searchtext.value;
   displaydata();

})
async function displaydata(){
    let response= await fetch(`${base}q=${searchtext.value}&units=metric&appid=${apikey}`);
    let weather=await response.json();
 if(weather.cod==='404'){
    const error=document.getElementById('error');
    error.innerText="Please enter a valid city name";
    searchtext.value='';

 }
 else{
   const city=document.querySelector('.city').innerText=weather.name+","+weather.sys.country;
   document.getElementById('temp').innerHTML="Temp:  "+" "+Math.round(weather.main.temp)+"C°";
   document.getElementById('sunny').innerHTML="Weather:"+" "+" "+weather.weather[0].main;
   document.getElementById('range').innerHTML="Range: "+" "+" "+Math.round(weather.main.temp_min)+"C°"+" "+"to "+" "+Math.round(weather.main.temp_max)+"C°";
  document.getElementById('wind').innerHTML="Wind:"+" "+" "+weather.wind.speed
  document.getElementById('feels').innerHTML="Feels Like:"+" "+" "+weather.main.feels_like+"C°"

 }
}

