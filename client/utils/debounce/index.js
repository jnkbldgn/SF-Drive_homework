export default function debounce(fn, ms) {
  let timer;
  return (...rest) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, rest);
    }, ms);
  };
}
