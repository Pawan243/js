console.log('Welcome to my 15th test script in the series of javascript learning.')

let cost = document.querySelector('.no');
cont = document.querySelector('.container')  
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName) 
console.log(nodeType)  
/*
//Node types

1. element 
2. Attribute
3. Text Node
8. Comment
9. document
10. docType

*/
// console.log(cont.childNodes)
// console.log(cont.childern)

let container = document.querySelector('div.container')
// console.log(container.childern[1].children[0].childern);

console.log(container.firstChild) //gives the first child

console.log(container.firstElementChild); // it gives the first element of the child

console.log(container.lastChild)
console.log(container.lastElementChild)
console.log(container.childElementCount) // count of child element

console.log(container.firstElementChild.parentNode)

console.log(container.firstElementChild.nextSibling)
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)
