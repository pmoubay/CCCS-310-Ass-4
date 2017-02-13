var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");
var start = 0;


function myFunction() {

    start++;

    if (start == 2) {
          drawSun();
          document.getElementById('btn').innerHTML="Clear Canvas";
    }

    if (start == 1) {
        drawHouse();
        document.getElementById('btn').innerHTML="Draw Sun";

    }

    if (start == 3) {
        clearCanvas();
        document.getElementById('btn').innerHTML="Draw House";
        start = 0;
    }



}

// Draw sun
function drawSun() {
    context.clearRect(0, 0, 175, 125);
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(75, 75, 25, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    drawRays();
}

function drawRays() {
    var i = 0;
    for (i = 0; i < 40; i++) {
        var x = Math.floor(Math.random() * (-110)) + 140;
        var y = Math.floor(Math.random() * (-110)) + 120;
        context.beginPath();
        context.moveTo(75, 75);
        context.lineTo(x, y);
        context.strokeStyle = "yellow";
        context.lineWidth =  Math.floor(Math.random() * 2 ) + 1;
        context.stroke();
    }
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
