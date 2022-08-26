// if you run following code, you can see undefined
// but if name is not define, you can see error
console.log(name);
var name = "Sangwoo";

// why they are different?
// in general, we know js run code from top to bottom
// but js first declaire variables(without variable name)
// this is called hoisting

// let prevent this
// let will cause error if you use variable with let before definition
console.log(pet_name);
let pet_name = "Puppy";

// this is temporal dead zone of let
