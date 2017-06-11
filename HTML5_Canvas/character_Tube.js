var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d')
    MARGIN = 35,
    RADIUS = canvas.width/2 - MARGIN;
    context.save(); // context 상태를 저장(초기화)

function drawFace() {
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2 - 100, RADIUS/2, 0 , Math.PI*2,true);
    context.stroke();
    drawEye();
    context.restore();
}

function drawBody() {
    context.beginPath();
    context.bezierCurveTo(100,200, 400,550, 600,150);
    context.bezierCurveTo(600,150, 550,350, 425,400);
    context.bezierCurveTo(425,400, 430,450, 425,500);
    context.bezierCurveTo(425,500, 350,510, 275,500);
    context.bezierCurveTo(275,500, 270,450, 275,400);
    context.bezierCurveTo(275,400, 180,350, 100,200);
    context.stroke();
    context.restore();
}

function drawEye() {
    context.beginPath();
    context.arc(canvas.width/2 - 80, canvas.height/2 - 140, 8, 0, Math.PI*2,true);
    context.fill();
    context.beginPath();
    context.arc(canvas.width/2 + 60, canvas.height/2 - 150, 8, 0, Math.PI*2,true);
    context.fill();
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
    context.beginPath();
    context.fillStyle = 'orange';
    context.bezierCurveTo(canvas.width/2 - 130, canvas.height/2-50 , canvas.width/2, canvas.height/2 - 60,canvas.width/2 + 140, canvas.height/2-50);
    context.bezierCurveTo(canvas.width/2 + 140, canvas.height/2-50 , canvas.width/2 + 145, canvas.height/2 +30,canvas.width/2 + 130, canvas.height/2+30);
    context.bezierCurveTo(canvas.width/2 + 130, canvas.height/2+30 , canvas.width/2, canvas.height/2 + 100,canvas.width/2 - 130, canvas.height/2+30);
    context.bezierCurveTo(canvas.width/2 - 130, canvas.height/2+30 , canvas.width/2 - 145, canvas.height/2 - 60,canvas.width/2 - 130, canvas.height/2-50);
    context.fill();

    context.fillStyle = 'black';
    context.beginPath();
    context.arc(canvas.width/2 - 10, canvas.height/2 - 30, 5, 0, Math.PI*2,true);
    context.fill();
    context.beginPath();
    context.arc(canvas.width/2 + 10, canvas.height/2 - 30, 5, 0, Math.PI*2,true);
    context.fill();
    context.restore();
}

function drawCheer() {
    context.beginPath();
    context.fillStyle = 'brown';
    context.arc(100,200, 80, 0, Math.PI*2, true);
    context.arc(600,150, 80, 0, Math.PI*2, true);
    context.fill();
    context.restore();
}

drawBody();
drawFace();
drawMouth();
drawCheer();
// drawEye();
