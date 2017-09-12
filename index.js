// index.js

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('What is your first input', (input1, input2) => {
    rl.question('What is your second input', (input2) => {
        var result = input1 + input2;
        console.log(`The result of ${input1} + ${input2} = ${result}`);
    });
});