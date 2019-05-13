'use strict';

const appData = {
    budget: 0,
    timeData: new Date(),
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
};

const budget = parseInt(
    prompt('Ваш бюджет на месяц ?', '20000')
    );
appData.budget = budget;

console.log(
    `Ваш бюджет на месяц 
    ${budget} рублей.`);

const time = new Date();
time.setTime(
    Date.parse(prompt('Введите дату в формате YYYY-MM-DD', '2019-05-13'))
    );
appData.timeData = time;

console.log(
    'Вы ввели дату ',
    appData.timeData.getFullYear(), 
    appData.timeData.getMonth() + 1, 
    appData.timeData.getDate()
    );

const itemOfExpenditure1 = prompt('Введите обязательную статью расходов в этом месяце', 'Питание');
const theSizeitemOfExpenditure1 = parseInt(prompt('Во сколько обойдется?', '10000'));

    appData.expenses.itemOfExpenditure1 = {
        name: itemOfExpenditure1,
        quantity: theSizeitemOfExpenditure1 
        };

const itemOfExpenditure2 = prompt('Введите обязательную статью расходов в этом месяце', 'Квартплата');
const theSizeitemOfExpenditure2 = parseInt(prompt('Во сколько обойдется?', '5000'));

    appData.expenses.itemOfExpenditure2 = { 
        name: itemOfExpenditure2,  
        quantity: theSizeitemOfExpenditure2 
        };

const dayBudget = parseInt((appData.budget - appData.expenses.itemOfExpenditure1.quantity - appData.expenses.itemOfExpenditure2.quantity) / 30);

console.log(
    `Ваш ежедневный бюджет составляет 
    ${dayBudget} рубля.`
    );

console.log(appData);

alert(
    `Ваш ежедневный бюджет составляет 
    ${dayBudget} рубля.`
    );