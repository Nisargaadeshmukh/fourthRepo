// user deoit , withdraw , tarnsfer
//deposit : (wmount , sccid)
// transaction class obj (date , selfid   )
//acc.transctionlist .push(obj)
//transfer(amount , selfaccountid , cusid ,receiveraccountid)

class Transaction {
    constructor(date, accountId) {
        this.date = date;
        this.accountId = accountId;
    }
}

module.exports = Transaction;
