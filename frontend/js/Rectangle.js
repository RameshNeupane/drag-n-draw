class Rectangle {
  constructor(
    _id,
    name = RECTANGLE_NAME,
    positionX = RECTANGLE_POSITION_X,
    positionY = RECTANGLE_POSITION_Y,
    width = RECTANGLE_WIDTH,
    height = RECTANGLE_HEIGHT,
    lineWidth = RECTANGLE_LINE_WIDTH,
    fillStyle = RECTANGLE_FILL_STYLE,
    strokeStyle = RECTANGLE_STROKE_STYLE
  ) {
    this._id = _id;
    this.name = name;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.lineWidth = lineWidth;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.isDetected = false;
    this.mx = 0;
    this.my = 0;

    canvas.addEventListener("mousedown", (event) => {
      this.mx = event.clientX;
      this.my = event.clientY;
      if (
        // top boundary
        (this.mx >= this.positionX - 5 &&
          this.mx <= this.positionX + this.width + 5 &&
          this.my >= this.positionY - 5 &&
          this.my <= this.positionY + 5) ||
        // bottom boudary
        (this.mx >= this.positionX &&
          this.mx <= this.positionX + this.width &&
          this.my >= this.positionY + this.height - 5 &&
          this.my <= this.positionY + this.height + 5) ||
        // left boundary
        (this.mx >= this.positionX - 5 &&
          this.mx <= this.positionX + 5 &&
          this.my >= this.positionY - 5 &&
          this.my <= this.positionY + this.height + 5) ||
        // right boundary
        (this.mx >= this.positionX + this.width - 5 &&
          this.mx <= this.positionX + this.width + 5 &&
          this.my >= this.positionY - 5 &&
          this.my <= this.positionY + this.height + 5)
      ) {
        this.isDetected = true;
        selectedShapeObject = this;
        selectionBox.setBoxShape(
          this.positionX,
          this.positionY,
          this.width,
          this.height
        );
        selectionBox.draw(ctx);
      }
    });

    canvas.addEventListener("mouseup", (event) => {
      this.isDetected = false;
    });
  }

  /**
   * draw rectangle
   * @param {CanvasContext} ctx canvas context to draw shape
   */
  draw(ctx) {
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.rect(this.positionX, this.positionY, this.width, this.height);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // ctx.save();
  }
}
