function calculate(a, b, operation) {
   return operation(a, b);
}

const add=(a,b)=>{
    return a+b;
}

const multiply=(a,b)=>{
    return a*b;
}

console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, multiply)); // Output: 15