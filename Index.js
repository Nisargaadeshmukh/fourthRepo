// const Bank = require('./Bank');
// const Customer = require('./Customer');
// const Transaction = require('./Transaction'); 


// // Create a bank
// const bank = new Bank(1, 'Example Bank', 'EB');
// const bank1 = new Bank(2, "state bank of india" , "SBI")


 
//  // Admin login
//  bank.adminLogin();
 
//  // Create customers and accounts
//  const admin = bank.getAdmin(); // Get the admin user
//  const customer1 = admin.createCustomer(1, 'John', 'Doe');
//  const account1 = customer1.createAccount(101);
//  const account2 = customer1.createAccount(102);
 
//  const customer2 = admin.createCustomer(2, 'Jane', 'Smith');
//  const account3 = customer2.createAccount(201);
 
//---------------------------------------
const Bank = require('./Bank');

// Create a bank instance
const bank = new Bank(1, 'Example Bank', 'EB');

// Admin login
bank.adminLogin();

// Create admin
const admin = bank.createAdmin('Admin', 'User');

// Admin create customers
const customer1 = admin.createCustomer(1, 'John', 'Doe');
const customer2 = admin.createCustomer(2, 'Jane', 'Smith');

// Admin create accounts for customers
const account1 = admin.createAccount(customer1, 101);
const account2 = admin.createAccount(customer1, 102);
const account3 = admin.createAccount(customer2, 201);

// Admin deposit into customer accounts
admin.deposit(customer1, 101, 500);
admin.deposit(customer1, 102, 800);
admin.deposit(customer2, 201, 1000);

// Admin withdraw from customer accounts
admin.withdraw(customer1, 101, 200);
admin.withdraw(customer2, 201, 300);

// Admin transfer between customer accounts
admin.transfer(customer1, 102, customer2, 201, 150);

// Admin view a customer's accounts
const customer1Accounts = admin.viewAccounts(customer1);
const customer2Accounts = admin.viewAccounts(customer2);

console.log('Customer 1 accounts:', customer1Accounts);
console.log('Customer 2 accounts:', customer2Accounts);

// Admin view a customer's total balance
const customer1TotalBalance = admin.viewTotalBalance(customer1);
const customer2TotalBalance = admin.viewTotalBalance(customer2);

console.log('Customer 1 total balance:', customer1TotalBalance);
console.log('Customer 2 total balance:', customer2TotalBalance);

// Admin logout
bank.adminLogout();
