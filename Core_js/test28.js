console.log('welcome to test28 of javascript learning series')

// object literal : object.prototype

let obj = {
    name: 'Pawan',
    lastName: 'Swami',
    email: 'abc@gmail.com'
}
function obj(givenName){
    this.name = givenName;
}

obj.prototype.getName = function(newName){
    // return this.name;
    this.name = newName;
}

let obj2 = new obj('pawan252')

console.log(obj2.toString)
