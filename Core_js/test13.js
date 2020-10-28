console.log('Welcome to my 13th test script in the series of javascript learning.')

const str = 'javascript';

let a=document.links;
let len=a.length;
for(let i=0;i<len;i++){
    let val= document.links[i].href;
    if(val.includes(str)){
        console.log(val);
    }

}