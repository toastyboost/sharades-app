export function debounce<T extends Function>(cb: T, wait = 20) {
  let h = 0;
  // eslint-disable-next-line
  let callable;
  return (callable = (...args: []) => {
    clearTimeout(h);
    // eslint-disable-next-line
    h = <any>setTimeout(() => cb(...args), wait);
  });
}
