export default function flatten(value) {
  let result = [];

  value.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

console.log(flatten([1, [2, [3, [4, [5]]]]]));
