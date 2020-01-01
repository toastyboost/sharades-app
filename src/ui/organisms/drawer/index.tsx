import * as React from "react";
import { useStore } from "effector-react";
import { DrawerContainer, DrawerCanvas } from "./styles";
import { drawImage, $image } from "features/draw";

const dpi = window.devicePixelRatio;

type PositionProps = {
  x: number;
  y: number;
};

type EventProps = {
  pageX: number;
  pageY: number;
};

const drawLine = (
  originalMousePosition: PositionProps,
  newMousePosition: PositionProps,
  ref: HTMLCanvasElement
) => {
  const ctx = ref.getContext("2d");

  if (ctx) {
    ctx.strokeStyle = "#2b50ef";
    ctx.lineJoin = "round";
    ctx.lineWidth = 12;

    ctx.beginPath();
    ctx.moveTo(originalMousePosition.x * dpi, originalMousePosition.y * dpi);
    ctx.lineTo(newMousePosition.x * dpi, newMousePosition.y * dpi);
    ctx.closePath();
    ctx.stroke();
  }
};

const getCoordinates = (e: EventProps, ref: HTMLCanvasElement) => ({
  x: e.pageX - ref.offsetLeft,
  y: e.pageY - ref.offsetTop,
});

export const Drawer = () => {
  const cvs = React.useRef<HTMLCanvasElement | null>(null);
  const paint = useStore($image);

  const [isPainting, painting] = React.useState(false);
  const [coordinates, setCoordinates] = React.useState<PositionProps | null>(null);

  React.useEffect(() => {
    const { current } = cvs;

    if (current) {
      drawLine({ x: paint.x1, y: paint.y1 }, { x: paint.x2, y: paint.y2 }, current);
    }
  }, [paint]);

  React.useEffect(() => {
    const { current } = cvs;

    if (current) {
      current.width = current.scrollWidth * dpi;
      current.height = current.scrollHeight * dpi;
    }
  }, []);

  const startPainting = React.useCallback(e => {
    const { current } = cvs;
    if (current) {
      const coordinates = getCoordinates(e, current);
      if (coordinates) {
        painting(true);
        setCoordinates(coordinates);
      }
    }
  }, []);

  React.useEffect(() => {
    const { current } = cvs;
    if (current) {
      current.addEventListener("mousedown", startPainting);
      return () => {
        current.removeEventListener("mousedown", startPainting);
      };
    }
  }, [startPainting]);

  const handlePainting = React.useCallback(
    e => {
      const { current } = cvs;

      if (current && isPainting) {
        const newCoordinates = getCoordinates(e, current);
        if (coordinates && newCoordinates) {
          drawLine(coordinates, newCoordinates, current);
          drawImage({
            x1: coordinates.x,
            y1: coordinates.y,
            x2: newCoordinates.x,
            y2: newCoordinates.y,
          });
          setCoordinates(newCoordinates);
        }
      }
    },
    [isPainting, coordinates]
  );

  React.useEffect(() => {
    const { current } = cvs;
    if (current) {
      current.addEventListener("mousemove", handlePainting);
      return () => {
        current.removeEventListener("mousemove", handlePainting);
      };
    }
  }, [handlePainting]);

  const stopPainting = React.useCallback(() => {
    painting(false);
    setCoordinates(null);
  }, []);

  React.useEffect(() => {
    const { current } = cvs;

    if (current) {
      current.addEventListener("mouseup", stopPainting);
      current.addEventListener("mouseleave", stopPainting);
      return () => {
        current.removeEventListener("mouseup", stopPainting);
        current.removeEventListener("mouseleave", stopPainting);
      };
    }
  }, [stopPainting]);

  return (
    <DrawerContainer>
      <DrawerCanvas ref={cvs} />
    </DrawerContainer>
  );
};
