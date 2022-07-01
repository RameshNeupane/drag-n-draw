/**
 * CLASS LINE
 */
class Line {
  constructor(
    _id,
    name = LINE_NAME,
    startPositionX = LINE_START_POSITION_X,
    startPositionY = LINE_START_POSITION_Y,
    endPositionX = LINE_END_POSITION_X,
    endPositionY = LINE_END_POSITION_Y,
    lineWidth = LINE_WIDTH,
    lineCap = LINE_CAP,
    strokeStyle = LINE_STROKE_STYLE
  ) {
    this._id = _id;
    this.name = name;
    this.startPositionX = startPositionX;
    this.startPositionY = startPositionY;
    this.endPositionX = endPositionX;
    this.endPositionY = endPositionY;
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.strokeStyle = strokeStyle;
    this.isDetected = false;

    // canvas.addEventListener("mousedown", (event) => {
    //   this.initialMousePositionX = event.clientX;
    //   this.initialMousePositionY = event.clientY;
    //   if (
    //     this.initialMousePositionX >= this.startPositionX &&
    //     this.initialMousePositionX <= this.endPositionX + this.lineWidth &&
    //     this.initialMousePositionY >= this.startPositionY &&
    //     this.initialMousePositionY <= this.endPositionX + this.lineWidth
    //   ) {
    //     this.isDetected = true;
    //     selectedShapeObject = this;
    //     selectionBox.setBoxShape(
    //       this.startPositionX,
    //       this.startPositionY,
    //       this.endPositionX - this.startPositionX,
    //       this.lineWidth
    //     );
    //     selectionBox.draw(ctx);
    //   }
    // });

    // canvas.addEventListener("mouseup", (event) => {
    //   this.isDetected = false;
    // });
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = this.lineCap;
    ctx.strokeStyle = this.strokeStyle;
    ctx.moveTo(this.startPositionX, this.startPositionY);
    ctx.lineTo(this.endPositionX, this.endPositionY);
    ctx.closePath();
    ctx.stroke();
    ctx.save();
  }
}
