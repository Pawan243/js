console.log('Welcome to my 21th exercise 2 test script in the series of javascript learning.')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

let area = null;
let view = document.getElementById('view');

view.onclick = function () {
    editStart();
};

function editStart() {
    area = document.createElement('textarea');
    area.className = 'edit';
    area.value = view.innerHTML;

    area.onkeydown = function (event) {
        if (event.key == 'Enter') {
            this.blur();
        }
    };

    area.onblur = function () {
        editEnd();
    };

    view.replaceWith(area);
    area.focus();
}

function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
}
