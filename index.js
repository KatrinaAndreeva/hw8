// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки. +++++


let btn = document.getElementById('btn-msg');

function clicked() {
 let text = document.getElementById('btn-msg').dataset.text;
 alert(text);
}
btn.addEventListener('click', clicked);


// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, 
// она становится прежнего цвета. Цвет менять можно через добавление класса.

function onmove() {
 document.getElementById("btn-msg").style.backgroundColor = '#ff0000';
}
btn.addEventListener('mouseover', onmove);

btn.addEventListener('mouseout', function() {
 document.getElementById('btn-msg').style.backgroundColor = '';
});


// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

document.body.onclick = (e) => document.querySelector("#tag").textContent = 'Tag: ' + e.target.tagName;

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку,
// т.е Item 3, Item 4 и т.д


let btn2 = document.getElementById('btn-generate');
btn2.addEventListener('click', addli);

function addli() {
 var ul = document.querySelector('ul');
 var ul_li = document.getElementsByTagName("li");
 ul.insertAdjacentHTML('beforeend', '<li>Item ' + (ul_li.length + 1) + '</li>');
}
