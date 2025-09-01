export default function serializeHTML(element) {
    console.log(element)

    if (typeof element === "string") {
      return element;
    }
  
    const { tag, children = [] } = element;
  
    const innerHTML = children
      .map(child => serializeHTML(child)) 
      .join("");
  
    return `<${tag}>${innerHTML}</${tag}>`;
  }
  
  const tree = {
    tag: "body",
    children: [
      { tag: "div", children: [{ tag: "span", children: ["foo", "bar"] }] },
      { tag: "div", children: ["baz"] },
    ],
  };
  
  console.log(serializeHTML(tree));
  