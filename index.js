// function printSomething(){
//     let city=document.getElementById('input').value;
//     console.log(city)
    
// const apikey="a7de43f909f0f7ab6f428c22c33d4e23";
const apikey="a7de43f909f0f7ab6f428c22c33d4e23";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-img")
const searchBox = document.querySelector("#input");

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})
checkweather();


  async function checkweather(city){
    const response= await fetch(apiurl + city +  `&appid=${apikey}`);
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
  }
  else{
    var data= await response.json();
    // console.log(apiurl + `&appid=${apikey}`)
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity +"%" ;
    document.querySelector('.wind').innerHTML=data.wind.speed +"km/h";
    if(data.weather[0].main == "Clouds"){
      weathericon.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
      weathericon.src = "images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
      weathericon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
      weathericon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
      weathericon.src = "images/mist.png";
  }
  else if(data.weather[0].main == "Snow"){
      weathericon.src = "images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  }

  }

var typed = new Typed(".dynamic", {
  strings: ["Hello","ಹೇಗಿದ್ದೀರ!","Kemcho","Kemon Aacho","Kaise Ho"],
  typespeed: 10,
  backspeed: 10,
  backDelay:1000,
  typeDelay:1000,
  loop: true 
  
});

//PRESSING ENTER AS A SUBMIT BUTTON
searchBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".search button").click();
  }
}
  );
    


  



