const drawShapes = () => {
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
        rect.draw(ctx);
        break;

      case "diamond":
        const d = new Diamond(
          shape["name"],
          shape["centerX"],
          shape["centerY"],
          shape["width"],
          shape["height"],
          shape["lineWidth"],
          shape["fillStyle"],
          shape["strokeStyle"]
        );
        d.draw(ctx);
        break;

      case "ellipse":
        const ellipse = new Ellipse(
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
        ellipse.draw(ctx);
        break;

      case "arrow":
        const arrow = new Arrow(
          shape["name"],
          shape["positionX"],
          shape["positionY"],
          shape["arrowLength"],
          shape["height"],
          shape["lineWidth"],
          shape["fillStyle"],
          shape["strokeStyle"]
        );
        arrow.draw(ctx);
        break;

      case "line":
        const line = new Line(
          shape["name"],
          shape["startPositionX"],
          shape["startPositionY"],
          shape["endPositionX"],
          shape["endPositionY"],
          shape["lineWidth"],
          shape["lineCap"],
          shape["strokeStyle"]
        );
        line.draw(ctx);
        break;

      case "text":
        const text = new TextValue(
          shape["name"],
          shape["textValue"],
          shape["positionX"],
          shape["positionY"],
          shape["font"],
          shape["fillStyle"]
        );
        text.draw(ctx);
        break;

      default:
        console.log("invalid shapes");
    }
  });
  console.log(objectReferenceList);
};
