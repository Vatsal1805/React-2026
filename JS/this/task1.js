// Your task. Attempt first.
 // prints undefined — why?
// Two tasks:

// Explain in one line why this.message is undefined
// Fix it using an arrow function


const timer = {
    message: "Time is up!",
    start: function() {
        setTimeout(() => {
            console.log(this.message);
        }, 1000);
    }
};

timer.start();