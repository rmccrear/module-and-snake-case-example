// TODO:
// Export the snake function
// Import it to a file called app.mjs and use it there.


function snake(str) {
    const temp = str.toLowerCase()
                    .replaceAll(" ", "_");
    return temp;
}

// TODO:
// Input: "Hello World"
// Output: "hello-world"
function kebobCase(str){}

// input "Hello World"
// const str2 = snake("Hello World");
// output "hello_world"

export {snake};
