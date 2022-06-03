const button = document.querySelector("button")
const input = document.querySelector("input")
const body = document.querySelector("body")
const colors = ["black", "lightblue", "red", "purple", "pink", "orange", "yellow"];

var sira = 0;

function changeBackground() {
    // random color
    const randomColor = Math.floor(Math.random() * colors.length);
    console.log(randomColor)
    const select = colors[randomColor];

    body.style.backgroundColor = select;
}

function InOrder() {
    // In Order
    if (sira == colors.length) sira = 0;

    console.log(sira);
    const iod = colors[sira];
    sira++;
    body.style.backgroundColor = iod;

    var deger = parseInt(document.getElementById('sayi').value);
    document.getElementById('sayi').value = deger + 1;
}

