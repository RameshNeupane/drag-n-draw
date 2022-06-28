/**
 *  CLASS ELLIPSE/CIRCLE
 */
class Ellipse {
  constructor(
    name = ELLIPSE_NAME,
    centerX = ELLIPSE_CENTER_X,
    centerY = ELLIPSE_CENTER_Y,
    radiusX = ELLIPSE_RADIUS_X,
    radiusY = ELLIPSE_RADIUS_Y,
    rotation = ELLIPSE_ROTATION,
    startAngle = ELLIPSE_START_ANGLE,
    endAngle = ELLIPSE_END_ANGLE,
    coutnerClockWise = ELLIPSE_COUNTER_CLOCK_WISE,
    lineWidth = ELLIPSE_LINE_WIDTH,
    fillStyle = ELLIPSE_FILL_STYLE,
    strokeStyle = ELLIPSE_STROKE_STYLE
  ) {
    this.name = name;
    this.centerX = centerX;
    this.centerY = centerY;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.rotation = rotation;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.coutnerClockWise = coutnerClockWise;
    this.lineWidth = lineWidth;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.ellipse(
      this.centerX,
      this.centerY,
      this.radiusX,
      this.radiusY,
      this.rotation,
      this.startAngle,
      this.endAngle,
      this.coutnerClockWise
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.save();
  }
}
