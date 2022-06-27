/**
 * CLASS TEXT
 */
class TextValue {
  constructor(
    shape = "text",
    textValue,
    positionX,
    positionY,
    font,
    fillStyle
  ) {
    this.shape = shape;
    this.textValue = textValue;
    this.positionX = positionX;
    this.positionY = positionY;
    this.font = font;
    this.fillStyle = fillStyle;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.font = this.font;
    ctx.fillText(this.textValue, this.positionX, this.positionY);
    ctx.closePath();
    ctx.save();
  }
}
