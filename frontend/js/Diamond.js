/**
 * CLASS DIAMOND
 */
class Diamond {
  constructor(
    _id,
    name = DIAMOND_NAME,
    centerX = DIAMOND_CENTER_X,
    centerY = DIAMOND_CENTER_Y,
    width = DIAMOND_WIDTH,
    height = DIAMOND_HEIGHT,
    lineWidth = DIAMOND_LINE_WIDTH,
    fillStyle = DIAMOND_FILL_STYLE,
    strokeStyle = DIAMOND_STROKE_STYLE
  ) {
    this._id = _id;
    this.name = name;
    this.centerX = centerX;
    this.centerY = centerY;
    this.width = width;
    this.height = height;
    this.lineWidth = lineWidth;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.isDetected = false;

    canvas.addEventListener("mousedown", (event) => {
      this.mx = event.clientX;
      this.my = event.clientY;

      // check mouse position
      if (
        // top corner
        (this.mx >= this.centerX - 5 &&
          this.mx <= this.centerX + 5 &&
          this.my >= this.centerY - this.height - 5 &&
          this.my <= this.centerY - this.height + 5) ||
        // right corner
        (this.mx >= this.centerX + this.lineWidth - 5 &&
          this.mx <= this.centerX + this.width + 5 &&
          this.my >= this.centerY - 5 &&
          this.my <= this.centerY + 5) ||
        // bottom corner
        (this.mx >= this.centerX - 5 &&
          this.mx <= this.centerX + 5 &&
          this.my >= this.centerY + this.height - 5 &&
          this.my <= this.centerY + this.height + 5) ||
        // left corner
        (this.mx >= this.centerX - this.width - 5 &&
          this.mx <= this.centerX - this.width + 5 &&
          this.my >= this.centerY - 5 &&
          this.my <= this.centerY + 5)
      ) {
        this.isDetected = true;
        selectedShapeObject = this;
        selectionBox.setBoxShape(
          this.centerX - this.width,
          this.centerY - this.height,
          2 * this.width,
          2 * this.height
        );
        clearCanvas();
        selectionBox.draw(ctx);
        drawShapes();
      }
    });

    canvas.addEventListener("mouseup", (event) => {
      this.isDetected = false;
    });
  }

  /**
   * draw diamond
   * @param {CanvasContext} ctx canvas context to draw shape
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.moveTo(this.centerX, this.centerY - this.height); // top
    ctx.lineTo(this.centerX + this.width, this.centerY); // right
    ctx.lineTo(this.centerX, this.centerY + this.height); // bottom
    ctx.lineTo(this.centerX - this.width, this.centerY); // left
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.save();
  }
}
