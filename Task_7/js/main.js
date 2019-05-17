/* #region   */
// 1) Скачать архив, прикрепленный к уроку

// 2) Задание по проекту

// ·        Получить кнопку "Начать расчет" через id

// ·        Получить все блоки в правой части программы через классы 
//          (которые имеют класс название-value, 
//           начиная с <div class="budget-value"></div> 
//           и заканчивая <div class="yearsavings-value"></div>)

// ·        Получить поля(input) c обязательными расходами через класс.
//           (class=”expenses-item”)

// ·        Получить кнопки “Утвердить” и “Рассчитать” через Tag, 
//          каждую в своей переменной. 

// ·        Получить поля для ввода необязательных расходов 
//          (optionalexpenses-item) при помощи querySelectorAll

// ·        Получить оставшиеся поля через querySelector 
//          (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

// 3) Проверить, чтобы все работало и не было ошибок в консоли

// 4) Добавить папку с уроком на свой GitHub

// Вопросы к этому заданию
// Как можно изменить размер шрифта элемента при помощи JS?

// Скачать файлы ресурсов
/* #endregion */

'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    lavelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItems = document.getElementsByClassName('expenses-item'),
    expensesItemButton = document.querySelector('.expenses-item-btn'),////
    optionalExpensesButton = document.querySelector('.optionalexpenses-btn'),
    countBudgetButton = document.querySelector('.count-budget-btn'),
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),////
    choosePercent = document.querySelector('#percent'),////
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;


startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-05-14');
    money = +prompt("Ваш бюджет на месяц?", '20000');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет на месяц?", '20000');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(2);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemButton.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[ i ].value,
            b = expensesItems[ ++i ].value;

        if ((typeof (a) === 'string' && (typeof (a) != null)) && (typeof (b) != null &&
                a != '' && b != '' && a.length <= 50)) {
            appData.expenses[a] = b;
            sum += +b; // унарный плюс чтобы получить число а не строку
            console.log('Обязательная статья расходов добавлена.');
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesButton.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
    
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetButton.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        lavelValue.textContent = 'Это минимальный уровень достатка!';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        lavelValue.textContent = 'Это средний уровень достатка!';
    } else if (appData.moneyPerDay > 2000) {
        lavelValue.textContent = 'Это высокий уровень достатка!';        
    } else {
        lavelValue.textContent = 'Произошла ошибка';       
    }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {

     appData.savings = !appData.savings;

});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        
        appData.monthIncome = ((sum / 100 / 12) * percent).toFixed(2);
        appData.yearIncome = ((sum / 100) * percent).toFixed(2);

        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent = appData.yearIncome;
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        
        appData.monthIncome = ((sum / 100 / 12) * percent).toFixed(2);
        appData.yearIncome = ((sum / 100) * percent).toFixed(2);

        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent = appData.yearIncome;
    }
});


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,

};

//testLog();

function testLog() {
    console.log(startBtn);
    console.log(budgetValue);
    console.log(daybudgetValue);
    console.log(lavelValue);
    console.log(expensesValue);
    console.log(incomeValue);
    console.log(monthsavingsValue);
    console.log(yearsavingsValue);
    console.log(expensesItems);
    console.log(expensesItemButton);
    console.log(optionalExpensesButton);
    console.log(countBudgetButton);
    console.log(optionalExpensesItems);
    console.log(chooseIncome);
    console.log(checkSavings);
    console.log(chooseSum);
    console.log(choosePercent);
    console.log(yearValue);
    console.log(monthValue);
    console.log(dayValue);
}