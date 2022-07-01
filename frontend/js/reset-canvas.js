/**
 * reset workspace/canvas to the blank
 */
const resetCanvas = () => {
  objectReferenceList.forEach((shape) => {
    const url = `${URL_ROOT}/${shape["name"]}/${shape["_id"]}`;
    fetchDelete(url);
  });
  shapeList = [];
  selectedShapeObject = null;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  getAllShapes();
};

// reset canvas btn
const resetCanvasBtn = document.querySelector("#delete-workspace-icon");
resetCanvasBtn.addEventListener(
  "click",
  () => {
    resetCanvas();
  },
  false
);
