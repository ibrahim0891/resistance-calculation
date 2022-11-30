const dropdown = document.querySelectorAll(".dropdown");
const bands = document.querySelectorAll('.band')
const output = document.querySelectorAll(".output")[0];
const output2 = document.querySelectorAll(".output")[1];
const output3 = document.querySelectorAll(".output")[2];
var colorArray = [ 
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "gray",
    "white",
];
const tolarence = {
    gold: 5,
    silver: 10,
    noColor: 20,
};

function formatLongNumber(number) {
    if (String(number).length <= 3) {
        return number
    }
    else if (String(number).length <= 6) {
        var k = number / 1000
        return k + 'K'
    }
    else {
        var m = number / 1000000
        return m + 'M'
    }
}

const calculatResistance = () => {
    var A = colorArray.indexOf(dropdown[0].value);
    var B = colorArray.indexOf(dropdown[1].value);
    var C = colorArray.indexOf(dropdown[2].value);
    var D = dropdown[3].value;

    var resistorValue = Number(String(A) + String(B)) * 10 ** C;
    var highestValue = resistorValue + (resistorValue * (tolarence[D] / 100));
    var lowestValue = resistorValue - (resistorValue * (tolarence[D] / 100));

    var result = formatLongNumber(resistorValue) + " ohm +/-" + tolarence[D] + "%";
    output.innerHTML = result;
    output2.innerHTML = formatLongNumber(highestValue) + " ohm";
    output3.innerHTML = formatLongNumber(lowestValue) + " ohm";
};

function lazyLoad() {
    setTimeout(calculatResistance, 2500)
    output.innerHTML = "<i> Calculating...</i>"
    output2.innerHTML = "<i> Calculating...</i>"
    output3.innerHTML = "<i> Calculating...</i>"

}

dropdown.forEach((items)=>{
    items.addEventListener('change',changeBandColor)
})

function changeBandColor(){
    var i = 0
    bands.forEach((items)=>{
        items.style.background = document.querySelectorAll('.dropdown')[i].value 
        i++
    })
}
