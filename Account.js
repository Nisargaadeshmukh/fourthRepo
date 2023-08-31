const Transaction = require('./Transaction'); 

class Account {
    constructor(accountNo) {
        this.accountNo = accountNo;
        this.balance = 1000;
        this.transactions = []; // each time a trans like deposit or withdraw is made then a new transaction obj is created and added to this arr
    }

    withdraw(amount) {
        const minimumBalance = 1000; // Minimum balance required
        if (this.balance - amount < minimumBalance) {
            throw new Error('Insufficient balance after withdrawal');
        }
        this.balance -= amount;

        // Create a new transaction and add it to the transactions list
        const transaction = new Transaction(new Date(), this.accountNo);
        this.transactions.push(transaction); // Add the transaction to the array
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }
        this.balance += amount;

        // Create a new transaction obj 
        const transaction = new Transaction(new Date(), this.accountNo);
        this.addTransaction(transaction); // Use the addTransaction method to add the transaction
    }

    addTransaction(transaction) {
        this.transactions.push(transaction); // Add transaction to the list
    }
}

module.exports = Account;
