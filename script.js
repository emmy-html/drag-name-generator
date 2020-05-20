var firstNames = ["Jackie", "Harmony", "Paris", "Londyn", "Nina"];
var lastNames = ["Moody", "Ludicrous", "Fancie", "Poise", "Icy"];

function randomize(array) {
return array[Math.floor(Math.random(array) * array.length)];
}

var randomDragName = randomize(firstNames) + " " + randomize(lastNames);

document.getElementById("dragNameButton").addEventListener("click", dragName);

function dragName() {
    document.getElementById("dragNameText").innerHTML = randomDragName;
}