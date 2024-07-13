function addTask() {
    var input = document.getElementById('taskInput');
    var newTask = input.value;
    if (newTask !== '') {
    var li = document.createElement('li');
    var textNode = document.createTextNode(newTask);
    li.appendChild(textNode);
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
 deleteButton.className = 'deleteButton';
 deleteButton.onclick = function() {
 this.parentNode.remove();
 };
 li.appendChild(deleteButton);
 li.onclick = function(event) {
 if (event.target.tagName !== 'BUTTON') {
 this.classList.toggle('finished');
 }
 };
 document.getElementById('tasksList').appendChild(li);
 input.value = ''; // Clear the input box after adding the task
 }
}