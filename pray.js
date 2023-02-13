let elBoxTwo = document.querySelector(".box-2")

function time () {
    fetch(`https://dailyprayer.abdulrcs.repl.co/api/tashkent`).then(res => res.json()).then(data => showCard(data))
}

time()

function showCard (data) {
    console.log(data);
    let cardToday = `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `

    elBoxTwo.insertAdjacentHTML("beforeend", cardToday)
}

showCard()