import { UseOnDraw } from "./Hooks";

const canvas = ({ width, height }) => {
  const setCanvasRef = UseOnDraw(onDraw);
  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, "000000", 5);
  }

  function drawLine(start, end, ctx, color, width) {
    start = start ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <canvas
      className="drawpad"
      height={height}
      width={width}
      style={canvasStyle}
      ref={setCanvasRef}
    />
  );
};

export default canvas;

const canvasStyle = {
  backgroundColor: "whitesmoke",
  borderRadius: "10px",
  boxShadow: "11px 11px 100px #20968a,-11px -11px 100px #22a296",
};
