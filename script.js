const API_KEY = `a9ca86a6cc6241909c6e1196980e115a`;

let temperature = document.getElementById(`temperature`);
let lugar = document.getElementById(`lugar`);
let description = document.getElementById(`description`);
let humidity = document.getElementById(`humidity`);
let pressure = document.getElementById(`pressure`);
let wind = document.getElementById(`wind`);


navigator.geolocation.getCurrentPosition(position => {
 

    const { latitude, longitude } = position.coords;
     axios.post(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then(res => setWeatherData(res.data)).catch(e=>{
        console.log(e);
        alert("404 Not Found")
      })
      

      const setWeatherData = data => {
        console.log(data);

        let temp = Math.round(data.main.temp);
        temperature.textContent = temp;

        let des = (data.weather[0].description);
        description.textContent = des;

        let hum = (data.main.humidity);
        humidity.textContent = hum;

        let pre = (data.main.pressure);
        pressure.textContent = pre;

        let viento = (data.wind.speed * 3.6).toFixed(1);
        wind.textContent = viento;
        
        let name = (data.name);
        lugar.textContent = name;

     
      diaActual = new Date()
      let dia = diaActual.getDate();
      let mes = diaActual.getMonth();
      let año = diaActual.getFullYear();
    
      document.getElementById("fecha").innerHTML = dia + ` / ` + mes + ` / ` + año;
      }
      cleanUp()
    })
     const cleanUp = () =>{
        let container = document.getElementById("container");
        container.style.display = "block";
        let loader1 = document.getElementById("loader1");
        
       if (container.style.display == "block") {
        loader1.style.display = "none";
       } 
      }
