/**
 * @type {HTMLCanvasElement}
 * */
const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log(canvas.width, canvas.height);
});

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.toMove = false;
    this.mx = 0;
    this.my = 0;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "transparent";
    ctx.strokeStyle = "black";
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

const rectArr = [];

const generateRect = () => {
  const rect = new Rectangle(canvas.width / 2 - 50, 150, 100, 100);
  rect.draw(ctx);
  rectArr.push(rect);
};

const btnRect = document.querySelector("#square-icon");
console.log(btnRect);
btnRect.addEventListener("click", () => {
  generateRect();
});

let isMouseDown = false;

canvas.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  rectArr.forEach((rec) => {
    rec.click(event);
  });
});

canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
  rectArr.forEach((rec) => {
    rec.stopMove();
  });
});
canvas.addEventListener("mousemove", (event) => {
  if (isMouseDown) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rectArr.forEach((rec) => {
      rec.updateShapePosition(event);
      rec.draw(ctx);
    });
  }
});

const selection = document.querySelector("#selection-icon");
console.log(selection);
