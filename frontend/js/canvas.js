/**
 * @type {HTMLCanvasElement}
 * */
const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");

// canvas.addEventListener("mousemove", (event) => {
//   console.log(event.clientX, event.clientY);
// });

const clearCanvas = () => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
};
