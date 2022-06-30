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
        console.log("rectangle");
        this.isDetected = true;
        selectionBox.setBoxShape(
          this.positionX,
          this.positionY,
          this.width,
          this.height
        );
        selectionBox.draw(ctx);
        selectedShapeObject = this;
        console.log(selectedShapeObject.name);
        // this.isMouseDown = true;
        // console.log(this.isMouseDown);
      }
    });

    canvas.addEventListener("mouseup", (event) => {
      this.isDetected = false;
    });

    canvas.addEventListener("mousemove", (event) => {
      if (this.isMouseDown) {
        console.log("move");
        const cmx = event.clientX;
        const cmy = event.clientY;
        this.positionX += cmx - this.mx;
        this.positionY += cmy - this.my;
        console.log("mx", this.mx, "my", this.my);
        this.mx = cmx;
        this.my = cmy;
        console.log("cmx", cmx, "cmy", cmy);
        clearCanvas();
        this.draw(ctx);
      }
    });
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.rect(this.positionX, this.positionY, this.width, this.height);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // ctx.save();
  }

  click(event) {
    this.mx = event.clientX;
    this.my = event.clientY;
    if (
      // check top boundary
      (this.mx >= this.x &&
        this.mx <= this.x + this.w &&
        this.my === this.y + this.h) || // check bottom boundary
      (this.mx === this.x && this.my >= this.y && this.my <= this.y + this.h) || // check left boundary
      (this.mx === this.x + this.w &&
        this.my >= this.y &&
        this.my <= this.y + this.h) // check right boundary
    ) {
      this.toMove = true;
      console.log("clicked");
    }
  }

  stopMove() {
    this.toMove = false;
    console.log(this.toMove);
  }

  updateShapePosition(event) {
    if (this.toMove) {
      const cmx = event.clientX;
      const cmy = event.clientY;
      this.x += cmx - this.mx;
      this.y += cmy - this.my;
      console.log("mx", this.mx, "my", this.my);
      this.mx = cmx;
      this.my = cmy;
      console.log("cmx", cmx, "cmy", cmy);
    }
  }
}
