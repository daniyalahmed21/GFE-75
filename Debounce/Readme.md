# Debounce Function

This project implements a `debounce` utility function in JavaScript.

## 📝 The Problem

When building interactive web applications, it's common to have event handlers that can fire very rapidly. Examples include:

  * A user typing into a search bar (`keydown`, `keyup` events).
  * A user resizing the browser window (`resize` event).
  * A user scrolling a page (`scroll` event).

Executing a function on every single one of these events can lead to performance issues and unnecessary operations (e.g., making an API call for every keystroke).

## 💡 The Solution: Debouncing

Debouncing is a technique that ensures a function is only executed after a specific amount of time has passed since its last invocation. It's a way to "group" a series of rapid events into a single function call.

Think of it like an elevator "door open" button. Even if you press the button multiple times, the door only closes after no one has pressed the button for a specific duration. Each button press resets the timer.

The `debounce` function we've implemented works as follows:

  * It takes a callback function (`func`) and a wait duration (`wait`) as arguments.
  * It returns a **new function** that you will call instead of the original one.
  * Each time this new function is called, it clears any previously set timer and schedules a new one.
  * The original function (`func`) will only be executed if the timer is allowed to complete without being reset.

## 🚀 Usage

First, implement the `debounce` function.

```javascript
/**
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @returns {Function} A new, debounced function.
 */
function debounce(func, wait) {
  let timerID;
  return function(...args) {
    const context = this;
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
```

### Example 1: Simple Delay

In this example, the debounced function is called once, and the `increment` function is executed after 100ms.

```javascript
let i = 0;
function increment() {
  i++;
  console.log(`i is now ${i}`);
}

const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement(). A timer for 100ms starts.
debouncedIncrement(); 
// Expected output: (100ms later) "i is now 1"
```

### Example 2: Multiple Rapid Calls

This example shows the core behavior of a debouncer: resetting the timer.

```javascript
let i = 0;
function increment() {
  i++;
  console.log(`i is now ${i}`);
}

const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0. A timer starts.

// t = 50: i is still 0 because 100ms have not passed.
//  Call debouncedIncrement() again.
debouncedIncrement(); // The previous timer is cleared, and a new 100ms timer starts.

// t = 100: i is still 0 because it has only been 50ms since the last call.

// t = 150: The timer from t=50 has now completed.
//  The increment function is executed.
// Expected output: (at t=150) "i is now 1"
```

### Key Components of the Implementation

  * **Higher-Order Function**: The `debounce` function takes a function as an argument and returns a new function.
  * **Closure**: The `timerID` variable is part of a closure, allowing the returned function to "remember" and modify its value across multiple calls.
  * **`clearTimeout()`**: This is the most crucial part of the debounce logic. It cancels any pending timers, preventing the original function from being executed too early.
  * **`this` Context**: The `context` variable and `func.apply()` ensure that the original function is called with the correct `this` value, making the `debounce` function a universal utility for both standalone functions and object methods.
  * **Rest Parameters (`...args`)**: This ensures that any arguments passed to the debounced function are correctly forwarded to the original function.