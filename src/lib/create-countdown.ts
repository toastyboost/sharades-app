import {
  createStore,
  createEffect,
  createEvent,
  forward,
  guard,
  Event,
} from 'effector';

type CreateTimerProps = {
  start: Event<void | number>;
  abort?: Event<void>;
  timeout?: number;
};

type CreateTimerResult = {
  tick: Event<number>;
};

const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const createCountdown = (
  name: string,
  {
    start,
    abort = createEvent(`${name}Reset`),
    timeout = 1000,
  }: CreateTimerProps,
): CreateTimerResult => {
  const tick = createEvent<number>(`${name}Tick`);
  const timer = createEffect<number, void>(`${name}Timer`).use(() =>
    wait(timeout),
  );

  const $working = createStore(true, { name: `${name}Working` });

  $working
    .on(timer, (_, seconds) => seconds > 0)
    .on(abort, () => false)
    .on(start, () => true);

  guard({
    source: start,
    filter: timer.pending.map((is) => !is),
    target: tick,
  });

  forward({
    from: tick,
    to: timer,
  });

  guard({
    source: timer.done.map(({ params }) => params - 1),
    filter: $working,
    target: tick,
  });

  return { tick };
};
