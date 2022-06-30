const rectangleBtn = document.querySelector("#square-icon");
rectangleBtn.addEventListener("click", async () => {
  const data = {
    name: RECTANGLE_NAME,
    positionX: RECTANGLE_POSITION_X,
    positionY: RECTANGLE_POSITION_Y,
    width: RECTANGLE_WIDTH,
    height: RECTANGLE_HEIGHT,
    lineWidth: RECTANGLE_LINE_WIDTH,
    fillStyle: RECTANGLE_FILL_STYLE,
    strokeStyle: RECTANGLE_STROKE_STYLE,
  };
  fetchPost(URL_RECTANGLE, data);
  // objectReferenceList.push(new Rectangle())
});

const diamondBtn = document.querySelector("#diamond-icon");
diamondBtn.addEventListener("click", async () => {
  const data = {
    name: DIAMOND_NAME,
    centerX: DIAMOND_CENTER_X,
    centerY: DIAMOND_CENTER_Y,
    width: DIAMOND_WIDTH,
    height: DIAMOND_HEIGHT,
    lineWidth: DIAMOND_LINE_WIDTH,
    fillStyle: DIAMOND_FILL_STYLE,
    strokeStyle: DIAMOND_STROKE_STYLE,
  };
  fetchPost(URL_DIAMOND, data);
});

const ellipseBtn = document.querySelector("#circle-icon");
ellipseBtn.addEventListener("click", async () => {
  const data = {
    name: ELLIPSE_NAME,
    centerX: ELLIPSE_CENTER_X,
    centerY: ELLIPSE_CENTER_Y,
    radiusX: ELLIPSE_RADIUS_X,
    radiusY: ELLIPSE_RADIUS_Y,
    rotation: ELLIPSE_ROTATION,
    startAngle: ELLIPSE_START_ANGLE,
    endAngle: ELLIPSE_END_ANGLE,
    coutnerClockWise: ELLIPSE_COUNTER_CLOCK_WISE,
    lineWidth: ELLIPSE_LINE_WIDTH,
    fillStyle: ELLIPSE_FILL_STYLE,
    strokeStyle: ELLIPSE_STROKE_STYLE,
  };
  fetchPost(URL_ELLIPSE, data);
});

const arrowBtn = document.querySelector("#arrow-icon");
arrowBtn.addEventListener("click", async () => {
  const data = {
    name: ARROW_NAME,
    positionX: ARROW_POSITION_X,
    positionY: ARROW_POSITION_Y,
    arrowLength: ARROW_LENGTH,
    height: ARROW_HEIGHT,
    lineWidth: ARROW_LINE_WIDTH,
    fillStyle: ARROW_FILL_STYLE,
    strokeStyle: ARROW_STROKE_STYLE,
  };
  fetchPost(URL_ARROW, data);
});

const lineBtn = document.querySelector("#line-icon");
lineBtn.addEventListener("click", async () => {
  const data = {
    name: LINE_NAME,
    startPositionX: LINE_START_POSITION_X,
    startPositionY: LINE_START_POSITION_Y,
    endPositionX: LINE_END_POSITION_X,
    endPositionY: LINE_END_POSITION_Y,
    lineWidth: LINE_WIDTH,
    lineCap: LINE_CAP,
    strokeStyle: LINE_STROKE_STYLE,
  };
  fetchPost(URL_LINE, data);
});

const textBtn = document.querySelector("#text-icon");
textBtn.addEventListener("click", async () => {
  data = {
    name: TEXT_NAME,
    textValue: TEXT_VALUE,
    positionX: TEXT_POSITION_X,
    positionY: TEXT_POSITION_Y,
    font: TEXT_FONT,
    fillStyle: TEXT_FILL_STYLE,
  };
  await fetchPost(URL_TEXT, data);
});

// selection btn
const selectionBtn = document.querySelector("#selection-icon");
selectionBtn.addEventListener("click", () => {
  const s = new SelectionBox();
  s.draw(ctx);
});
