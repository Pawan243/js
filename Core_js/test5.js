// Type conversion and type coercion

console.log("welcome to test5 javascript")

let myVar;
myVar = String(34);
// console.log(myVar , (typeof myVar));

let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar))

let date = String(new Date);
// console.log(date, (typeof date))

let arr = [4,3,25,5,8];
// console.log(arr.length, (typeof arr))

let i = 9;
// console.log(i.toString())

let stri = Number("3434")
stri = Number("24s343");
stri = Number(true);
stri = Number("false");
stri = Number([1,45,3,2,8])

// console.log(stri, (typeof stri));
// let number = 43
// ParseInt just does convert into a integer  but Number does convert the whole digits into number no matters whether its float or int.
let number = parseInt('34.453')
// console.log(number, (typeof number))

let number1 = parseFloat('32.453')
// console.log(number1, (typeof number1))
console.log(number1.toFixed(2),(typeof number1))

