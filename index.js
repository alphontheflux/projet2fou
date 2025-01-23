const canvasElement = document.querySelector("canvas");
const pointsArray = [];

let mouseDown = false;
let lineWidth = 2;
let lineColor = "black";
let cursorType = "pen";

canvasElement.addEventListener("mousedown", () => {
  mouseDown = true;
});

window.addEventListener("mouseup", () => {
  mouseDown = false;
  pointsArray.splice(0);
});

document.querySelector("#selector-pen").addEventListener("click", () => {
  cursorType = "pen";
});

document.querySelector("#selector-eraser").addEventListener("click", () => {
  cursorType = "eraser";
});

canvasElement.addEventListener("mousemove", (e) => {
  const x = (e.offsetX / canvasElement.offsetWidth) * canvasElement.width;
  const y = (e.offsetY / canvasElement.offsetHeight) * canvasElement.height;

  if (mouseDown) {
    pointsArray.push({ x, y });

    if (pointsArray.length === 2) {
      const ctx = canvasElement.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(pointsArray[0].x, pointsArray[0].y);
      ctx.lineCap = "round";
      if (cursorType === "pen") {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;
      } else if (cursorType === "eraser") {
        ctx.lineWidth = 75;
        ctx.strokeStyle = "white";
      }
      ctx.lineTo(pointsArray[1].x, pointsArray[1].y);
      ctx.stroke();
      pointsArray.splice(0, 1);
    }
  }
});
