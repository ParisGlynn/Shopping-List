const inputForm = document.querySelector('#inputForm');
const itemInput = document.querySelector('#itemInput');
const formBtn = document.querySelector('#formBtn');
const itemList = document.querySelector('#itemList');

inputForm.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    
    const li = document.createElement('li');
    const span = document.createElement('span');
    const i = document.createElement('i');
    const text = document.createTextNode(itemInput.value);
    
    li.className = 'item';
    span.appendChild(text);
    i.classList = "fa-solid fa-xmark";

    li.appendChild(span);
    li.appendChild(i);

    itemList.appendChild(li);
}