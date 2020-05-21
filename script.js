// name options
var firstNames = ["Jackie", "Harmony", "Paris", "Londyn", "Nina"];
var lastNames = ["Moody", "Ludicrous", "Fancie", "Poise", "Icy"];
var middleNames = ["Violet", "Magenta", "Blu", "Tangerine", "Honey"];

// function to return a random name 
function randomize(array) {
    return array[Math.floor(Math.random(array) * array.length)];
}

// display the names on the page
document.getElementById("dragNameButton").addEventListener("click", dragName);

    function dragName() {
        // add the random names together
        var randomDragName = randomize(firstNames) + " " + randomize(lastNames);
        document.getElementById("dragNameText").innerHTML = randomDragName;
        document.getElementById("dragNameButton").innerHTML = "Drag Me Again!";
    }