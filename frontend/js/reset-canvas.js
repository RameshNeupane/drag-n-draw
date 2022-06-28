const resetCanvas = () => {
  shapeList.forEach(async (shape) => {
    const url = `${URL_ROOT}/${shape["name"]}/${shape["_id"]}`;
    await fetchDelete(url);
  });
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
};

const resetCanvasBtn = document.querySelector("#delete-workspace-icon");
resetCanvasBtn.addEventListener("click", resetCanvas, false);
