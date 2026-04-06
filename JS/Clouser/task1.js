// Your task. Attempt first.
// Build a makeMultiplier function that:

// Takes a number multiplier as argument
// Returns a new function that takes a number n
// That inner function returns n * multiplier


function makeMultiplier(multiplier) {
    return function(n) {
        return n * multiplier;
    }
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
console.log(double(10)); // 20
