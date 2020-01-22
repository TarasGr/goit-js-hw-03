'use strict';
/*Задание 2
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.*/
const countProps = function (obj) {
    // This is for practice with loop for .. in

    // let totalNumOfProp = 0;
    // for (const i in obj) {
    //     totalNumOfProp += 1;
    // }
    // return totalNumOfProp;

    // this is shorter
    const total = Object.keys(obj);
    return total.length;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3