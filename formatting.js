
exports.refactoredInput = input => {
    let trimInput = whiteSpaceOut(input);
    let newArr = trimInput.split(' ');

    let firstCapInput = newArr.map(el => capitalLetter(el))
    let result = firstCapInput.join(' ');
    return result
}

const whiteSpaceOut = input => {
    let cleanInput = input.trim();
    return cleanInput;
}

const capitalLetter = input => {
    let capsInput = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
    return capsInput;
}
