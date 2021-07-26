function dda() {
  var x0 = parseInt(document.form1.x1.value);
  var y0 = parseInt(document.form1.y1.value);
  var x1 = parseInt(document.form1.x2.value);
  var y1 = parseInt(document.form1.y2.value);
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  const dx = x1 - x0,
    dy = y1 - y0;
  var m = parseFloat(dy / dx);
  var x = x0,
    y = y0;
  while(!(x>x1)){
    setTimeout(ctx.fillRect(x,y,0,0), 500);
    x=x+1;
    y=y+m;
  }
}
