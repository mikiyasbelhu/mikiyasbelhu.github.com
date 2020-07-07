"use strict";
/* global describe */
/* global it */
/* global assert */

describe("bank", function() {

    const bank = new Bank();

    const accountNumber = bank.addAccount();
    bank.addSavingsAccount(0.007);
    bank.addCheckingAccount(100);

    it("check account number for a new account", function() {
        assert.equal(0, accountNumber);
    });

    it("shows the list of the accounts", function() {
        assert.equal("Account 0: balance 0 \nSavingsAccount 1: balance 0: interest 0.007 \nCheckingAccount 2: balance 0: overdraft limit 100 \n", bank);
    });

    it("executes end of month task for accounts in the bank", function() {
        assert.equal("Interest added SavingsAccount 1: balance 0: interest 0.007", bank.endOfMonth());
    });

});

describe("account", function() {

    const account = new Account(Bank.nextNumber);

    it("throw an error when trying to deposit a negative value", function() {
        assert.throw(() => account.deposit(-100), RangeError, "Deposit amount has to be greater than zero");
    });

    it("deposit and get the deposited amount in the balance", function() {
        account.deposit(100);
        assert.equal(100, account.getBalance());
    });

    it("throw an error when trying to withdraw a negative value", function() {
        assert.throw(() => account.withdraw(-100), RangeError, "Withdraw amount has to be greater than zero");
    });

    it("throw an error when trying to withdraw a value greater than the balance", function() {
        assert.throw(() => account.withdraw(200), Error, "Insufficient funds");
    });

    it("displays the corrent account values", function() {
        assert.equal("Account 3: balance 100", account.toString());
    });

});

describe("savings account", function() {

    let savingsAccount = new SavingsAccount(Bank.nextNumber, 0);

    it("set and get interest rate for a savings account", function() {
        savingsAccount.setInterest(0.007);
        assert.equal(0.007, savingsAccount.getInterest());
    });

    it("add interest for a savings account", function() {
        savingsAccount.deposit(100);
        assert.equal(0.007000000000000001, savingsAccount.addInterest());
    });

    it("displays the corrent account values", function() {
        assert.equal("SavingsAccount 3: balance 100.007: interest 0.007", savingsAccount.toString());
    });

    it("adds interest at end of the month", function() {
        assert.equal("Interest added SavingsAccount 3: balance 100.01400049: interest 0.007", savingsAccount.endOfMonth());
    });

});

describe("checking account", function() {

    let checkingAccount = new CheckingAccount(Bank.nextNumber, 0);

    it("set and get overdraft for a checking account", function() {
        checkingAccount.setOverdraft(500);
        assert.equal(500, checkingAccount.getOverdraft());
    });

    it("displays the corrent account values", function() {
        assert.equal("CheckingAccount 3: balance 0: overdraft limit 500", checkingAccount.toString());
    });

    it("throw an error when trying to withdraw a value greater than the over draft limit", function() {
        assert.throw(() => checkingAccount.withdraw(600), Error, "Insufficient funds");
    });

    it("shows warning for negetive balance at end of the month", function() {
        checkingAccount.withdraw(100);
        assert.equal("Warning, low balance CheckingAccount 3: balance -100: overdraft limit 500", checkingAccount.endOfMonth());
    });

});