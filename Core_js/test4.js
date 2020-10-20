// Primitive Data types

let name = "Pawan Kumar"
console.log('my name is ' +name)
console.log('Data type is '  +(typeof name))

// Numbers
let marks = 24;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true
console.log("Data type is " + (typeof isDriver))

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar))

// undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Referecnce Data type
myarr = [1,2,3,4,5,false, "string"];
console.log("Data type is "+ (typeof myarr));

//object Literals
let stMarks = {
    pawan: 90, 
    Shubham:40,
    'Rohan Das': 34

}
console.log(stMarks)
console.log(typeof stMarks)

function findname(){

}
console.log(typeof findname)
let date = new Date();
console.log(typeof date)