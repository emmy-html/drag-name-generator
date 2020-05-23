// name options
var firstNames = ["Jackie", "Harmony", "Paris", "Londyn", "Nina"];
var lastNames = ["Moody", "Ludicrous", "Fancie", "Poise", "Icy"];
var middleNames = ["Violet", "Magenta", "Blu", "Tangerine", "Honey"];

// function to return a random name
function randomize(array) {
  return array[Math.floor(Math.random(array) * array.length)];
}

// assign middle name checkbox to a variable
var middle = document.getElementById("middleNameOption");

// display the name on the page when button is clicked
document.getElementById("dragNameButton").addEventListener("click", dragName);

// function that makes all the drag magic happen!
function dragName() {
  var randomDragName = randomize(firstNames) + " " + randomize(lastNames);
  var randomDragNameMiddle =
    randomize(firstNames) +
    " " +
    randomize(middleNames) +
    " " +
    randomize(lastNames);
  if (middle.checked === true) {
    document.getElementById("dragNameText").innerHTML = randomDragNameMiddle;
  } else {
    document.getElementById("dragNameText").innerHTML = randomDragName;
  }
  document.getElementById("dragNameButton").innerHTML = "Drag Me Again!";
  document.getElementById("condragulations").innerHTML = "Condragulations! Your new name is...";
}
