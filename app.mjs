// import {add, sum} from "./math.mjs";
// import MyMath from "./math.mjs";
import MyMath, {add, sum} from "./math.mjs";
import { snake } from "./snake.mjs";
import subtract from "./subtract.mjs";


console.log(add(1, 5));

console.log(sum([1,2,3,4,5]))

console.log(subtract(10, 1));

console.log("Use MyMath: " + MyMath.addTwoNumbers(5, 5))

document.getElementById("my_snake_form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("clicked");
    const str = document.getElementById("my_string").value;
    const snakey = snake(str);
    output.textContent = snakey;
})