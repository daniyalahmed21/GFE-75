export default function listFormat(items, options) {
  const separator = ", ";
  const lastSeparator = " and ";

  let filtered = items.filter(Boolean);

  if (options?.sorted) {
    filtered.sort();
  }

  if (options?.unique) {
    filtered = [...new Set(filtered)];
  }

  if (filtered.length === 0) {
    return "";
  }

  if (options?.length > 0 && filtered.length > options.length) {
    return (
      filtered.slice(0, options.length).join(", ") +
      lastSeparator +
      `${filtered.length - options.length}` +
      `${filtered.length - options.length > 1 ? " others": " other" }`
    );
  }

  // Normal formatting
  if (filtered.length === 1) {
    return filtered[0];
  }

  if (filtered.length === 2) {
    return filtered.join(lastSeparator);
  }

  return (
    filtered.slice(0, -1).join(", ") +
    lastSeparator +
    filtered[filtered.length - 1]
  );
}

console.log(listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], { length: -1 })
);
// ""

console.log(listFormat(["Bob"]));
// "Bob"

console.log(listFormat(["Bob", "Alice"]));
// "Bob and Alice"

console.log(
    listFormat(["Bob", "Ben", "Tim", "Jane", "John", "Bob"], {
      length: 3,
      unique: true,
    })
);
// "Bob, Ben, Tim, Jane and John"

console.log(listFormat(["Bob", "Ben", "", "", "John"]));
// "Bob, Ben and John"
