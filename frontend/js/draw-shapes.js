const initializeObjectReferenceList = () => {
  // objectReferenceList = [];
  shapeList.forEach((shape) => {
    switch (shape["name"]) {
      case "rectangle":
        const rect = new Rectangle(
          shape["_id"],
          shape["name"],
          shape["positionX"],
          shape["positionY"],
          shape["width"],
          shape["height"],
          shape["lineWidth"],
          shape["fillStyle"],
          shape["strokeStyle"]
        );
        objectReferenceList.push(rect);
        break;

      case "diamond":
        const diamond = new Diamond(
          shape["_id"],
          shape["name"],
          shape["centerX"],
          shape["centerY"],
          shape["width"],
          shape["height"],
          shape["lineWidth"],
          shape["fillStyle"],
          shape["strokeStyle"]
        );
        objectReferenceList.push(diamond);
        break;

      case "ellipse":
        const ellipse = new Ellipse(
          shape["_id"],
          shape["name"],
          shape["centerX"],
          shape["centerY"],
          shape["radiusX"],
          shape["radiusY"],
          shape["rotation"],
          shape["startAngle"],
          shape["endAngle"],
          shape["counterClockWise"],
          shape["lineWidth"],
          shape["fillStyle"],
          shape["strokeStyle"]
        );
        objectReferenceList.push(ellipse);
        break;

      case "arrow":
        const arrow = new Arrow(
          shape["_id"],
          shape["name"],
          shape["positionX"],
          shape["positionY"],
          shape["arrowLength"],
          shape["height"],
          shape["lineWidth"],
          shape["fillStyle"],
          shape["strokeStyle"]
        );
        objectReferenceList.push(arrow);
        break;

      case "line":
        const line = new Line(
          shape["_id"],
          shape["name"],
          shape["startPositionX"],
          shape["startPositionY"],
          shape["endPositionX"],
          shape["endPositionY"],
          shape["lineWidth"],
          shape["lineCap"],
          shape["strokeStyle"]
        );
        objectReferenceList.push(line);
        break;

      case "text":
        const text = new TextValue(
          shape["_id"],
          shape["name"],
          shape["textValue"],
          shape["positionX"],
          shape["positionY"],
          shape["fontSize"],
          shape["fontFamily"],
          shape["fillStyle"]
        );
        objectReferenceList.push(text);
        break;

      default:
        console.log("invalid shapes");
    }
  });
};
const updateObjectReferenceList = (shape) => {
  switch (shape["name"]) {
    case "rectangle":
      const rect = new Rectangle(
        shape["_id"],
        shape["name"],
        shape["positionX"],
        shape["positionY"],
        shape["width"],
        shape["height"],
        shape["lineWidth"],
        shape["fillStyle"],
        shape["strokeStyle"]
      );
      objectReferenceList.push(rect);
      break;

    case "diamond":
      const diamond = new Diamond(
        shape["_id"],
        shape["name"],
        shape["centerX"],
        shape["centerY"],
        shape["width"],
        shape["height"],
        shape["lineWidth"],
        shape["fillStyle"],
        shape["strokeStyle"]
      );
      objectReferenceList.push(diamond);
      break;

    case "ellipse":
      const ellipse = new Ellipse(
        shape["_id"],
        shape["name"],
        shape["centerX"],
        shape["centerY"],
        shape["radiusX"],
        shape["radiusY"],
        shape["rotation"],
        shape["startAngle"],
        shape["endAngle"],
        shape["counterClockWise"],
        shape["lineWidth"],
        shape["fillStyle"],
        shape["strokeStyle"]
      );
      objectReferenceList.push(ellipse);
      break;

    case "arrow":
      const arrow = new Arrow(
        shape["_id"],
        shape["name"],
        shape["positionX"],
        shape["positionY"],
        shape["arrowLength"],
        shape["height"],
        shape["lineWidth"],
        shape["fillStyle"],
        shape["strokeStyle"]
      );
      objectReferenceList.push(arrow);
      break;

    case "line":
      const line = new Line(
        shape["_id"],
        shape["name"],
        shape["startPositionX"],
        shape["startPositionY"],
        shape["endPositionX"],
        shape["endPositionY"],
        shape["lineWidth"],
        shape["lineCap"],
        shape["strokeStyle"]
      );
      objectReferenceList.push(line);
      break;

    case "text":
      const text = new TextValue(
        shape["_id"],
        shape["name"],
        shape["textValue"],
        shape["positionX"],
        shape["positionY"],
        shape["fontSize"],
        shape["fontFamily"],
        shape["fillStyle"]
      );
      objectReferenceList.push(text);
      break;

    default:
      console.log("invalid shapes");
  }
};

const drawShapes = () => {
  objectReferenceList.forEach((object) => {
    // console.log(object);
    object.draw(ctx);
  });
  // console.log(objectReferenceList);
};
