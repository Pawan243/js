console.log('Welcome to my 20th test script in the series of javascript learning.')

let vegArray = ['gobbi','Aalu', 'loki'];
//Add a key-value pair inside local storag
localStorage.setItem('Name', 'Pawan');
localStorage.setItem('Sabzi', JSON.stringify(vegArray));

// clears the entire local storage
// localStorage.clear(); 

// clear a particular key-value pair
localStorage.removeItem('Name')
// Retrieve an item from the local storage

let name = localStorage.getItem('Name');
let veg = JSON.parse(localStorage.getItem('Sabzi')) ;
console.log(name)

sessionStorage.setItem('sessionName', 'sPawan');
sessionStorage.setItem('sessionSabzi', JSON.stringify(vegArray));