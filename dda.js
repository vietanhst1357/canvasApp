var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function clearCanvas(){
  ctx.clearRect(0, 0, 1670, 1080);
}

function dda() {
  var x0 = parseInt(document.form1.x1.value);
  var y0 = parseInt(document.form1.y1.value);
  var x1 = parseInt(document.form1.x2.value);
  var y1 = parseInt(document.form1.y2.value);
  ctx.beginPath();
  const dx = x1 - x0,
    dy = y1 - y0;
  var m = dx == 0 ? 1 : parseFloat(dy / dx);
  var x = x0,
    y = y0;
  start(x, y, m, x1, y1);
}

function start(x, y, m, x1, y1) {
  if (x > x1) {
    setTimeout(function () {
      ctx.moveTo(x, y);
      x = x - 1;
      y = y - m;
      ctx.lineTo(x, y);
      ctx.stroke();
      start(x, y, m, x1, y1);
    }, 5);
  } else if (x < x1) {
    setTimeout(function () {
      ctx.moveTo(x, y);
      x = x + 1;
      y = y + m;
      ctx.lineTo(x, y);
      ctx.stroke();
      start(x, y, m, x1);
    }, 5);
  } else if (x == x1 && y < y1) {
    setTimeout(function () {
      ctx.moveTo(x, y);
      y = y + m;
      ctx.lineTo(x, y);
      ctx.stroke();
      start(x, y, m, x1, y1);
    }, 5);
  } else if (x == x1 && y > y1) {
    setTimeout(function () {
      ctx.moveTo(x, y);
      y = y - m;
      ctx.lineTo(x, y);
      ctx.stroke();
      start(x, y, m, x1, y1);
    }, 5);
  }
}
