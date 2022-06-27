class Rectangle {
  constructor(x, y, w, h, lw, fs, ss) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.lw = lw;
    this.fs = fs;
    this.ss = ss;
    this.toMove = false;
    this.mx = 0;
    this.my = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fs;
    ctx.strokeStyle = this.ss;
    ctx.rect(this.x, this.y, this.w, this.h);
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
