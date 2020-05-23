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
var noMiddle = document.getElementById("noMiddle");

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
  if (middle.checked === true && noMiddle.checked === true) {
    document.getElementById("dragNameText").innerHTML = "Oh no she betta don't!";
  } else if (noMiddle.checked === true) {
    document.getElementById("dragNameText").innerHTML = randomDragName;
  } else if (middle.checked === true) {
    document.getElementById("dragNameText").innerHTML = randomDragNameMiddle;
  } else {
    document.getElementById("dragNameText").innerHTML = "You gotta pick something!";
  }
  document.getElementById("dragNameButton").innerHTML = "Drag Me Again!";
  document.getElementById("condragulations").innerHTML = "Condragulations! Your new name is...";
}
