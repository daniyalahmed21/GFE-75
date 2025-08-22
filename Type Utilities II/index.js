export function isArray(value) {
    return Array.isArray(value);
  }
  
  export function isFunction(value) {
    return typeof value === "function";
  }
  
  // but not null or undefined
  export function isObject(value) {
    return value !== null && value !== undefined && typeof value === "object" || isFunction(value);
  }
  
  export function isPlainObject(value) {
    if (value === null || typeof value !== "object") return false;
    
    const proto = Object.getPrototypeOf(value);
    console.log(Object.prototype)
    return proto === Object.prototype || proto === null;
  }
  