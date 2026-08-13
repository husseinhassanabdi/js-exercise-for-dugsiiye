
function operate(a, b, callback) { 
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

console.log("addition", operate(5,10, add))

console.log("subtraction", operate(50,20, subtract))

console.log("multiplication", operate(5,10, multiply))