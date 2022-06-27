const getAllShapes = async () => {
  const [
    rectangleResponse,
    diamondResponse,
    ellipseResponse,
    arrowResponse,
    lineResponse,
    textResponse,
  ] = await Promise.all([
    fetch("http://localhost:3000/rectangle"),
    fetch("http://localhost:3000/diamond"),
    fetch("http://localhost:3000/ellipse"),
    fetch("http://localhost:3000/arrow"),
    fetch("http://localhost:3000/line"),
    fetch("http://localhost:3000/text"),
  ]);

  const rectangleJSON = await rectangleResponse.json();
  const diamondJSON = await diamondResponse.json();
  const ellipseJSON = await ellipseResponse.json();
  const arrowJSON = await arrowResponse.json();
  const lineJSON = await lineResponse.json();
  const textJSON = await textResponse.json();
  // const shapes = await response.json();
  shapeList = [
    ...rectangleJSON,
    ...diamondJSON,
    ...ellipseJSON,
    ...arrowJSON,
    ...lineJSON,
    ...textJSON,
  ];
  console.log(shapeList);
  shapeList.forEach((shape) => {
    switch (shape["shape"]) {
      case "rectangle":
        const rect = new Rectangle(
          shape["positionX"],
          shape["positionY"],
          shape["width"],
          shape["height"],
          shape["lineWidth"],
          shape["fillStyle"],
          shape["strokeStyle"]
        );
        rect.draw(ctx);
        break;

      case "diamond":
        console.log("diamond");
        const d = new Diamond(
          shape["shape"],
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
          shape["shape"],
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
          shape["shape"],
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
          shape["shape"],
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
          shape["shape"],
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
    //   console.log(shape["shape"]);
    //   if (shape["shape"] === "rectangle") {
    //     const rect = new Rectangle(
    //       shape["positionX"],
    //       shape["positionY"],
    //       shape["width"],
    //       shape["height"],
    //       shape["lineWidth"],
    //       shape["fillStyle"],
    //       shape["strokeStyle"]
    //     );
    //     rect.draw(ctx);
    //   }
  });
};

getAllShapes();

const diamondbtn = document.querySelector("#diamond-icon");
diamondbtn.addEventListener("click", () => {
  const d = new Diamond();
  d.draw(ctx);
});

const arrowBtn = document.querySelector("#arrow-icon");
arrowBtn.addEventListener("click", () => {
  const a = new Arrow();
  a.draw(ctx);
});

const lineBtn = document.querySelector("#line-icon");
lineBtn.addEventListener("click", () => {
  const line = new Line();
  line.draw(ctx);
});
