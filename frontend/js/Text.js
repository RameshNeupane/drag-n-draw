/**
 * CLASS TEXT
 */
class TextValue {
  constructor(
    name = TEXT_NAME,
    textValue = TEXT_VALUE,
    positionX = TEXT_POSITION_X,
    positionY = TEXT_POSITION_Y,
    font = TEXT_FONT,
    fillStyle = TEXT_FILL_STYLE
  ) {
    this.name = name;
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
