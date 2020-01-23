'use strict';
/*Задание 7 - дополнительное, выполнять не обязательно
Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.*/

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        const transactions = {
            id: Date.now(),
            // id: this.transactions.length + 1, this case for checking method getTransactionDetails
            type,
            amount
        }
        return transactions;
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, 'deposit'));
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (this.balance < amount) {
            console.log('Cнятие такой суммы не возможно, недостаточно средств!');
        } else {
            this.balance -= amount;
            this.transactions.push(this.createTransaction(amount, 'withdraw'));
        }
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        let searchTransactionObj = 0;
        for (const obj of this.transactions) {
            if (obj['id'] === id) {
                searchTransactionObj = obj;
            }
        }
        if (searchTransactionObj !== 0) {
            return searchTransactionObj;
        }
        return 'Wrong id, please try again.'
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let totalAmount = 0;
        for (const obj of this.transactions) {
            if (obj['type'] === type) {
                totalAmount += obj['amount'];
            }
        }
        return totalAmount;
    },
};

account.deposit(100);
account.deposit(1000);
account.withdraw(300);
account.deposit(500);
account.deposit(400);
account.withdraw(350);
account.deposit(5000);
account.withdraw(100);
account.deposit(300);
account.withdraw(3000);

console.log(account.getBalance());
console.log(account.getTransactionDetails(1579808189144));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

console.log(account.transactions);