'use strict';
/*Задание 4
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
 */
const countTotalSalary = function (employees) {
    // твой код
    // let totalAmount = 0;
    // for (const emp in employees) {
    //     totalAmount += employees[emp];
    // }
    // return totalAmount;

    // or
    const empl = Object.values(employees);
    const total = empl.reduce((sum, next) => sum + next, 0);
    return total;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400