/**
 * CLASS LINE
 */
class Line {
  constructor(
    shape = "line",
    startPositionX,
    startPositionY,
    endPositionX,
    endPositionY,
    lineWidth,
    lineCap,
    strokeStyle
  ) {
    this.shape = shape;
    this.startPositionX = startPositionX;
    this.startPositionY = startPositionY;
    this.endPositionX = endPositionX;
    this.endPositionY = endPositionY;
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.strokeStyle = strokeStyle;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = this.lineCap;
    ctx.strokeStyle = this.strokeStyle;
    ctx.moveTo(this.startPositionX, this.startPositionY);
    ctx.lineTo(this.endPositionX, this.endPositionY);
    ctx.closePath();
    ctx.stroke();
    ctx.save();
  }
}
