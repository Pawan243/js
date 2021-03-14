console.log('welcome to test31.js in the series of javascript learning')

class Employee {
    // this.name
    constructor(name, givenExperience, givenDivision){
        this.name = name;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return ` I am ${this.name} and this company is the best`
    }
    joiningYear(){
        return 2021 - this.experience
    }
    experienceFrom2000(){

    }
    static add(a, b){
        return a + b
    }
}

class Programmer extends Employee{
    constructor(name, givenExperience, givenDivision, language,github){
        super(name, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'Javascript'
        }
    }
    static multiply(a, b){
        return a*b;
    }
    
}

// pawan = new Employee('pawan', 20, 'Division')
// console.log(pawan)
// console.log(pawan.joiningYear())
// console.log(Employee.add(33,12))

swami = new Programmer('Pawan', 5, "Lays", 'Go', "Pawan252")
console.log(swami)
console.log(swami.favoriteLanguage())
console.log(Programmer.multiply(4,5));