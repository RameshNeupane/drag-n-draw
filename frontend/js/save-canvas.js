const saveCanvas = () => {
  if (objectReferenceList.length) {
    objectReferenceList.forEach(async (shape) => {
      const url = `${URL_ROOT}/${shape["name"]}/${shape["_id"]}`;
      console.log(url);
      const data = {
        name: shape["name"],
        positionX: shape["positionX"],
        positionY: shape["positionY"],
        width: shape["width"],
        height: shape["height"],
        lineWidth: shape["lineWidth"],
        fillStyle: shape["fillStyle"],
        strokeStyle: shape["strokeStyle"],
      };
      await fetchPatch(url, data);
      console.log(shape);
    });
  }
};

const saveCanvasBtn = document.querySelector("#save-workspace-icon");
saveCanvasBtn.addEventListener("click", saveCanvas, false);
