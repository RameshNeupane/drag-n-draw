/**
 * CLASS DIAMOND
 */
class Diamond {
  constructor(
    name = DIAMOND_NAME,
    centerX = DIAMOND_CENTER_X,
    centerY = DIAMOND_CENTER_Y,
    width = DIAMOND_WIDTH,
    height = DIAMOND_HEIGHT,
    lineWidth = DIAMOND_LINE_WIDTH,
    fillStyle = DIAMOND_FILL_STYLE,
    strokeStyle = DIAMOND_STROKE_STYLE
  ) {
    this.name = name;
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
