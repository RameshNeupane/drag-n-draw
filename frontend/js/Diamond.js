/**
 * CLASS DIAMOND
 */
class Diamond {
  constructor(
    shape = "diamond",
    centerX = 400,
    centerY = 300,
    width = 100,
    height = 100,
    lineWidth = 2,
    fillStyle = "transparent",
    strokeStyle = "black"
  ) {
    this.shape = shape;
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;
    this.lineWidth = lineWidth;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.moveTo(this.centerX, this.centerY - this.height);
    ctx.lineTo(this.centerX + this.width, this.centerY);
    ctx.lineTo(this.centerX, this.centerY + this.height);
    ctx.lineTo(this.centerX - this.width, this.centerY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.save();
  }
}
