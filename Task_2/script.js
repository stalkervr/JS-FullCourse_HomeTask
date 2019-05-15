/* #region  Tasks */
// Вопросы к этому заданию
// Какое будет выведено значение: let x = 5; alert( x++ ); ?

// {
//     let x = 5;
//     alert( x++ );
// }

// {
//     let x = 5;
//     alert( ++x );
// }

// Чему равно такое выражение: [ ] + false - null + true ?

// {
//     let par = [] + false - null + true; // NaN
//     alert(par);
// }

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// {
//     let y = 1; 
//     let x = y = 2; 
//     alert(x);
// }

// Чему равна сумма [ ] + 1 + 2? // 12

// {
//     let sum = [] + 1 + 2;
//     alert(sum);
//     alert(typeof(sum));
// }

// Что выведет этот код: alert( "1"[0] )?  // 1

// {
//     alert("1"[0]);
// }

// Чему равно 2 && 1 && null && 0 && undefined ? // null

// {
//     alert(2 && 1 && null && 0 && undefined);
// }

// Есть ли разница между выражениями? !!( a && b ) и (a && b)? нет разницы

// {
//     let a = true;
//     let b = true;
//     let x = !!(a && b);

//     console.log(x);

//     let y = (a && b);

//     console.log(y);

// }

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ? // 3

//alert( null || 2 && 3 || 4 );

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? 
// нет сравнивается адресс в памяти

// const a = [1, 2, 3]; 
// const b = [1, 2, 3];

// if (a === b){
//     console.log('true');
// }
// else {
//     console.log('false');
// }

// Что выведет этот код: alert( +"Infinity" ); ?

//alert( +"Infinity" ); // Infinity

// Верно ли сравнение: "Ёжик" > "яблоко"?

//console.log('Ёжик' > 'яблоко'); // Да сравниваются две строки

// Чему равно 0 || "" || 2 || undefined || true || falsе ?

// let ttt = 0 || "" || 2 || undefined || true || false; // 2

// console.log(ttt);
/* #endregion */

/* #region  Ответы преподователя */
// Какое будет выведено значение: let x = 5; alert( x++ ); ?

// Выведет 5. Это задача на разницу между постфиксной и префиксной формой инкремента/ декремента.

// Чему равно такое выражение: [ ] + false - null + true ?

// NaN - Not a number.

// Пустой массив преобразуется в пустую строку.

// Далее идет сложение пустой строки и false - получается "false"

// Когда мы пытаемся от строки отнять что-то - выполняется математически неверная операция и мы получаем NaN

// Это задача на динамическую типизацию в JS (по простому - преобразование типов данных один в другой)

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// Выведет 2.

// В этой части y = 2 мы присваиваем переменной y значение 2, а затем это же значение идет в переменную  x

// Чему равна сумма [ ] + 1 + 2?

// Выведет "12"

// Пустой массив превращается в пустую строку, а дальше при сложении числа со строкой - все преобразуется в тип данных строка.

// Что выведет этот код: alert( "1"[0] )?

// Выведет 1, так как это первый символ в этой строке.

// Чему равно 2 && 1 && null && 0 && undefined ?

// Выведет null, так как оператор И возвращает первое ложное значение.

// В логическом контексте в JS только 5 сущностей представляют собой неправду (false) - это 0, пустая строка "" , null , undefined , NaN

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// Есть. !!  превращает любую конструкцию в Boolean тип данных

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// Выведет 3. Почему так? Мы разбиваем этот кусочек кода на 3 части.

// Слева, в операции ИЛИ - из двух частей вернет 2. ИЛИ возвращает всегда первое правдивое утверждение.

// Справа ИЛИ вернет 3.

// А оператор И сравнит 2 и 3 и вернет последнее - 3ку.

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// Нет. Это разные массивы, просто с одинаковыми значениями.

// Что выведет этот код: alert( +"Infinity" ); ?

// Вернет Infinity. Оператор + перед строкой превратит её в число.

// Верно ли сравнение: "Ёжик" > "яблоко"?

// Нет, так как в соответствии с unicode кодировкой ё стоит после я.

// Чему равно 0 || "" || 2 || undefined || true || falsе ?

// Вернет 2, так как это первое правдивое значение (true)
/* #endregion */

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
            let opt = prompt('Старья необязательных расходов ?', '');
            appData.optionalExpenses[i] = opt;
        }
    },

    chooseIncome: function () {
        let items = prompt('Что принесёт дополнительный доход ? (Перечислите через запятую)', '');
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё ?', ''));
            appData.income.sort();
    }
};

/* #region   */
// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", 'ddd'),
//             b = +prompt("Во сколько обойдется?", '5000');

//         if ((typeof (a) === 'string' && (typeof (a) != null)) && (typeof (b) != null &&
//                 a != '' && b != '' && a.length <= 50)) {
//             console.log('done');
//             appData.expenses[a] = b;
//         } 
//         else {
//             const test = confirm('Введены не корректные данные, повторить ввод ?');
//             if (test) {
//                 i--;
//             } 
//             else {
//                 continue;
//             }
//         }
//     }
// }
/* #endregion */

appData.chooseExpenses();

appData.detectDayBudget();

appData.checkSavings();

appData.detectLavel();

console.log(appData);

// appData.moneyPerDay = (appData.budget / 30).toFixed(2);

// console.log(appData);

//alert('Дневной бюджет составляет: ' + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log("Это минимальный уровень достатка!");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Это средний уровень достатка!");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Это высокий уровень достатка!");
// } else {
//     console.log("Произошла ошибка");
// }

/* #region   */
// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt('Какова сумма накоплений ?'),
//             percent = +prompt('Под какой процент ?');

//         appData.monthIncome = (save/100/12)*percent;
//         alert('Доход в месяц с вашего депозита составляет: ' + appData.monthIncome);
//     }
// }
/* #endregion */

//appData.checkSavings();