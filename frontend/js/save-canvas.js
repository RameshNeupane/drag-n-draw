const saveCanvas = () => {
  if (objectReferenceList.length) {
    objectReferenceList.forEach(async (shape) => {
      const url = `${URL_ROOT}/${shape["name"]}/${shape["_id"]}`;
      console.log(url);
      let data = {};
      switch (shape["name"]) {
        case "rectangle":
          data = {
            name: shape["name"],
            positionX: shape["positionX"],
            positionY: shape["positionY"],
            width: shape["width"],
            height: shape["height"],
            lineWidth: shape["lineWidth"],
            fillStyle: shape["fillStyle"],
            strokeStyle: shape["strokeStyle"],
          };
          break;

        case "diamond":
          data = {
            name: shape["name"],
            centerX: shape["centerX"],
            centerY: shape["centerY"],
            width: shape["width"],
            height: shape["height"],
            lineWidth: shape["lineWidth"],
            fillStyle: shape["fillStyle"],
            strokeStyle: shape["strokeStyle"],
          };
          break;

        case "ellipse":
          data = {
            name: shape["name"],
            centerX: shape["centerX"],
            centerY: shape["centerY"],
            radiusX: shape["radiusX"],
            radiusY: shape["radiusY"],
            rotation: shape["rotation"],
            startAngle: shape["startAngle"],
            endAngle: shape["endAngle"],
            counterClockWise: shape["counterClockWise"],
            lineWidth: shape["lineWidth"],
            fillStyle: shape["fillStyle"],
            strokeStyle: shape["strokeStyle"],
          };
          break;

        case "arrow":
          data = {
            name: shape["name"],
            positionX: shape["positionX"],
            positionY: shape["positionY"],
            arrowLength: shape["arrowLength"],
            height: shape["height"],
            lineWidth: shape["lineWidth"],
            fillStyle: shape["fillStyle"],
            strokeStyle: shape["strokeStyle"],
          };
          break;

        case "line":
          data = {
            name: shape["name"],
            startPositionX: shape["startPositionX"],
            startPositionY: shape["startPositionY"],
            endPositionX: shape["endPositionX"],
            endPositionY: shape["endPositionY"],
            lineWidth: shape["lineWidth"],
            lineCap: shape["lineCap"],
            strokeStyle: shape["strokeStyle"],
          };
          break;

        case "text":
          data = {
            name: shape["name"],
            textValue: shape["textValue"],
            positionX: shape["positionX"],
            positionY: shape["positionY"],
            font: shape["font"],
            fillStyle: shape["fillStyle"],
          };
          break;

        default:
          console.log("invalid shapes");
      }
      await fetchPatch(url, data);
      console.log(shape);
    });
  }
};

const saveCanvasBtn = document.querySelector("#save-workspace-icon");
saveCanvasBtn.addEventListener("click", saveCanvas, false);
