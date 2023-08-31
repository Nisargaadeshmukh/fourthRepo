const Customer = require('./Customer'); // Move the import here after defining Customer

class Bank {
    constructor(bankId, fullName, abbreviation) {
        this.bankId = bankId;
        this.fullName = fullName;
        this.abbreviation = abbreviation;
        this.customers = [];
        this.adminLoggedIn = false; // Flag to track admin login status
        this.admin = null; // Initialize admin to null
    }


    adminLogin() {
        this.adminLoggedIn = true;
    }

    adminLogout() {
        this.adminLoggedIn = false;
    }

    // Create an admin user
    createAdmin(firstName, lastName) {
        if (this.admin) {
            throw new Error('Admin user already exists');
        }

        this.admin = new Customer( firstName, lastName); 
        return this.admin;
    } 
  createCustomer(customerId, firstName, lastName) {
    if (!this.adminLoggedIn) {
        throw new Error('Only admin can create customers');
    }
    const newCustomer = new Customer(customerId, firstName, lastName); // new obj of customer  
    this.customers.push(newCustomer);
    return newCustomer;
}

 // Get all customers (only admin can do this)
 getAllCustomers() {
    if (!this.adminLoggedIn) {
        throw new Error('Only admin can access all customers');
    }
    return this.customers;
}

   // Delete a customer (only admin can do this)
   deleteCustomer(customerId) {
    if (!this.adminLoggedIn) {
        throw new Error('Only admin can delete customers');
    }

    const [customer, index] = this.findCustomer(customerId);
          //obj of customer

    if (!customer) {
        throw new Error('Customer not found');
    }

    this.customers.splice(index, 1);
}

  // Find a customer by customerId
  findCustomer(customerId) {
    for (let index = 0; index < this.customers.length; index++) {
        if (customerId == this.customers[index].customerId) {
            return [this.customers[index], index];
                   // customer obj based on given custid
        }
    }
    return [null, -1];

}


    // Update a customer's name and/or lastName (only admin can do this)
    updateCustomer(customerId, parameter, newValue) {
        if (!this.adminLoggedIn) {
            throw new Error('Only admin can update customers');
        }

        const [customer, index] = this.findCustomer(customerId);
              //customer obj 

        if (!customer) {
            throw new Error('Customer not found');
        }

        switch (parameter) {
            case 'firstName':
                customer.firstName = newValue;
                break;
            case 'lastName':
                customer.lastName = newValue;
                break;
            default:
                throw new Error('Invalid parameter for update');
        }
    }
    adminLogin() {
        this.adminLoggedIn = true;
    }

    adminLogout() {
        this.adminLoggedIn = false;
    }
}

module.exports = Bank;




    