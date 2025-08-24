Function.prototype.myCall = function(thisArg, ...args) {
    thisArg = thisArg || globalThis;

    if (typeof thisArg !== "object" && typeof thisArg !== "function") {
        thisArg = Object(thisArg);
        console.log(thisArg)
    }

    thisArg.tempFunc = this;

    const result = thisArg.tempFunc(...args);

    delete thisArg.tempFunc;

    return result;
};

function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myCall(mary));
multiplyAge.myCall(john, 2); // 84
