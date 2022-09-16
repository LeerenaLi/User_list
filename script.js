'use strict';

const list = document.querySelector('.list');

const addItem = () => {
    const userString = prompt('Добавьте строку');

    const listItems = list.querySelectorAll('.item');
    console.log(listItems);

    if (userString === 'exit' || userString === null) {
        return;
    }

    const createElement = (text, tag = 'li', _class = 'item') => {
        const element = document.createElement(tag);
        element.className = _class;
        element.textContent = text;
        return element;
    };

    const newItem = createElement(userString);

    list.append(newItem);

    console.log(newItem);

    if (!userString.trim() || userString.length === 0) {
        alert('Введите корректные данные');
        newItem.remove();
    }

    const removeItem = () => {
        if (listItems.length === 0) return;

        const lastChild = listItems[listItems.length - 1];
        list.removeChild(lastChild);
        return listItems;
    };

    if (userString === 'del') {
        newItem.remove();
        removeItem();
    }

    if (userString === 'clear') {
        newItem.remove();
        for (let i = 0; i < listItems.length; i++) {
            list.removeChild(listItems[i]);
        }
        return;
    }

    addItem();
};
addItem();
