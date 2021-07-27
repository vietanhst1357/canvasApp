var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

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
  start0(x, y, m, x1);
  start1(x, y, m, x1);
  start2(x, y, m, x1, y1);
  start3(x, y, m, x1, y1);
}

function start0(x, y, m, x1) {
  if (x < x1) {
    setTimeout(function () {
      ctx.moveTo(x, y);
      x = x + 1;
      y = y + m;
      ctx.lineTo(x, y);
      ctx.stroke();
      start0(x, y, m, x1);
    }, 5);
  }
}

function start1(x, y, m, x1) {
  if (x > x1) {
    setTimeout(function () {
      ctx.moveTo(x, y);
      x = x - 1;
      y = y - m;
      ctx.lineTo(x, y);
      ctx.stroke();
      start1(x, y, m, x1);
    }, 5);
  }
}

function start2(x, y, m, x1, y1) {
  if ((x == x1) && (y < y1)) {
    setTimeout(function () {
      ctx.moveTo(x, y);
      y = y + m;
      ctx.lineTo(x, y);
      ctx.stroke();
      start2(x, y, m, x1, y1);
    }, 5);
  }
}
function start3(x, y, m, x1, y1) {
  if ((x == x1) && (y > y1)) {
    setTimeout(function () {
      ctx.moveTo(x, y);
      y = y - m;
      ctx.lineTo(x, y);
      ctx.stroke();
      start3(x, y, m, x1, y1);
    }, 5);
  }
}
