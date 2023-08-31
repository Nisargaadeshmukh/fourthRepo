class Customer {
    constructor(customerId, firstName, lastName) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.accounts = [];
    }

    createAccount(accountNo) { //c1.createacc(as customer can have more than one account)
        const newAccount = new Account(accountNo); //new acc obj
        newAccount.deposit(1000); // Set initial balance to Rs. 1000
        this.accounts.push(newAccount); //add acc to acc list
        return newAccount;
    }

    // Find an account by accountNo (c1.findacc) 
    findAccount(accountNo) {
        for (let index = 0; index < this.accounts.length; index++) {
            if (accountNo == this.accounts[index].accountNo) {
                return [this.accounts[index], index];
            }
        }
        return [null, -1];
    }

    withdraw(accountNo, amount) {
        const account = this.findAccount(accountNo); // retrieving the acc obj 
        if (!account) {
            throw new Error('Account not found');
        }

        if (amount <= 0 || account.balance < amount) {
            throw new Error('Invalid withdrawal amount');
        }

        account.withdraw(amount); //withdraw method on found acc obj by find acc method 
    }

    deposit(accountNo, amount) {
        const account = this.findAccount(accountNo);
        if (!account) {
            throw new Error('Account not found');
        }

        if (amount <= 0) {
            throw new Error('Invalid deposit amount');
        }

        account.deposit(amount);
    }

    transfer(fromAccountNo, toAccountNo, amount) {
        const fromAccount = this.findAccount(fromAccountNo);
        const toAccount = this.findAccount(toAccountNo);

        if (!fromAccount || !toAccount) {
            throw new Error('Accounts not found');
        }

        const minimumBalance = 1000; // Minimum balance required

        if (fromAccount.balance - amount < minimumBalance) {
            throw new Error('Insufficient balance for transfer');
        }

        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
    }
    
    internalTransfer(fromAccountNo, toAccountNo, amount) {
        const fromAccount = this.findAccount(fromAccountNo);
        const toAccount = this.findAccount(toAccountNo);
        
        if (!fromAccount || !toAccount) {
            throw new Error('Accounts not found');
        }
        
        if (fromAccount === toAccount) {
            throw new Error('Cannot transfer to the same account');
        }
        
        if (amount <= 0 || fromAccount.balance < amount) {
            throw new Error('Invalid transfer amount');
        }
        
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
    }

    
    getTotalBalance() {
        let totalBalance = 0;
        for (const account of this.accounts) {
            totalBalance += account.balance;
        }
        return totalBalance;
    }

    getIndividualBalances() {
        const balances = {};
        for (const account of this.accounts) {
            balances[account.accountNo] = account.balance;
        }
        return balances;
    }








}


module.exports = Customer;
const Account = require('./Account');

