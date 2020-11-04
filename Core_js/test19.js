console.log('Welcome to my 19th test script in the series of javascript learning.')

// Printing all the href link in a particular web page which contains all the href link having a python string 

let str = 'Python'

let link = document.links;

console.log(link)

let href;

Array.from(link).forEach(function(element){
    href = element.href;
    if(href.includes(str))
    {
        console.log(href)
    }
})