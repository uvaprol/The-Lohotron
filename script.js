function random(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}

const roulette = document.getElementById('roulette')
const btn = document.getElementById('btn')
let choice = [1, 2, 3, 4]

function geneartion(){
    for(let i = 0; i < 110; i++){
        const el = random(99, 100)
        if (el != i){
            roulette.innerHTML +=`
            <div class="slot">
                <p>${random(1, 4)}</p>
            </div>`
        }
        else{
            const ch = choice[random(0, 3)]
            // choice
            console.log(ch)
            roulette.innerHTML +=`
            <div class="slot">
                <p>${ch}</p>
            </div>`
        }
    }
}


function spin(){
    roulette.style.animation = 'scroll_left 10s forwards'
}

window.onload = ()=>{geneartion()}