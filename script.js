const inputForm = document.querySelector('#inputForm');
const itemInput = document.querySelector('#itemInput');
const formBtn = document.querySelector('#formBtn');
const filterText = document.querySelector('#filterText');
const itemList = document.querySelector('#itemList');
const clearBtn = document.querySelector('#clearBtn');

inputForm.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearList);
document.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();
    if(itemInput.value === '') return;
    if(itemList.innerHTML === '') {
        filterText.classList.remove('hide');
        clearBtn.classList.remove('hide');
    }
    const itemToAdd = itemInput.value;
    const li = document.createElement('li');
    const span = document.createElement('span');
    const i = document.createElement('i');
    const text = document.createTextNode(itemToAdd);
    
    li.className = 'item';
    span.appendChild(text);
    i.classList = "fa-solid fa-xmark";

    li.appendChild(span);
    li.appendChild(i);

    itemList.appendChild(li);

    itemInput.value = '';
}

function removeItem(e) {
    if(e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.remove();
    }
}

function clearList() {
    itemList.innerHTML = '';
    filterText.classList.add('hide');
    clearBtn.classList.add('hide');
}