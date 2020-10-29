console.log('Welcome to my 14th test script in the series of javascript learning.')

/*

Element Selectors: 

1. Single element selectors
2. multiple element selectors

*/

// 1. Single element selectors

let element = document.getElementById('myfirst')

element = element.className
element = element.childNodes
element = element.parentNode
element.style.color = 'red'
element.innerText = 'Pawan is a fit boy'
element.innerHTML = '<b>Pawan is a fit boy</b>'
console.log(element)

let sel = document.querySelector('#myfirst')

sel = document.querySelector('.child')
sel = document.querySelector('div')

sel.style.color = 'green';

console.log(sel)


// 2. Multi element selector

let elems = document.getElementsByClassName('child')

// console.log(elems[2])

elems = document.getElementsByClassName('container');

elems = document.getElementsByTagName('div')
console.log(elems)
// console.log(elems[0].getElementsByClassName('child'))
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
    
}

Array.from(elems).forEach(element => {
    console.log(element)
    element.style.color = 'blue';

})