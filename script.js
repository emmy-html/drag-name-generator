var firstNames = ["Jackie", "Harmony", "Paris", "Londyn", "Nina"];
var randomFirstName = firstNames[Math.floor(Math.random(firstNames) * firstNames.length)];

function randomize(array) {
return array[Math.floor(Math.random(array) * array.length)];
}

console.log(randomize(firstNames));
