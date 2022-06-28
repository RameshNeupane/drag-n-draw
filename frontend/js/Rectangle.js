class Rectangle {
  constructor(
    name = RECTANGLE_NAME,
    positionX = RECTANGLE_POSITION_X,
    positionY = RECTANGLE_POSITION_Y,
    width = RECTANGLE_WIDTH,
    height = RECTANGLE_HEIGHT,
    lineWidth = RECTANGLE_LINE_WIDTH,
    fillStyle = RECTANGLE_FILL_STYLE,
    strokeStyle = RECTANGLE_STROKE_STYLE
  ) {
    this.name = name;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.lineWidth = lineWidth;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.toMove = false;
    this.mx = 0;
    this.my = 0;
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
    ctx.save();
  }

  click(event) {
    this.mx = event.clientX;
    this.my = event.clientY;
    if (
      (this.mx >= this.x &&
        this.mx <= this.x + this.w &&
        this.my >= this.y &&
        this.my <= this.y + 2) || // check top boundary
      (this.mx >= this.x &&
        this.mx <= this.x + this.w &&
        this.my === this.y + this.h) || // check bottom boundary
      (this.mx === this.x && this.my >= this.y && this.my <= this.y + this.h) || // check left boundary
      (this.mx === this.x + this.w &&
        this.my >= this.y &&
        this.my <= this.y + this.h) // check right boundary
    ) {
      this.toMove = true;
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
