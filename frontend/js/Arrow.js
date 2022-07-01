/**
 * CLASS ARROW
 */
class Arrow {
  constructor(
    _id,
    name = ARROW_NAME,
    positionX = ARROW_POSITION_X,
    positionY = ARROW_POSITION_Y,
    arrowLength = ARROW_LENGTH,
    height = ARROW_HEIGHT,
    lineWidth = ARROW_LINE_WIDTH,
    fillStyle = ARROW_FILL_STYLE,
    strokeStyle = ARROW_STROKE_STYLE
  ) {
    this._id = _id;
    this.name = name;
    this.positionX = positionX;
    this.positionY = positionY;
    this.arrowLength = arrowLength;
    this.height = height;
    this.lineWidth = lineWidth;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.isDetected = false;

    canvas.addEventListener("mousedown", (event) => {
      this.mousePositionX = event.clientX;
      this.mousePositionY = event.clientY;

      // check mouse position inside the arrow
      if (
        this.mousePositionX >= this.positionX &&
        this.mousePositionX <=
          this.positionX + this.arrowLength + this.height / 2 &&
        this.mousePositionY >= this.positionY - this.height / 2 &&
        this.mousePositionY <= this.positionY + (3 * this.height) / 2
      ) {
        this.isDetected = true;
        selectedShapeObject = this;
        selectionBox.setBoxShape(
          this.positionX,
          this.positionY - this.height / 2,
          this.arrowLength + this.height / 2,
          2 * this.height
        );
        clearCanvas();
        selectionBox.draw(ctx);
      }
    });

    canvas.addEventListener("mouseup", (event) => {
      this.isDetected = false;
    });
  }

  /**
   * draw arrow
   * @param {CanvasContext} ctx canvas context to draw shape
   */
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
