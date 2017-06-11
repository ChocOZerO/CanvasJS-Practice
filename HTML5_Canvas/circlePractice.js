var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d')
    MARGIN = 35,
    RADIUS = canvas.width/2 - MARGIN;
    context.save(); // context 상태를 저장(초기화)

// context.font = '38pt Arial';
// context.fillStyle = 'cornflowerblue';
// context.strokeStyle = 'blue';
//
// context.fillText('Hello Canvas', canvas.width/2 - 150,
//                                 canvas.height/2 + 15);
//
// context.strokeText('Hello Canvas', canvas.width/2 - 150,
//                                     canvas.height/2 + 15);
var date = new Date;
function drawCircle() {
    context.beginPath(); // 한붓그리기를 끊기
    context.strokeStyle = "red";
    context.arc(canvas.width/2, canvas.height/2, RADIUS/2, 0 , Math.PI*2,true);
    context.stroke();
    context.restore(); // 초기화했던 context 다시 불러오기(함수끝날때 초기화)
}

function drawDot() {
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(canvas.width/2, canvas.height/2, 100, 0, Math.PI*2, true);
    context.fill();

}

function drawLine(loc) {
    var angle = (Math.PI*2) * (loc/60) - Math.PI/2;
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.moveTo(canvas.width/2, canvas.height/2); // 시작점
    context.lineTo(canvas.width/2 + Math.cos(angle)*30,
                    canvas.height/2 + Math.sin(angle)*30); // 끝점
    context.stroke();
}

function drawText() {
    context.beginPath();
    context.fillStyle="black";
    context.font = "20px Georgia";
    context.fillText('test', canvas.width/2 - 150,
                                    canvas.height/2 + 15);
}

function drawRect() {
    context.beginPath();
    // var gradient = context.createLinearGradient(0,0,canvas.width,0);
    // gradient.addColorStop("0","blue");
    // context.fillStyle = gradient;
    context.rect(20,20,150,100);
    context.stroke();
}

// context.clearRect(0,0,canvas.width,canvas.height);
drawCircle();
drawDot();
drawLine(date.getMinutes());
drawText();
drawRect();
context.clearRect(canvas.width/2,canvas.height/2,canvas.width,canvas.height);
