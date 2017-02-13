var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

drawHouse();
drawSun();

// Draw sun
function drawSun()  {
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(75, 75, 40, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = "black";
}

// Draw House
function drawHouse() {

    context.fillRect(125, 175, 200, 100);
    context.beginPath();
    context.moveTo(125, 175);
    context.lineTo(325, 175);
    context.lineTo(225, 100);
    context.fill();
    context.fillStyle = "black";
}
