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

'use strict';

 let start = document.getElementById('start'),
     budgetValue = document.querySelector('.budget-value'),
     daybudgetValue = document.querySelector('.daybudget-value'),
     lavelValue = document.querySelector('.level-value'),
     expensesValue = document.querySelector('.expenses-value'),
     incomeValue = document.querySelector('.income-value'),
     monthsavingsValue = document.querySelector('.monthsavings-value'),
     yearsavingsValue = document.querySelector('.yearsavings-value'),
     expensesItems = document.getElementsByClassName('expenses-item'),
     expensesItemButton = document.querySelector('.expenses-item-btn'),
     optionalExpensesButton = document.querySelector('.optionalexpenses-btn'),
     countBudgetButton = document.querySelector('.count-budget-btn'),
     optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
     chooseIncome = document.querySelector('#income'),
     checksavings = document.querySelector('#savings'),
     chooseSum = document.querySelector('#sum'),
     choosePercent = document.querySelector('#percent'),
     yearValue = document.querySelector('.year-value'),
     monthValue = document.querySelector('.month-value'),
     dayValue = document.querySelector('.day-value');


 testLog();

 function testLog() {
    console.log(start);
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
    console.log(checksavings);
    console.log(chooseSum);
    console.log(choosePercent);
    console.log(yearValue);
    console.log(monthValue);
    console.log(dayValue);
 }

