// document.getElementById("count").innerText = 5;

let count = 0;
let countEl = document.getElementById("count-inc")
let saveEl = document.getElementById("save-el")

function increment(){
    count = count + 1;
    // document.getElementById("count-inc").innerText = count
    // countEl.innerText = count
    countEl.textContent = count
}


function save(){
    saveEl.textContent += count + " - "
    count = 0;
    countEl.textContent = count
}

