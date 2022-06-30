class SelectionBox {
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
    this.width = 0;
    this.height = 0;
    this.isMouseDown = false;
    this.isMainBox = false;
    this.isTopLeftBox = false;
    this.isTopMiddleBox = false;
    this.isTopRightBox = false;
    this.isMiddleLeftBox = false;
    this.isMiddleRightBox = false;
    this.isBottomLeftBox = false;
    this.isBottomMiddleBox = false;
    this.isBottomRightBox = false;

    canvas.addEventListener("mousedown", (event) => {
      this.initialMousePositionX = event.clientX;
      this.initialMousePositionY = event.clientY;

      // check main selection box boundary is clicked
      if (this.checkMainBox()) {
        this.isMainBox = true;
      }

      // check if top left corner box is clicked
      if (this.checkTopLeftBox()) {
        this.isTopLeftBox = true;
      }
      // check if top middle box is clicked
      else if (this.checkTopMiddleBox()) {
        this.isTopMiddleBox = true;
      }
      // check if top right corner box is clicked
      else if (this.checkTopRightBox()) {
        this.isTopRightBox = true;
      }
      // check if middle left box is clicked
      else if (this.checkMiddleLeftBox()) {
        this.isMiddleLeftBox = true;
      }
      // check if middle right box is clicked
      else if (this.checkMiddleRightBox()) {
        this.isMiddleRightBox = true;
      }
      // check if bottom left corner box is clicked
      else if (this.checkBottomLeftBox()) {
        this.isBottomLeftBox = true;
      }
      // check if bottom middle box is clicked
      else if (this.checkBottomMiddleBox()) {
        this.isBottomMiddleBox = true;
      }
      // check if bottom right corner box is clicked
      else if (this.checkBottomRightBox()) {
        this.isBottomRightBox = true;
      }
    });

    canvas.addEventListener("mouseup", (event) => {
      this.isMouseDown = false;
      this.isMainBox = false;
      this.isTopLeftBox = false;
      this.isTopMiddleBox = false;
      this.isTopRightBox = false;
      this.isMiddleLeftBox = false;
      this.isMiddleRightBox = false;
      this.isBottomLeftBox = false;
      this.isBottomMiddleBox = false;
      this.isBottomRightBox = false;
      // shapeList = [...objectReferenceList];
      // console.log(objectReferenceList);
      // console.log(shapeList);
    });

    canvas.addEventListener("mousemove", (event) => {
      const currentMousePositionX = event.clientX;
      const currentMousePositionY = event.clientY;
      const diffMousePositionX =
        currentMousePositionX - this.initialMousePositionX;
      const diffMousePositionY =
        currentMousePositionY - this.initialMousePositionY;

      // move the selected shape according to the movement of selection box
      if (this.isMainBox) {
        this.positionX += diffMousePositionX;
        this.positionY += diffMousePositionY;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        // update rectangle if the selected shape is rectangle
        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["positionX"] = this.positionX;
          selectedShapeObject["positionY"] = this.positionY;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerX"] = this.positionX + this.width / 2;
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }
      if (this.isTopLeftBox) {
        this.positionX += diffMousePositionX;
        this.positionY += diffMousePositionY;
        this.width -= diffMousePositionX;
        this.height -= diffMousePositionY;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["positionX"] = this.positionX;
          selectedShapeObject["positionY"] = this.positionY;
          selectedShapeObject["width"] = this.width;
          selectedShapeObject["height"] = this.height;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerX"] = this.positionX + this.width / 2;
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
          selectedShapeObject["width"] = this.width / 2;
          selectedShapeObject["height"] = this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }

      if (this.isTopMiddleBox) {
        this.positionY += diffMousePositionY;
        this.height -= diffMousePositionY;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["positionY"] = this.positionY;
          selectedShapeObject["height"] = this.height;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
          selectedShapeObject["height"] = this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }

      if (this.isTopRightBox) {
        this.positionY += diffMousePositionY;
        this.width += diffMousePositionX;
        this.height -= diffMousePositionY;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["positionY"] = this.positionY;
          selectedShapeObject["width"] = this.width;
          selectedShapeObject["height"] = this.height;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerX"] = this.positionX + this.width / 2;
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
          selectedShapeObject["width"] = this.width / 2;
          selectedShapeObject["height"] = this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }

      if (this.isMiddleLeftBox) {
        this.positionX += diffMousePositionX;
        this.width -= diffMousePositionX;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["positionX"] = this.positionX;
          selectedShapeObject["width"] = this.width;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerX"] = this.positionX + this.width / 2;
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
          selectedShapeObject["width"] = this.width / 2;
          selectedShapeObject["height"] = this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }

      if (this.isMiddleRightBox) {
        this.width += diffMousePositionX;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["width"] = this.width;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerX"] = this.positionX + this.width / 2;
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
          selectedShapeObject["width"] = this.width / 2;
          selectedShapeObject["height"] = this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }

      if (this.isBottomLeftBox) {
        this.positionX += diffMousePositionX;
        this.width -= diffMousePositionX;
        this.height += diffMousePositionY;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["positionX"] = this.positionX;
          selectedShapeObject["width"] = this.width;
          selectedShapeObject["height"] = this.height;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerX"] = this.positionX + this.width / 2;
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
          selectedShapeObject["width"] = this.width / 2;
          selectedShapeObject["height"] = this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }

      if (this.isBottomMiddleBox) {
        this.height += diffMousePositionY;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["height"] = this.height;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerX"] = this.positionX + this.width / 2;
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
          selectedShapeObject["width"] = this.width / 2;
          selectedShapeObject["height"] = this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }

      if (this.isBottomRightBox) {
        this.width += diffMousePositionX;
        this.height += diffMousePositionY;
        this.initialMousePositionX = currentMousePositionX;
        this.initialMousePositionY = currentMousePositionY;

        if (selectedShapeObject["name"] === RECTANGLE_NAME) {
          selectedShapeObject["width"] = this.width;
          selectedShapeObject["height"] = this.height;
        }

        if (selectedShapeObject["name"] === DIAMOND_NAME) {
          selectedShapeObject["centerX"] = this.positionX + this.width / 2;
          selectedShapeObject["centerY"] = this.positionY + this.height / 2;
          selectedShapeObject["width"] = this.width / 2;
          selectedShapeObject["height"] = this.height / 2;
        }
        clearCanvas();
        this.draw(ctx);
        // selectedShapeObject.draw(ctx);
        drawShapes();
      }
    });
  }

  /**
   * set the shape size of selection box accroding to the selected shape
   * @param {Number} positionX x coordinate of selection box
   * @param {Number} positionY y coordinate of selection box
   * @param {Number} width width of selection box
   * @param {Number} height height of selection box
   */
  setBoxShape(positionX, positionY, width, height) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
  }

  /**
   * draw selection box
   * @param {CanvasContext} ctx stores canvas context
   */
  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.rect(this.positionX, this.positionY, this.width, this.height);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.rect(this.positionX - 10, this.positionY - 10, 10, 10); // top left corner box
    ctx.rect(this.positionX + this.width / 2 - 5, this.positionY - 10, 10, 10); // top middle box
    ctx.rect(this.positionX + this.width, this.positionY - 10, 10, 10); // top right corner box
    ctx.rect(this.positionX - 10, this.positionY + this.height / 2 - 5, 10, 10); // middle left box
    // middle right box
    ctx.rect(
      this.positionX + this.width,
      this.positionY + this.height / 2 - 5,
      10,
      10
    );
    ctx.rect(this.positionX - 10, this.positionY + this.height, 10, 10); // bottom left corner box
    // bottom middle box
    ctx.rect(
      this.positionX + this.width / 2 - 5,
      this.positionY + this.height,
      10,
      10
    );
    // bottom right corner box
    ctx.rect(this.positionX + this.width, this.positionY + this.height, 10, 10);
    ctx.stroke();
  }

  checkMainBox() {
    if (
      // top boundary
      (this.initialMousePositionX >= this.positionX &&
        this.initialMousePositionX <= this.positionX + this.width &&
        this.initialMousePositionY >= this.positionY &&
        this.initialMousePositionY <= this.positionY + 5) ||
      // bottom boudary
      (this.initialMousePositionX >= this.positionX &&
        this.initialMousePositionX <= this.positionX + this.width &&
        this.initialMousePositionY >= this.positionY + this.height - 5 &&
        this.initialMousePositionY <= this.positionY + this.height) ||
      // left boundary
      (this.initialMousePositionX >= this.positionX &&
        this.initialMousePositionX <= this.positionX + 5 &&
        this.initialMousePositionY >= this.positionY &&
        this.initialMousePositionY <= this.positionY + this.height) ||
      // right boundary
      (this.initialMousePositionX >= this.positionX + this.width - 5 &&
        this.initialMousePositionX <= this.positionX + this.width &&
        this.initialMousePositionY >= this.positionY - 5 &&
        this.initialMousePositionY <= this.positionY + this.height)
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check if the clicked box is top left box
   * @returns Boolean
   */
  checkTopLeftBox() {
    if (
      this.initialMousePositionX >= this.positionX - 10 &&
      this.initialMousePositionX <= this.positionX &&
      this.initialMousePositionY >= this.positionY - 10 &&
      this.initialMousePositionY <= this.positionY
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check if the clicked box is top middle box
   * @returns Boolean
   */
  checkTopMiddleBox() {
    if (
      this.initialMousePositionX >= this.positionX + this.width / 2 - 5 &&
      this.initialMousePositionX <= this.positionX + this.width / 2 + 5 &&
      this.initialMousePositionY >= this.positionY - 10 &&
      this.initialMousePositionY <= this.positionY
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check if the clicked box is top right box
   * @returns Boolean
   */
  checkTopRightBox() {
    if (
      this.initialMousePositionX >= this.positionX + this.width &&
      this.initialMousePositionX <= this.positionX + this.width + 10 &&
      this.initialMousePositionY >= this.positionY - 10 &&
      this.initialMousePositionY <= this.positionY
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check if the clicked box is middle left box
   * @returns Boolean
   */
  checkMiddleLeftBox() {
    if (
      this.initialMousePositionX >= this.positionX - 10 &&
      this.initialMousePositionX <= this.positionX &&
      this.initialMousePositionY >= this.positionY + (this.height / 2 - 5) &&
      this.initialMousePositionY <= this.positionY + this.height / 2 + 5
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check if the clicked box is middle left box
   * @returns Boolean
   */
  checkMiddleRightBox() {
    if (
      this.initialMousePositionX >= this.positionX + this.width &&
      this.initialMousePositionX <= this.positionX + this.width + 10 &&
      this.initialMousePositionY >= this.positionY + this.height / 2 - 5 &&
      this.initialMousePositionY <= this.positionY + this.height / 2 + 5
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check if the clicked box is bottom left box
   * @returns Boolean
   */
  checkBottomLeftBox() {
    if (
      this.initialMousePositionX >= this.positionX - 10 &&
      this.initialMousePositionX <= this.positionX &&
      this.initialMousePositionY >= this.positionY + this.height &&
      this.initialMousePositionY <= this.positionY + this.height + 10
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check if the clicked box is bottom middle box
   * @returns Boolean
   */
  checkBottomMiddleBox() {
    if (
      this.initialMousePositionX >= this.positionX + this.width / 2 - 5 &&
      this.initialMousePositionX <= this.positionX + this.width / 2 + 5 &&
      this.initialMousePositionY >= this.positionY + this.height &&
      this.initialMousePositionY <= this.positionY + this.height + 10
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * check if the clicked box is bottom right box
   * @returns Boolean
   */
  checkBottomRightBox() {
    if (
      this.initialMousePositionX >= this.positionX + this.width &&
      this.initialMousePositionX <= this.positionX + this.width + 10 &&
      this.initialMousePositionY >= this.positionY + this.height &&
      this.initialMousePositionY <= this.positionY + this.height + 10
    ) {
      return true;
    } else {
      return false;
    }
  }
}
