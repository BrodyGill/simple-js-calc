function calc(o, n1, n2){
    const num1 = n1;
    const num2 = n2;
    let solution;
    switch(o){
        case "add":
            solution = num1 + num2;
            return num1+" + "+num2+" = "+solution;
        case "subtract":
            solution = num1 - num2;
            return num1+" - "+num2+" = "+solution;
        case "multiply":
            solution = num1 * num2;
            return num1+" * "+num2+" = "+solution;
        case "divide":
            solution = num1 / num2;
            return num1+" / "+num2+" = "+solution;
        default:
            return "Error Wrong Operator Type."
    }
}
console.log("Simple Calculator");
const prompt = require("prompt-sync")({sigint:true});
let op = prompt("Enter an operator add, subtract, multiply, or divide: ",null);
let numb1 = prompt("Enter a number: ", "0");
let numb2 = prompt("Enter a number: ","0");
console.log(calc(op,parseInt(numb1),parseInt(numb2)));
