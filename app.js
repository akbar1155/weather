let elBox = document.querySelector(".box")
let elInput = document.querySelector(".input")

let searchValue = "Tashkent"

function fetchData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=5fd0b8985bcf798a5d8d5c1c04c280ad&units=metric`)
        .then(res => res.json())
        .then(data => htmlCard(data))
}

fetchData()

function htmlCard(data) {
    console.log(data);
    let card = `
        <div class="card" style="width: 18rem;">
            <img src=${`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <div>
            <h5 class="card-title">
                Temp: ${data.main.temp}°C
            </h5>
            <h5 class="card-title">
                Wind Deg: ${data.wind.deg}°
            </h5>
            <h5 class="card-title">
                Temp: ${data.wind.speed}m/s
            </h5>
            <h5 class="card-title">${data.weather[0].main}</h5>

            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `

    elBox.insertAdjacentHTML("afterbegin", card)
}

elInput.addEventListener("keyup", e => {
    if(e.keyCode == 13) {
        elBox.innerHTML = null
        searchValue = elInput.value

        fetchData()
    }
})