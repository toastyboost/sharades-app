import { createStore, createEffect, createEvent } from "effector";
import * as API from "api";

export const drawImage = createEffect<API.DrawningProps, void>();
export const paintImage = createEvent<API.DrawningProps>();

export const $image = createStore({ x1: 0, y1: 0, x2: 0, y2: 0 });

$image.on(paintImage, (_, coordinates) => coordinates);

drawImage.use(API.userDraw);
