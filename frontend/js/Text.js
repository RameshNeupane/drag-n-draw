/**
 * CLASS TEXT
 */
class TextValue {
  constructor(
    _id,
    name = TEXT_NAME,
    textValue = TEXT_VALUE,
    positionX = TEXT_POSITION_X,
    positionY = TEXT_POSITION_Y,
    fontSize = TEXT_FONT_SIZE,
    fontFamily = TEXT_FONT_FAMILY,
    fillStyle = TEXT_FILL_STYLE
  ) {
    this._id = _id;
    this.name = name;
    this.textValue = textValue;
    this.positionX = positionX;
    this.positionY = positionY;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.fillStyle = fillStyle;
    this.isDetected = false;

    canvas.addEventListener("mousedown", (event) => {
      this.mousePositionX = event.clientX;
      this.mousePositionY = event.clientY;
      let text = ctx.measureText(this.textValue);
      this.width = text.width;
      let actualHeight =
        text.actualBoundingBoxAscent + text.actualBoundingBoxDescent;
      this.height = actualHeight;

      if (
        this.mousePositionX >= this.positionX &&
        this.mousePositionX <= this.positionX + this.width &&
        this.mousePositionY >= this.positionY - this.fontSize &&
        this.mousePositionY <= this.positionY
      ) {
        selectedShapeObject = this;
        selectionBox.setBoxShape(
          this.positionX - this.width / 2,
          this.positionY - this.fontSize,
          this.width,
          this.fontSize
        );
        selectionBox.draw(ctx);
      }
    });
  }

  /**
   * draw text
   * @param {CanvasContext} ctx canvas context to draw shape
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    ctx.textAlign = "center";
    ctx.fillText(this.textValue, this.positionX, this.positionY, this.width);
    ctx.closePath();
    ctx.save();
  }
}
