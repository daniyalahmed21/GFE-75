export default function debounce(func, wait) {
  let timerID;
  return (...args) => {
    const context = this;
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
