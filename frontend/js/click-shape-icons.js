const rectangleBtn = document.querySelector("#square-icon");
rectangleBtn.addEventListener("click", async () => {
  const rect = new Rectangle();
  const data = {
    name: rect.name,
    positionX: rect.positionX,
    positionY: rect.positionY,
    width: rect.width,
    height: rect.height,
    lineWidth: rect.lineWidth,
    fillStyle: rect.fillStyle,
    strokeStyle: rect.strokeStyle,
  };
  fetchPost(URL_RECTANGLE, data);
});

const diamondBtn = document.querySelector("#diamond-icon");
diamondBtn.addEventListener("click", async () => {
  const diamond = new Diamond();
  const data = {
    name: diamond.name,
    centerX: diamond.centerX,
    centerY: diamond.centerY,
    width: diamond.width,
    height: diamond.height,
    lineWidth: diamond.lineWidth,
    fillStyle: diamond.fillStyle,
    strokeStyle: diamond.strokeStyle,
  };
  fetchPost(URL_DIAMOND, data);
});

const ellipseBtn = document.querySelector("#circle-icon");
ellipseBtn.addEventListener("click", async () => {
  const ellipse = new Ellipse();
  const data = {
    name: ellipse.name,
    centerX: ellipse.centerX,
    centerY: ellipse.centerY,
    radiusX: ellipse.radiusX,
    radiusY: ellipse.radiusY,
    rotation: ellipse.rotation,
    startAngle: ellipse.startAngle,
    endAngle: ellipse.endAngle,
    coutnerClockWise: ellipse.coutnerClockWise,
    lineWidth: ellipse.lineWidth,
    fillStyle: ellipse.fillStyle,
    strokeStyle: ellipse.strokeStyle,
  };
  fetchPost(URL_ELLIPSE, data);
});

const arrowBtn = document.querySelector("#arrow-icon");
arrowBtn.addEventListener("click", async () => {
  const arrow = new Arrow();
  const data = {
    name: arrow.name,
    positionX: arrow.positionX,
    positionY: arrow.positionY,
    arrowLength: arrow.arrowLength,
    height: arrow.height,
    lineWidth: arrow.lineWidth,
    fillStyle: arrow.fillStyle,
    strokeStyle: arrow.strokeStyle,
  };
  fetchPost(URL_ARROW, data);
});

const lineBtn = document.querySelector("#line-icon");
lineBtn.addEventListener("click", async () => {
  const line = new Line();
  const data = {
    name: line.name,
    startPositionX: line.startPositionX,
    startPositionY: line.startPositionY,
    endPositionX: line.endPositionX,
    endPositionY: line.endPositionY,
    lineWidth: line.lineWidth,
    lineCap: line.lineCap,
    strokeStyle: line.strokeStyle,
  };
  fetchPost(URL_LINE, data);
});

const textBtn = document.querySelector("#text-icon");
textBtn.addEventListener("click", async () => {
  const text = new TextValue();
  data = {
    name: text.name,
    textValue: text.textValue,
    positionX: text.positionX,
    positionY: text.positionY,
    font: text.font,
    fillStyle: text.fillStyle,
  };
  fetchPost(URL_TEXT, data);
});
