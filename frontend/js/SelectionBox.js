class SelectionBox {
  constructor() {
    this.positionX = 300;
    this.positionY = 300;
    this.width = 200;
    this.height = 200;
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
      this.mx = event.clientX;
      this.my = event.clientY;
      if (this.checkMainBox()) {
        this.isMainBox = true;
      }
      if (this.checkTopLeftBox()) {
        this.isTopLeftBox = true;
      } else if (this.checkTopMiddleBox()) {
        this.isTopMiddleBox = true;
      } else if (this.checkTopRightBox()) {
        this.isTopRightBox = true;
      } else if (this.checkMiddleLeftBox()) {
        this.isMiddleLeftBox = true;
      } else if (this.checkMiddleRightBox()) {
        this.isMiddleRightBox = true;
      } else if (this.checkBottomLeftBox()) {
        this.isBottomLeftBox = true;
      } else if (this.checkBottomMiddleBox()) {
        this.isBottomMiddleBox = true;
      } else if (this.checkBottomRightBox()) {
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
    });

    canvas.addEventListener("mousemove", (event) => {
      if (this.isMainBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        this.positionX += cmx - this.mx;
        this.positionY += cmy - this.my;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }
      if (this.isTopLeftBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        const diffmx = cmx - this.mx;
        const diffmy = cmy - this.my;
        this.positionX += diffmx;
        this.positionY += diffmy;
        this.width -= diffmx;
        this.height -= diffmy;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }

      if (this.isTopMiddleBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        const diffmx = cmx - this.mx;
        const diffmy = cmy - this.my;
        this.positionY += diffmy;
        this.height -= diffmy;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }

      if (this.isTopRightBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        const diffmx = cmx - this.mx;
        const diffmy = cmy - this.my;
        this.positionY += diffmy;
        this.width += diffmx;
        this.height -= diffmy;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }

      if (this.isMiddleLeftBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        const diffmx = cmx - this.mx;
        const diffmy = cmy - this.my;
        this.positionX += diffmx;
        this.width -= diffmx;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }

      if (this.isMiddleRightBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        const diffmx = cmx - this.mx;
        const diffmy = cmy - this.my;
        this.width += diffmx;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }

      if (this.isBottomLeftBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        const diffmx = cmx - this.mx;
        const diffmy = cmy - this.my;
        this.positionX += diffmx;
        this.width -= diffmx;
        this.height += diffmy;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }

      if (this.isBottomMiddleBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        const diffmx = cmx - this.mx;
        const diffmy = cmy - this.my;
        this.height += diffmy;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }

      if (this.isBottomRightBox) {
        const cmx = event.clientX;
        const cmy = event.clientY;
        const diffmx = cmx - this.mx;
        const diffmy = cmy - this.my;
        this.width += diffmx;
        this.height += diffmy;
        this.mx = cmx;
        this.my = cmy;
        clearCanvas();
        this.draw(ctx);
      }
    });
  }

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
      (this.mx >= this.positionX &&
        this.mx <= this.positionX + this.width &&
        this.my >= this.positionY &&
        this.my <= this.positionY + 5) ||
      // bottom boudary
      (this.mx >= this.positionX &&
        this.mx <= this.positionX + this.width &&
        this.my >= this.positionY + this.height - 5 &&
        this.my <= this.positionY + this.height) ||
      // left boundary
      (this.mx >= this.positionX &&
        this.mx <= this.positionX + 5 &&
        this.my >= this.positionY &&
        this.my <= this.positionY + this.height) ||
      // right boundary
      (this.mx >= this.positionX + this.width - 5 &&
        this.mx <= this.positionX + this.width &&
        this.my >= this.positionY - 5 &&
        this.my <= this.positionY + this.height)
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
      this.mx >= this.positionX - 10 &&
      this.mx <= this.positionX &&
      this.my >= this.positionY - 10 &&
      this.my <= this.positionY
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
      this.mx >= this.positionX + this.width / 2 - 5 &&
      this.mx <= this.positionX + this.width / 2 + 5 &&
      this.my >= this.positionY - 10 &&
      this.my <= this.positionY
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
      this.mx >= this.positionX + this.width &&
      this.mx <= this.positionX + this.width + 10 &&
      this.my >= this.positionY - 10 &&
      this.my <= this.positionY
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
      this.mx >= this.positionX - 10 &&
      this.mx <= this.positionX &&
      this.my >= this.positionY + (this.height / 2 - 5) &&
      this.my <= this.positionY + this.height / 2 + 5
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
      this.mx >= this.positionX + this.width &&
      this.mx <= this.positionX + this.width + 10 &&
      this.my >= this.positionY + this.height / 2 - 5 &&
      this.my <= this.positionY + this.height / 2 + 5
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
      this.mx >= this.positionX - 10 &&
      this.mx <= this.positionX &&
      this.my >= this.positionY + this.height &&
      this.my <= this.positionY + this.height + 10
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
      this.mx >= this.positionX + this.width / 2 - 5 &&
      this.mx <= this.positionX + this.width / 2 + 5 &&
      this.my >= this.positionY + this.height &&
      this.my <= this.positionY + this.height + 10
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
      this.mx >= this.positionX + this.width &&
      this.mx <= this.positionX + this.width + 10 &&
      this.my >= this.positionY + this.height &&
      this.my <= this.positionY + this.height + 10
    ) {
      return true;
    } else {
      return false;
    }
  }
}
