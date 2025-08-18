
import debounce from "./debounce.js";

let i = 0;
function increment() {
  i++;
}
const debouncedIncrement = debounce(increment, 100);

debouncedIncrement(); 

