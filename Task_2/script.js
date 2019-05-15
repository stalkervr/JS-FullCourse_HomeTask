

let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?", '20000'),
        time = prompt('Введите дату в формате YYYY-MM-DD', '2019-05-14');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет на месяц?", '20000');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,

    chooseExpenses: function () {
        for (let i = 0; i < 1; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", 'ddd'),
                b = +prompt("Во сколько обойдется?", '5000');

            if ((typeof (a) === 'string' && (typeof (a) != null)) && (typeof (b) != null &&
                    a != '' && b != '' && a.length <= 50)) {
                appData.expenses[a] = b;
                console.log('Статья расходов добавлена.');
            } else {
                const test = confirm('Введены не корректные данные, повторить ввод ?');
                if (test) {
                    i--;
                } else {
                    continue;
                }
            }
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений ?'),
                percent = +prompt('Под какой процент ?');

            appData.monthIncome = ((save / 100 / 12) * percent).toFixed(2);
            console.log('Накопления добавлены.');
            alert('Доход в месяц с вашего депозита составляет: ' + appData.monthIncome);
        }
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Дневной бюджет составляет: ' + appData.moneyPerDay);
    },

    detectLavel: function (){
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },

    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let a = prompt('Старья необязательных расходов ?', ''),
                b = +prompt("Во сколько обойдется?", '');
            appData.optionalExpenses[i] = a;

            if ((typeof (a) === 'string' && (typeof (a) != null)) && (typeof (b) != null &&
                    a != '' && b != '' && a.length <= 50)) {
                appData.optionalExpenses[a] = b;
                console.log('Статья расходов добавлена.');
            } else {
                const test = confirm('Введены не корректные данные, повторить ввод ?');
                if (test) {
                    i--;
                } else {
                    continue;
                }
            }
        }
    },

    chooseIncome: function () {
        let items = prompt('Что принесёт дополнительный доход ? (Перечислите через запятую)', '');
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё ?', ''));
            appData.income.sort();
        
            appData.income.forEach(function(item, i){
             console.log('Способы доп. заработка: ' + (i + 1) + ' - ' + item);
             alert('Способы доп. заработка: ' + (i + 1) + ' - ' + item);
            });
    }
};

appData.chooseExpenses();

appData.detectDayBudget();

appData.checkSavings();

appData.detectLavel();

for (let key in appData){
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


console.log(appData);
