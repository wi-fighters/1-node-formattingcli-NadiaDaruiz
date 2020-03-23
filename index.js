// importing the needed functions from the other files 
const { refactoredInput } = require('./formatting');
const { showHelp } = require('./messaging');

// take the input 
let originalInput = process.argv.slice(2);
console.log(originalInput);

// an accumulator to store the refactored input
const args = process.argv.slice(2);

if (args.includes('--help')) {
    showHelp()
}

// store the function in a variable
let finalResult = refactoredInput(args[0]);

console.log(finalResult)




