import { createStore, createEffect, createEvent } from "effector";
import * as API from "api/socket";

export const drawImage = createEffect<API.CoodrinateProps, void>();

export const $coordinates = createStore({ x1: 0, y1: 0, x2: 0, y2: 0 });

$coordinates.on(drawImage, (_, coordinates) => coordinates);

drawImage.use(API.sendDrawning);
