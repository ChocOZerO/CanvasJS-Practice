var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d')
    MARGIN = 35,
    RADIUS = canvas.width/2 - MARGIN;
    context.save(); // context 상태를 저장(초기화)

/* Face */
function drawFace() {
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(canvas.width/2, canvas.height/2 - 100, RADIUS/2, ((Math.PI / 180) * 30), ((Math.PI / 180) * 165), true);
    context.stroke();
    context.fill();
    context.closePath();
    drawEye();
    drawMouth();
    context.restore();
}
function drawEye() {
    /* Eye */
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(canvas.width/2 - 80, canvas.height/2 - 140, 8, 0, Math.PI*2,true);
    context.fill();
    context.beginPath();
    context.arc(canvas.width/2 + 60, canvas.height/2 - 150, 8, 0, Math.PI*2,true);
    context.fill();

    /* Eye brow */
    context.beginPath();
    context.lineWidth = 5;
    context.arc(canvas.width/2 - 80, canvas.height/2 - 140, 25, -(Math.PI/4), -(Math.PI*3/4),true);
    context.stroke();
    context.beginPath();
    context.arc(canvas.width/2 + 60, canvas.height/2 - 150, 25, -(Math.PI/3), -(Math.PI*3/4),true);
    context.stroke();
    context.restore();
}
function drawMouth() {
    drawTeeth(canvas.width/2 - 105, canvas.height/2 - 55);
    drawTeeth(canvas.width/2 - 75, canvas.height/2 - 50);
    drawTeeth(canvas.width/2 - 45, canvas.height/2 - 45);
    drawTeeth(canvas.width/2 - 15, canvas.height/2 - 45);
    drawTeeth(canvas.width/2 + 15, canvas.height/2 - 45);
    drawTeeth(canvas.width/2 + 45, canvas.height/2 - 50);
    drawTeeth(canvas.width/2 + 75, canvas.height/2 - 55);

    context.beginPath();
    context.fillStyle = 'orange';
    context.bezierCurveTo(canvas.width/2 - 150, canvas.height/2 - 60, canvas.width/2 - 155, canvas.height/2 - 80, canvas.width/2 - 140, canvas.height/2 - 90);
    context.bezierCurveTo(canvas.width/2 - 140, canvas.height/2 - 90, canvas.width/2 - 100, canvas.height/2 - 100, canvas.width/2 - 35, canvas.height/2 - 90);
    context.bezierCurveTo(canvas.width/2 - 35, canvas.height/2 - 90, canvas.width/2 - 34, canvas.height/2 - 100, canvas.width/2 - 30, canvas.height/2 - 110);
    context.bezierCurveTo(canvas.width/2 - 30, canvas.height/2 - 110, canvas.width/2, canvas.height/2 - 115, canvas.width/2 + 25, canvas.height/2 - 110);
    context.bezierCurveTo(canvas.width/2 + 25, canvas.height/2 - 110, canvas.width/2 + 28, canvas.height/2 - 100, canvas.width/2 + 30, canvas.height/2 - 90);
    context.bezierCurveTo(canvas.width/2 + 30, canvas.height/2 - 90, canvas.width/2 + 100, canvas.height/2 - 100, canvas.width/2 + 140, canvas.height/2 - 90);
    context.bezierCurveTo(canvas.width/2 + 140, canvas.height/2 - 90, canvas.width/2 + 180, canvas.height/2 - 90, canvas.width/2 + 110, canvas.height/2 + 20);
    context.bezierCurveTo(canvas.width/2 + 110, canvas.height/2 + 20, canvas.width/2, canvas.height/2 + 80, canvas.width/2 - 110, canvas.height/2 + 20);
    context.bezierCurveTo(canvas.width/2 - 110, canvas.height/2 + 20, canvas.width/2 - 120, canvas.height/2 + 10, canvas.width/2 - 110, canvas.height/2);
    context.bezierCurveTo(canvas.width/2 - 110, canvas.height/2, canvas.width/2 + 80, canvas.height/2 + 25, canvas.width/2 + 90, canvas.height/2 - 50);
    context.bezierCurveTo(canvas.width/2 + 90, canvas.height/2 - 50, canvas.width/2 - 80, canvas.height/2 - 40, canvas.width/2 - 150, canvas.height/2 - 60);
    context.stroke();
    context.fill();

    context.fillStyle = 'black';
    context.beginPath();
    context.arc(canvas.width/2 - 15, canvas.height/2 - 100, 5, 0, Math.PI*2,true);
    context.fill();
    context.beginPath();
    context.arc(canvas.width/2 + 10, canvas.height/2 - 100, 5, 0, Math.PI*2,true);
    context.fill();
    context.restore();
}
function drawTeeth(x, y) {
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI*2,true);
    context.fill();
    context.stroke();
}

/* Body */
function drawBody() {
    context.fillStyle = 'white';
    context.beginPath();
    context.bezierCurveTo(275,400, 180,350, 100,200);
    context.bezierCurveTo(100,200, 200,290, 275,330);
    context.bezierCurveTo(275,330, 350,335, 425,330);
    context.bezierCurveTo(425,330, 530,285, 600,150);
    context.bezierCurveTo(600,150, 550,350, 425,400);
    context.bezierCurveTo(425,400, 430,450, 425,500);
    context.bezierCurveTo(425,500, 350,510, 275,500);
    context.bezierCurveTo(275,500, 270,450, 275,400);
    context.stroke();
    context.fill();
    drawCheer('silver', 100, 200);
    drawCheer('gold', 600, 150);
    context.restore();
}
function drawCheer(color, x, y) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, 80, 0, Math.PI*2, true);
    context.fill();
}

/* Action */
function drawActionDeco() {
    context.fillStyle = 'red';

    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2 - 100, RADIUS/2 + 20, ((Math.PI / 180) * 220), ((Math.PI / 180) * 215), true);
    context.arc(canvas.width/2, canvas.height/2 - 100, RADIUS/2 + 65, ((Math.PI / 180) * 215), ((Math.PI / 180) * 220), false);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2 - 100, RADIUS/2 + 20, ((Math.PI / 180) * 230), ((Math.PI / 180) * 225), true);
    context.arc(canvas.width/2, canvas.height/2 - 100, RADIUS/2 + 70, ((Math.PI / 180) * 225), ((Math.PI / 180) * 230), false);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2 - 100, RADIUS/2 + 20, ((Math.PI / 180) * 240), ((Math.PI / 180) * 235), true);
    context.arc(canvas.width/2, canvas.height/2 - 100, RADIUS/2 + 60, ((Math.PI / 180) * 235), ((Math.PI / 180) * 240), false);
    context.closePath();
    context.stroke();
    context.fill();

    context.restore();
}

for (var i = 0; i <= canvas.width; i=i+10) {
    context.beginPath();
    context.moveTo(i,0);
    context.lineTo(i,canvas.height);
    context.stroke();
}
for (var i = 0; i <= canvas.height; i=i+10) {
    context.beginPath();
    context.moveTo(0,i);
    context.lineTo(canvas.width,i);
    context.stroke();
}

function drawTube() {
    drawBody();
    drawFace();
    drawActionDeco();
}

drawTube();
