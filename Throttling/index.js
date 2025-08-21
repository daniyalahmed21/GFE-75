let i = 0;
function increment() {
  i++;
}
const throttledIncrement = throttle(increment, 0);

throttledIncrement(); // i = 1

function throttle(func, wait) {
  let isPending = false;

  return function (...args) {
    if (!isPending) {
      func.apply(this, args);

      isPending = true;

      setTimeout(() => {
        isPending = false;
      }, wait);
    }
  };
}
