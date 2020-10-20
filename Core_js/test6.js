console.log('we are in test6.js')
// const name = 'Pawan';
// const greeting = 'Good Morning';
// console.log(greeting +' '  +name)

let html;
html = '<h1> this is HEADING IN HTMLSDFLSD LDLFJJLDS</h1>'

html = html.concat('in html', 'and html5')
// console.log(html)
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.touPPERCase());
// console.log(html);

// console.log(html[5])
// console.log(html.indexOf('<'))
// console.log(html.lastIndexOf('<')) 
// console.log(html.charAt(3));
// console.log(html.endsWith('is'));
// console.log(html.includes('is'));
// console.log(html.substring(2,6));
// console.log(html.slice(0,6))
// console.log(html.split(' '))
// console.log(html.replace('this','it'))

let f1 = 'Orange';
let f2 = 'Apple';
let myHtml = `Hello ${name}
<h3> This is 'my' heading </h3>
<p> You like ${f1} and ${f2};
`
document.body.innerHTML = myHtml;