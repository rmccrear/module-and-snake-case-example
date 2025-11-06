
function add(x, y) {
    return x + y;
}

// input an array
// output the sum of the numbers
// example: [1, 2, 3, 4]
//          10
function sum(numbers) {
    let n = 0;
    for(let i=0; i<numbers.length; i++) {
        n = n + numbers[i]
    }
    return n;
}

function randomNumber(a, b){
    return Math.floor(Math.random()*(b-a)) + a;
}

const MyMath = {
    addTwoNumbers: add,
    random: randomNumber,
    sumArray: sum
}

export default MyMath;

export {sum, add, randomNumber};