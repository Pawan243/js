console.log('Welcome to my 18th test script in the series of javascript learning.')

let btn = document.getElementById('btn')

btn.addEventListener('click', func1) //About 'click' event in javascript
btn.addEventListener('dblclick', func2) //About 'double click' event in javascript
btn.addEventListener('mousedown', func3) //About 'mouse down' event in javascript
function func1(e){
    console.log('thanks', e)
    e.preventDefault(); // Bypassing the default behaviour

}

function func2(e){
    console.log('thanks its a double click', e)
    e.preventDefault(); // Bypassing the default behaviour
}

function func3(e){
    console.log('thanks its mouse down event', e)
    e.preventDefault(); // Bypassing the default behaviour

}

document.querySelector('.no').addEventListener('mouseenter', function(){
    console.log('You entered no')
})

document.querySelector('.no').addEventListener('mouseleave', function(e){
    console.log('you exited no')
})
document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY)

    document.body.style.backgroundColor = `rgb(${e.offsetX} ,${e.offsetX} , ${e.offsetX} , 154)`

    console.log('You triggered mouse move event')
})

