var theScore = 0

// Create a circle shaped path at the center of the view:
var path = new Path.Circle({
  center: view.center,
  radius: 100,  //CHANGE THIS NUMBER TO CHANGE THE SIZE OF THE CIRCLE
  fillColor: "green"
});

document.querySelector("#score").innerText = theScore;


// When the mouse is pressed on the item,
// Move the circle's position to a random place:
path.onMouseDown = function(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;  //contains the x and the y
  path.fillColor = generateRandomColor();  //change color everytime circle was clicked
  this.position = point;

  theScore++;  //add 1 point everytime a circle was clicked

  document.querySelector("#score").innerText = theScore;  //update the score
}

// To generate a random color, we need a function:
function generateRandomColor() {
  var r = Math.floor(Math.random() * 256);  //a random number bet. 0 - 255 for red
  var g = Math.floor(Math.random() * 256);  //a random number bet. 0 - 255 for green
  var b = Math.floor(Math.random() * 256);  //a random number bet. 0 - 255 for blue

  return "rgb(" + r + ", " + g + ", " + b + ")"  //return the string with all values inserted
}
// console.log(generateRandomColor())
