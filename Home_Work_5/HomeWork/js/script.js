window.onload = function() {

    let menuItem = document.querySelectorAll('.menu-item'),
        title = document.getElementById('title'),
        adv = document.querySelector('.adv'),
        prompte = document.getElementById('prompt'),
        menu = document.querySelector('.menu'),
        newItem = document.createElement('li'),
        column = document.querySelectorAll('.column');

        console.log(menuItem);
        console.log(menu);
        console.log(title);
        console.log(adv);
        console.log(prompte);
        console.log(newItem);
        console.log(column);
 
        //menu.replaceChild(menuItem[1], menuItem[2]);
        menu.insertBefore(menuItem[2], menuItem[1]); // перестановка местами
        newItem.classList.add('menu-item');
        newItem.textContent = 'Пятый пункт';
        menu.appendChild(newItem);
        column[1].removeChild(adv); // adv.remove(); --> тоже работает
        title.textContent = 'Мы продаем только подлинную технику Apple';
        prompte.textContent = prompt('Как вы относитесь к технике Apple ?', '');
        document.body.style.background ='url(../img/apple_true.jpg) center no-repeat';
};