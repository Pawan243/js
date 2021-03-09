console.log('welcome to test27 of javascript learning series')
//objects Literal for creating objects
 let car = {
     name: 'maruti 800',
     topspeed:80,
     run: function(){
         console.log('car is running')
     }
 }
 //we have already seen constructors like these:
 // new Date();
 
 //Creating a constructor for cars 
 function GeneralCar(givenName, givenSpeed){
     this.name = givenName;
     this.topSpeed = givenSpeed;
     this.run = function(){
         console.log(`${this.name} is running`);
     }
     this.analyze = function(){
         console.log(`This car is slower by ${200 - this.topSpeed} than marcedes`)
     }
 }
 car1 = new GeneralCar('Nisaan', 180);
 car2 = new GeneralCar('Maruti Alto', 300);
 car3 = new GeneralCar('Scorpio', 250);
 
 console.log(car1,car2, car3);