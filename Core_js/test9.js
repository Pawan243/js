console.log('This is 9th test in the series of javascript learning.')
console.log('So Welcome everyone into javascript world.')

/* for loop in javascript */
for(let i=0; i<40; i++)
{
    console.log(i)
}
/* while loop in javascript */
let j = 0;
while(j<100){
    console.log(j)
    j++;
}

/* for loop in javascript */
let k = 0;
do{
    console.log(k+1);
    if(k===8)
    {
        break;
    }
    
    k++;
}while(k < 10);

/* do-while loop in javascript */
let k = 0;
do{
    if(k===5)
    {
        k++;
        continue;
    }
    console.log(k+1);
    k++;
}while(k < 10);

/* forEach case in for loop in javascript */
let arr = [2,5,8,9,6,3];

arr.forEach(function(element,index,array){
    console.log(element,index,array)
});


for(let i = 0; i<arr.length; i++){
    const element = arr[i];
    console.log(element)
}

/* for loop using object key-value concept in javascript */
let obj = {
    name: "Pawan Swami",
    age: 22,
    type : "Intermediate Programmer",
    os : "Ubuntu"
}
for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`)
}

console.log('done');