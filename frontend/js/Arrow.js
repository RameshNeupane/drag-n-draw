/**
 * CLASS ARROW
 */
class Arrow {
  constructor(
    name = ARROW_NAME,
    positionX = ARROW_POSITION_X,
    positionY = ARROW_POSITION_Y,
    arrowLength = ARROW_LENGTH,
    height = ARROW_HEIGHT,
    lineWidth = ARROW_LINE_WIDTH,
    fillStyle = ARROW_FILL_STYLE,
    strokeStyle = ARROW_STROKE_STYLE
  ) {
    this.name = name;
    this.positionX = positionX;
    this.positionY = positionY;
    this.arrowLength = arrowLength;
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
    const bodyLength = this.arrowLength * 0.9;
    ctx.rect(this.positionX, this.positionY, bodyLength, this.height);
    ctx.moveTo(this.positionX + bodyLength, this.positionY - this.height / 2);
    ctx.lineTo(
      this.positionX + bodyLength,
      this.positionY + (3 * this.height) / 2
    );
    ctx.lineTo(
      this.positionX + this.arrowLength + this.height / 2,
      this.positionY + this.height / 2
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.save();
  }
}
