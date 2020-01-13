import { createEvent, createStore } from "effector";

export const setCountdown = createEvent<number>();

export const $roundTimer = createStore<number>(0);

$roundTimer.on(setCountdown, (_, time) => time);
