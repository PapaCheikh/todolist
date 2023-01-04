function addTask() {
    var inputElement = document.getElementById('task');
    var inputContent = inputElement.value;
    var newListItem = document.createElement('li');
    var list = document.getElementById('listTask');

    newListItem.innerHTML = inputContent;
    list.appendChild(newListItem);
    inputElement.value = '';
    inputElement.focus();

    newListItem.addEventListener('touchstart', touchStart);
    newListItem.addEventListener('touchend', touchEnd);
}


function resetList() {
    listTask.innerHTML = '';
    Terminated.innerHTML = '';
    /* var listTask = document.getElementById('listTask');
    while (listTask.firstChild) {
        listTask.removeChild(listTask.firstChild);
    } */
}
let startX;
function touchStart(event) {
    startX = event.touches[0].clientX;
}

function touchEnd(event) {
    const deltaX = event.changedTouches[0].clientX - startX;
    if (Math.abs(deltaX) > 150) {
        this.remove();
    } else if (Math.abs(deltaX) > 50) {
        if (Math.abs(deltaX) < 150) {
            if (deltaX > 0) {
                var list = document.getElementById('Terminated');
                list.appendChild(listTask.firstChild);

                newListItem.addEventListener('touchstart', touchStart);
                newListItem.addEventListener('touchend', touchEnd);
            } else {
                var list = document.getElementById('listTask');
                list.appendChild(Terminated.firstChild);

                newListItem.addEventListener('touchstart', touchStart);
                newListItem.addEventListener('touchend', touchEnd);
            }
        }
    }

}
