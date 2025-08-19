Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this.length === 0 && arguments.length < 2) {
    throw TypeError("reduce of empty array not possible");
  }

  let accumulator;
  let startIndex;

  if (arguments.length >= 2) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let index = startIndex; index < this.length; index++) {
    if (this[index] !== undefined) {
      accumulator = callbackFn(accumulator, this[index], index, this);
    }
  }

  return accumulator;
};

console.log([].myReduce((prev, curr) => prev + curr, 0));
