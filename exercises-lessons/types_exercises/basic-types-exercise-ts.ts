type ObjectBank = { money : number, deposit: (v: number) => void }

let bankAccount: ObjectBank = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};
 
let myself: {
    // ts pattern
    name: string,
    bankAccount: ObjectBank,
    hobbies: string[]
} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
console.log(myself);

/**
 * Should have no error and output in js file after tsc cmd:
 * 
 * 
 * var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
    };
    var myself = {
        name: "Max",
        bankAccount: bankAccount,
        hobbies: ["Sports", "Cooking"]
    };
    myself.bankAccount.deposit(3000);
    console.log(myself);

 */