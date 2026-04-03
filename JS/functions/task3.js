function filterAndLog(arr, conditionFn, logFn) {
    arr.forEach(element => {
        if(conditionFn(element)){
            logFn(element);
        }
    });
}


const conditionFn = (num) => num % 2 === 0;

const logFn=(num)=>{
    console.log(num);
}

const numbers = [1, 2, 3, 4, 5, 6];
filterAndLog(numbers, conditionFn, logFn); // Output: 2, 4, 6