console.log('Welcome to test30 of javascript series')

const proto = {
    slogan: function () {
        return 'This is a good company';
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

// This creates pawan object
let pawan = Object.create(proto);
pawan.name = 'Pawan';
pawan.role = 'Programmer'

const pawan1 = Object.create(proto, {
    name: {value: 'Pawan', writable: true},
    role: {value: 'Programmer'},
});

pawan.changeName('pawan2')
console.log(pawan1)

//Employee constructor

function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogon 

Employee.prototype.slogan = function(){
    return `This company is the best. Regards, ${this.name}`;
}

let pawanObj = new Employee("Pawan", 45000, 90);

console.log(pawanObj.slogan())

//Programmer

function Programmer(name, salary, experience, language){
    Employee.call(this, name , salary, experience);
    this.language = language
}
// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer
let Paneer  = new Programmer('Pawan', 2, 0 , 'Javascript');
console.log(pawan);