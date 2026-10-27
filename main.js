const city=document.getElementById('city')
const search=document.getElementById('search')
const weather=document.getElementById('weather')

search.addEventListener('click',()=>{
    console.log('search button clicked');
    
    const input=city.value
    if(input){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`

    fetch(url).then(response=>{
         if (response.status !== 200) {
        weather.innerHTML = `
            <p class="text-danger text-center">
                City not found. Please enter a valid city name.
            </p>
        `
        return
    }
        return response.json()
            
        })
        .then(data=>{
            
            weather.innerHTML=`
                <div class="card shadow border-0 rounded-4 p-4 w-50 mx-auto">
                    <h4>${data.name}</h4>
                    <h2 class="text-danger">${data.main.temp} °C</h2>
                    <h4 class="text-success">${data.weather[0].description}  </h4>
                    <h4 class="text-success">Humidity: ${data.main.humidity} % </h4>
                    <h4>wind speed: ${data.wind.speed} m/s</h4>
                </div>
            `
            
    })
    }
    else{
        alert('Please enter a city name')
        return
    }
   
})