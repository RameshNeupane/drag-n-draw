/**
 *  CLASS ELLIPSE/CIRCLE
 */
class Ellipse {
  constructor(
    shape = "ellipse",
    centerX = 600,
    centerY = 300,
    radiusX = 20,
    radiusY = 50,
    rotation = 0,
    startAngle = 0,
    endAngle = 2 * Math.PI,
    coutnerClockWise = false,
    lineWidth = 2,
    fillStyle = "transparent",
    strokeStyle = "black"
  ) {
    (this.shape = shape), (this.centerX = centerX);
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
