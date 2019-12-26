import * as React from "react";

import { DrawerContainer, DrawerCanvas } from "./styles";

const dpi = window.devicePixelRatio;

const drawLine = (originalMousePosition, newMousePosition, ref) => {
  const ctx = ref.getContext("2d");

  ctx.strokeStyle = "#2b50ef";
  ctx.lineJoin = "round";
  ctx.lineWidth = 12;

  ctx.beginPath();
  ctx.moveTo(originalMousePosition.x * 2, originalMousePosition.y * dpi);
  ctx.lineTo(newMousePosition.x * dpi, newMousePosition.y * dpi);
  ctx.closePath();

  ctx.stroke();
};

export const Drawer = () => {
  const canvasRef = React.useRef(null);

  const [isPainting, painting] = React.useState(false);
  const [coordinates, setCoordinates] = React.useState(null);

  React.useEffect(() => {
    const { current } = canvasRef;
    current.width = current.scrollWidth * dpi;
    current.height = current.scrollHeight * dpi;
  }, []);

  const startPainting = React.useCallback(e => {
    const coordinates = getCoordinates(e);
    if (coordinates) {
      painting(true);
      setCoordinates(coordinates);
    }
  }, []);

  React.useEffect(() => {
    const { current } = canvasRef;
    current.addEventListener("mousedown", startPainting);
    return () => {
      current.removeEventListener("mousedown", startPainting);
    };
  }, [startPainting]);

  const handlePainting = React.useCallback(
    e => {
      const { current } = canvasRef;
      if (isPainting) {
        const newCoordinates = getCoordinates(e);
        if (coordinates && newCoordinates) {
          drawLine(coordinates, newCoordinates, current);
          setCoordinates(newCoordinates);
        }
      }
    },
    [isPainting, coordinates]
  );

  React.useEffect(() => {
    const { current } = canvasRef;
    current.addEventListener("mousemove", handlePainting);
    return () => {
      current.removeEventListener("mousemove", handlePainting);
    };
  }, [handlePainting]);

  const stopPainting = React.useCallback(() => {
    painting(false);
    setCoordinates(null);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    return () => {
      canvas.removeEventListener("mouseup", stopPainting);
      canvas.removeEventListener("mouseleave", stopPainting);
    };
  }, [stopPainting]);

  const getCoordinates = e => {
    const { current } = canvasRef;
    return { x: e.pageX - current.offsetLeft, y: e.pageY - current.offsetTop };
  };

  return (
    <DrawerContainer>
      <DrawerCanvas ref={canvasRef} />
    </DrawerContainer>
  );
};
