const inputForm = document.querySelector('#inputForm');
const itemInput = document.querySelector('#itemInput');
const formBtn = document.querySelector('#formBtn');
const filterText = document.querySelector('#filterText');

const clearBtn = document.querySelector('#clearBtn');
const items = document.querySelectorAll('.item');

inputForm.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearList);
document.addEventListener('click', removeItem);
filterText.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', addItemsToDom);

checkUI();

function addItem(e) {
    e.preventDefault();
    if(itemInput.value === '') {
        alert('Please add an item');
        return;
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

    addItemToLocalStorage(itemToAdd);

    checkUI();

    itemInput.value = '';
}

function filterItems(e) {
    const items = document.querySelectorAll('.item');
    const matchPhrase = e.target.value;

    items.forEach(item => {
        const TheValue = item.firstChild.textContent.toLowerCase();
        if(TheValue.indexOf(matchPhrase.toLowerCase()) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function removeItem(e) {
    if(e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.remove();
    }
    checkUI();
}

function clearList() {
    itemList.innerHTML = '';
    filterText.classList.add('hide');
    clearBtn.classList.add('hide');
}

function checkUI() {
    const itemList = document.querySelector('#itemList');
    if(itemList.innerHTML === '') {
        filterText.classList.add('hide');
        clearBtn.classList.add('hide');
        } else {
            filterText.classList.remove('hide');
            clearBtn.classList.remove('hide');
        }
}

function addItemToLocalStorage(item) {
    if(localStorage.getItem('items') === null) {
        localStorage.setItem('items', JSON.stringify([]));
        }
    const storageItems = JSON.parse(localStorage.getItem('items'));
    storageItems.push(item);

    localStorage.setItem('items', JSON.stringify(storageItems));
}

function addItemsToDom(item) {
    const localStorageItems = getItemsFromLocalStorage();
    localStorageItems.forEach((item) => {
        const itemToAdd = itemInput.value;
        const li = document.createElement('li');
        const span = document.createElement('span');
        const i = document.createElement('i');
        const text = document.createTextNode(item);
        
        li.className = 'item';
        span.appendChild(text);
        i.classList = "fa-solid fa-xmark";

        li.appendChild(span);
        li.appendChild(i);

        itemList.appendChild(li);

        checkUI();
    });   
}

function getItemsFromLocalStorage() {
    if(localStorage.getItem('items') === null) {
        localStorage.setItem('items', JSON.stringify([]));
        }
    const storageItems = JSON.parse(localStorage.getItem('items'));
    return storageItems;
}