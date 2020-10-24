console.log('This is 10th test in the series of javascript learning.')
console.log('So Welcome everyone into javascript world.')

// -----------------------------------------------------------------------------//
let name = 'preity';
function greet(name ,thank){
    console.log(`Happy irthday to you ${name}, Sending some love to the most charming guy in my life. You always bring the best out of me. I do not know how you do it, but I love you for that. Happiest Birthday. ${thank}.`)
}
greet(name, 'Thanks a lot');

// -------------------------------------------------------------------------------//
function greet(name ,thank){
    let msg = `Happy irthday to you ${name}, Sending some love to the most charming guy in my life. You always bring the best out of me. I do not know how you do it, but I love you for that. Happiest Birthday. ${thank}.`

    return msg;;
}

//--------------------------------------------------------------------------------//
let val = greet(name, 'Thanks a lot');
console.log(val);
const mygreet = function(name ,thank){
    let msg = `Happy irthday to you ${name}, Sending some love to the most charming guy in my life. You always bring the best out of me. I do not know how you do it, but I love you for that. Happiest Birthday. ${thank}.`
    return msg;;
}
let val1 = mygreet(name, 'Thanks a lot');
console.log(val1);


//-------------------------------using function as a value of key in object.-----------//
const myobj = {
    name: 'Pawan',
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())

//----------------function concept inside the forEach keyword for printing the array's info.---//
arr = ['fruit', 'vegitable', 'furniture'];
arr.forEach(function(element, index, array){
    console.log(element, index)
})

//-----------------------------------------------------------------------------------------//
if (1) {
    let age = 5;// here let keyword has block scope. it doesn't work outside of this block.
    console.log(age)
}
function ui(name) {
    var age = 9;
    console.log(age);
    return `${name} is ${age} years old. and age is:`;
}
console.log(ui("Pawan"), age)

//-----------------------------------------------------------------------------------------//
if (1) {
    var age = 5;// here var keyword has a global function scope. it doesn't work outside of this block.
    console.log(age)
}
function ui(name) {
    var age = 9;
    console.log(age);

    return `${name} is ${age} years old. and age is:`;
}

console.log(ui("Pawan"), age)