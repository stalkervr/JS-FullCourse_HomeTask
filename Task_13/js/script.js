// Скачать проект, прикрепленный к уроку

// Написать рабочие табы

// Проверить, чтобы все работало и не было ошибок в консоли

// Добавить папку с уроком на GitHub

// Зачем применять делегирование событий?

// Таким образом мы оптимизируем код, назначая лишь 1 обработчик, 
// но главное, что мы обезопасим себя от потерь этих обработчиков 
// на элементах при динамическом  изменении страницы.

// Task_10 
// 1) Написать таймер обратного отсчета
// 2) Проверить, чтобы все работало и не было ошибок в консоли
// 3) У таймера есть проблема (нужно исправить)
// 4) Изменить скрипт так, чтобы в таком случае выводилось: 00:00:00 · 
// Необходимо подставлять 0 перед значениями, которые состоят из одной цифры (из 4:6:50 сделает 04:06:50)
// 3) Добавить папку с уроком на GitHub
// Вопросы к этому заданию
// В каких единицах мы получаем дату в JS? количество миллисекунд от 1-Янв-1970 00:00

// Task_11

//     1) Написать функцию вызова модального окна
//     2) Привязать модальное окно к кнопкам “Узнать подробнее” в табах. Код не должен дублироваться.

/* <input id="age" value="30">
let age = document.getElementById('age');
function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser(); */

// Выведите на экран правильное сообщение, которое берет значение из input
// Написать скрипт в отдельном js файле.
// Проверить, чтобы все работало и не было ошибок в консоли.
// Добавить папку с уроком на GitHub

// Task_12

// 1) Привести свой проект в соответствие с ES6 (в проекте Yoga, то, что можно преобразовать)

// 2) Используя синтаксис ES6 в отдельном документе:
// ·        Создать класс options
// ·        Он должен содержать свойства: height, width, bg, fontSize, textAlign
// ·        Он должен содержать метод, создающий новый div на странице, 
//          записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров
// ·        Создать новый объект через класс
// ·        Вызвать его метод и получить элемент на странице
// 3) Проверить, чтобы все работало и не было ошибок в консоли
// 4) Добавить папку с уроком на GitHub

// Вопросы к этому заданию
// Как правильно создавать новые экземпляры классов?

// Task_13

// 1) Подключить скрипт отправки данных с формы к:
// ·        Модальному окну
// ·        Контактной форме
// 2) Проверить, чтобы все работало и не было ошибок в консоли
// 3) Добавить папку с уроком на GitHub
// Вопросы к этому заданию
// Что может отправить GET-запрос на сервер?


window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    /* #region  TABS */

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTadContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTadContent(1); // цикл начинается с единицы скрываются все элементы кроме 0-го

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {

        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTadContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    /* #endregion */

    /* #region  TIMER */
// TODO: Rewrite whith classes ES 6  

    let deadline = '2019-05-22';

    function getTimeRemaining(endtime) {

        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // hours = Math.floor((t/1000/60/60) % 24),
        // days = Math.floor((t/(1000*60*60*24)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timerTitle = document.querySelector('.timer-title'),
            timerAction = document.querySelector('.timer-action'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {

            let t = getTimeRemaining(endtime);

            //hours.textContent = t.hours;
            //minutes.textContent = t.minutes;
            //seconds.textContent = t.seconds;
            t.hours < 10 ? hours.textContent = '0' + t.hours : hours.textContent = t.hours;
            t.minutes < 10 ? minutes.textContent = '0' + t.minutes : seconds.textContent = t.minutes;
            t.seconds < 10 ? seconds.textContent = '0' + t.seconds : seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                timerTitle.textContent = 'К сожалению текущая акция завершена';
                timerAction.textContent = 'Ждите начала следующей';
            }
        }
    }

    setClock('timer', deadline);
    /* #endregion */

    /* #region  MODAL WINDOW */
// TODO: Rewrite whith classes ES 6  
    // Task_11 Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; // запрещаем прокрутку страницы
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        //this.classList.remove('more-splash');
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; // включаем прокрутку
    });
    /* #endregion */

    // Task_13 Form
// TODO: Install local server for this task.  
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо скоро мы свами свяжемся',
    failure: 'Что-то пошло не так'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');
    // обработчик события необходимо вешать на саму форму!!!! а не на
    // какую-либо конкретную форму!!!!
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        request.send(formData);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4 ) {
                statusMessage.innerHTML = message.loading;
            }
            else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            }
            else {
                statusMessage.innerHTML = message.failure;
            }
        });
    });
});