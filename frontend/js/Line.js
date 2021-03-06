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
  }

  /**
   * draw line
   * @param {CanvasContext} ctx canvas context to draw shape
   */
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
