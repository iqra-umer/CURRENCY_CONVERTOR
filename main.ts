import inquirer from "inquirer";

const currency: any = {
    USD: 1,          //DOLLER
    EUR: 0.94,       //EURO
    GBP: 0.81,       // BRITISH PONDS
    JPY: 154.56,     // JAPENESS YEN
    CAD: 1.37,       // CANADIAN DOLLER
    AUD: 1.56,       //AUSTRALIAN DOLLER
    INR: 83.40,      //INDIAN DOLLER
    CNY: 7.24,       //CHINESE YUAN
    HKD: 7.83,       //HONG KONG DOLLAR
    PKR: 278.5       //pakistani doller
};

let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "From which currency do you want to convert?",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "INR", "CNY", "HKD", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "To which currency do you want to convert?",
        choices: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "INR", "CNY", "HKD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "ENTER YOUR AMOUNT"
    }
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount =  user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
