
//22.12.19 HomeWork1

// Создайте форму
// Добавьте в нее input для ввода url картинки
// Добавьте кнопку input type='submit'
// Добавьте пустой div
// При отправке формы нужно:
// Взять введенный url и вставить в div картинку с этим url
// Если картинка не грузится вывести в div сообщение об ошибке


//Вариант решения, который работает

// const form = document.body.querySelector("form");
// const input = document.body.querySelector("#addUrl");
// const btnSubmit = document.body.querySelector("#addBtn");
// const divBasket = document.body.querySelector(".basket");

// btnSubmit.addEventListener('click', addImageInDiv);

// function addImageInDiv(event) {

//     event.preventDefault();
//     let image = document.createElement('img');
//     divBasket.append(image);
//     image.src = form.elements.putImg.value;
//     console.log(form.elements.putImg.value);

//     image.onerror = function () {
//         image.remove();
//         let paragraph = document.createElement('p');
//         divBasket.append(paragraph);
//         paragraph.innerText = "Error: it is not URL! Try again.";
//     };
//     form.elements.putImg.value = '';
// }


//HomeTask2 22.12.2019

//Написать функцию которая открывает модальное окно с переданным в нее содержимым в качестве аргумента

// function showModal(header, footer, content){

// }

// var modal = document.getElementById('myModal');


// var btn = document.getElementById("myBtn");


// var span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
//     modal.style.display = "block";
// }


// span.onclick = function() {
//     modal.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }




let header = prompt('Введи header');
let footer = prompt('Введи footer');
let content = prompt('Введи content');


function showModal(header, footer, content) {

    let modal = document.getElementById('myModal');

    let btn = document.getElementById("myBtn");

    let span = document.getElementById("close");

    let modalHeader = document.body.querySelector(".modal-header");
    let pHeader = document.createElement('p');
    pHeader.innerText = header;
    modalHeader.append(pHeader);

    let modalFooter = document.body.querySelector(".modal-footer");
    let pFooter = document.createElement('p');
    pFooter.innerHTML = String(footer);
    modalFooter.append(pFooter);

    let modalBody = document.body.querySelector(".modal-body");
    let pBody = document.createElement('p');
    pBody.innerHTML = String(content);
    modalBody.append(pBody);


    btn.addEventListener('click', () => {
        modal.style.display = "block";
    })

    span.addEventListener('click', () => {
        modal.style.display = "none";
    })

}

showModal(header, footer, content);

