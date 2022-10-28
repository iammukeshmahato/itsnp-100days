setInterval(function () {
  let d = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let hour = checkDigit(d.getHours());
  let min = checkDigit(d.getMinutes());
  let sec = checkDigit(d.getSeconds());
  let yr = checkDigit(d.getFullYear());
  let mnth = checkDigit(d.getMonth());
  let date = checkDigit(d.getDate());
  let day = days[d.getDay()];


  let final = `${hour} : ${min} : ${sec}`;
  let dates = `${yr} - ${mnth} - ${date}, ${day}, ( ${final} )`;
  document.getElementById('btn').innerHTML = dates;
  document.querySelector("#year").innerText = yr;
}, 100);

function checkDigit(digit) {
  if (digit < 10) {
    return `0${digit}`;
  } else {
    return digit;
  }
}

function show() {
  let city = document.getElementById('city').value;
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=90ffdb032c26e51b615cb172aaf9963a")
    .then(function (response) {
      if (!response.ok) {
        alert("No weather found for entered City.");
        throw new Error("No weather found for entered City.");
      }
      return response.json();
    })
    .then(function (data) {
      weather(data);
    });
}
function weather(data) {
  const { name } = data;
  const { lon, lat } = data.coord;
  const { country } = data.sys;
  const { temp, temp_min, temp_max, pressure, humidity } = data.main;
  const { speed } = data.wind;
  const { description, icon } = data.weather[0];

  let imgsrc = "http://openweathermap.org/img/w/" + icon + ".png";
  document.querySelector("img").src = imgsrc; document.querySelector(".temp").innerHTML = "<h2>" + temp + "<sup> °C</sup> </h2>";
  document.querySelector(".description").innerHTML = "<b><u>" + description + "</u></b>";
  document.querySelector(".pressure").innerHTML = pressure + " hPa";
  document.querySelector(".temp_min").innerHTML = temp_min + "<sup> °c </sup>";
  document.querySelector(".temp_max").innerHTML = temp_max + "<sup> °c </sup>";
  document.querySelector(".humidity").innerHTML = humidity + " %";
  document.querySelector(".speed").innerHTML = speed + " m/s";
  document.querySelector(".name").innerHTML = name;
  document.querySelector(".country").innerHTML = country;
  document.querySelector(".longitude").innerHTML = lon;
  document.querySelector(".latitude").innerHTML = lat;
  document.getElementById('display').style.display = "block";
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  show();
})