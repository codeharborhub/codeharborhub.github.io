import React, { useEffect, useRef } from "react";

const CanvasExample = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 150, 80);
  }, []);

  return (
    <div>
      <h1>Canvas Example</h1>
      <canvas
        ref={canvasRef}
        width="200"
        height="100"
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
};

export default CanvasExample;
