const strokeStyle = document.querySelector("#stroke");

strokeStyle.addEventListener("input", (event) => {
  if (selectedShapeObject["name"] !== TEXT_NAME) {
    selectedShapeObject["strokeStyle"] = strokeStyle.value;
    clearCanvas();
    selectionBox.draw(ctx);
    drawShapes();
  }
});

const backgroundColor = document.querySelector("#background");

backgroundColor.addEventListener("input", (event) => {
  selectedShapeObject["fillStyle"] = backgroundColor.value;
  clearCanvas();
  selectionBox.draw(ctx);
  drawShapes();
});

const strokeWidth = document.querySelector("#stroke-width");
strokeWidth.addEventListener("input", (event) => {
  if (selectedShapeObject["name"] !== TEXT_NAME) {
    selectedShapeObject["lineWidth"] = strokeWidth.valueAsNumber;
    clearCanvas();
    selectionBox.draw(ctx);
    drawShapes();
  }
});
