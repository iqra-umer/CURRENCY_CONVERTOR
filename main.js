import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.81,
    JPY: 154.56,
    CAD: 1.37,
    AUD: 1.56,
    INR: 83.40,
    CNY: 7.24,
    HKD: 7.83,
    PKR: 278.5 //pakistani doller
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
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
