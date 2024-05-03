import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\n welcome to currency converter \n"));
const currency = {
    USD: 1,
    PKR: 280,
    INR: 83.42,
    EUR: 0.93,
    AED: 3.67,
    GBP: 0.80,
    CAD: 1.3,
    AUD: 1.63
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter Your From Currency",
        choices: ["USD", "PKR", "INR", "EUR", "AED", "GBP", "CAD", "AUD"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter Your To Currency",
        choices: ["USD", "PKR", "INR", "EUR", "AED", "GBP", "CAD", "AUD"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
let fromcurrency = currency[user_answer.from];
let tocurrency = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromcurrency;
let convertcurrency = baseamount * tocurrency;
console.log(`converted Amount = ${chalk.green(convertcurrency.toFixed(2))}`);
