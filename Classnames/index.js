export default function classNames(...args) {
  return args
    .flatMap((arg) => {
      if (!arg) {
        return [];
      }
      if (typeof arg === "string" || typeof arg === "number") {
        return [arg];
      }
      if (Array.isArray(arg)) {
        return classNames(...arg).split(" ");
      }
      if (typeof arg === "object") {
        return Object.keys(arg).filter((key) => arg[key]);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}

console.log(classNames("foo", { bar: true }));

