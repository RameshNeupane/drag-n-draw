const getAllShapes = async () => {
  const [
    rectangleResponse,
    diamondResponse,
    ellipseResponse,
    arrowResponse,
    lineResponse,
    textResponse,
  ] = await Promise.all([
    fetchGet(URL_RECTANGLE),
    fetchGet(URL_DIAMOND),
    fetchGet(URL_ELLIPSE),
    fetchGet(URL_ARROW),
    fetchGet(URL_LINE),
    fetchGet(URL_TEXT),
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
  drawShapes();
};
