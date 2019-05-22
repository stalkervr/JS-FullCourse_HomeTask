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


class Options {

    constructor (width, bg, fontSize, textAlign, height = 'auto') {

        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const elementStyle = `
                              width:${this.width}px; 
                              background-color:${this.bg}; 
                              font-size:${this.fontSize}px;
                              text-align:${this.textAlign}; 
                              margin: 0 auto;
                              padding: 20px;
                              height:${this.height}px;
                              `;
                              
        element.style.cssText = elementStyle;
    }
}

window.addEventListener('DOMContentLoaded', function () {
    
    const newDiv = new Options(600, 'yellow', 15, 'right');
    const newDiv1 = new Options(600, 'red', 15, 'left', 200);

    newDiv.createDiv();
    newDiv1.createDiv();

    const allDiv = document.querySelectorAll('div');

    console.log(allDiv);

    let content = `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
    Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
    В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
    используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил 
    без заметных изменений пять веков, но и перешагнул в электронный дизайн. 
    Его популяризации в новое время послужили публикация листов Letraset с образцами 
    Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа 
    Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`;

    allDiv[0].textContent = content;
    allDiv[1].textContent = content;

});

