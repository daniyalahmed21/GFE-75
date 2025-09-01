export default function jsonStringify(value) {
  if (value === null) return "null";

  if (typeof value === "string") return `"${value}"`;

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value)) {
    let items = value.map((item) => myStringify(item));
    return `[${items.join(",")}]`;
  }

  if (typeof value === "object") {
    let entries = Object.entries(value).map(([key, val]) => {
      return `"${key}":${myStringify(val)}`;
    });
    return `{${entries.join(",")}}`;
  }
}

console.log(jsonStringify({ foo: "bar" }));

jsonStringify({ foo: "bar", bar: [1, 2, 3] });
jsonStringify({ foo: true, bar: false });
