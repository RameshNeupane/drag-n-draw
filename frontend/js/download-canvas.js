/**
 * downloads whole canvas as image/png format
 */
function downloadCanvas() {
  let downloadTarget = canvas.toDataURL("image/png");
  /* Change MIME type to trick the browser to downlaod the file instead of displaying it */
  dt = downloadTarget.replace(
    /^data:image\/[^;]*/,
    "data:application/octet-stream"
  );

  /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
  downloadTarget = downloadTarget.replace(
    /^data:application\/octet-stream/,
    "data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=canvas.png"
  );

  this.href = downloadTarget;
}

// downloadCanvas() method is excuted when download-canvas element is clicked
document
  .getElementById("download-canvas")
  .addEventListener("click", downloadCanvas, false);
