console.log('Welcome to my 16th test script in the series of javascript learning.')

let element = document.createElement('li')

let text = document.createTextNode('I am a text node')

element.appendChild(text)
 
//Add a class name to li element
element.className = 'childul';
element.id = 'createli';
element.setAttribute('title', 'mytitle')
// element.innerText = 'This is created by pawan';
// element.innerHTML = '<b>This is created by pawan</b>';
let ul = document.querySelector('ul.this')
ul.appendChild(element)
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3')

elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode)

element.replaceWith(elem2)

let myul = document.getElementById('myul')
myul.replaceChild(element,document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))
let pr = elem2.getAttribute('class')
// let pr = elem2.hasAttribute('class')
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelementtitle');

console.log(elem2)
// Quiz to add in next test
//create a heading element with text as 'go to google' and create an a tag ouside it with "google.com"
