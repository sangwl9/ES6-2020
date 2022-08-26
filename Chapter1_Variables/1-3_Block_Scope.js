// var is function scope
// so if you outside the function, you cannot use variables in funtions
function a() {
    var hello = "hello";
}
// it cause error
console.log(hello);

// let and const block scope
// you can only use them in same block
if (true) {
    const bye = "bye";
}

// it cause error
console.log(bye);
