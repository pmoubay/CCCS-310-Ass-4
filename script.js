var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");
var start = 1;



function myFunction() {

    if (start == 2) {
        drawSun();

    }

    if (start == 1) {
        drawHouse();

    }

    if (start == 3) {
        clearCanvas();
        start = 0;
    }

    start++;

}

// Draw sun
function drawSun() {

    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(75, 75, 40, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
}

function drawRays() {
    var i;

    var x = 50;
    var y = 50;
    context.beginPath();
    context.moveTo(75, 75);
    context.lineTo(75 + x, 75 + y);
    context.strokeStyle = "yellow";
    context.lineWidth = 2;
    context.stroke();

}

// Draw House
function drawHouse() {
    context.fillStyle = "black";
    context.fillRect(125, 175, 200, 100);
    context.beginPath();
    context.moveTo(125, 175);
    context.lineTo(325, 175);
    context.lineTo(225, 100);
    context.fill();

}

function clearCanvas() {
    context.clearRect(0, 0, 400, 300);
}
