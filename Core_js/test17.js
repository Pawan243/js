console.log('Welcome to my 17th test script in the series of javascript learning.')

document.getElementById('heading').addEventListener('click',function(e){ // here 'click' event can be replaced by many events 
    console.log('You have clicked the heading')
    // location.href = "//google.com"
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = Array.from(e.target.classList);
    // variable = e.offsetX
    variable = e.offsetY
    // variable = e.clientX
    variable = e.clientY

    console.log(variable)

    
})

