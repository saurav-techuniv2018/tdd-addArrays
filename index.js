function verifyNumber(inputNumber) {
    let check = typeof inputNumber === 'number' &&
        inputNumber > -Infinity &&
        inputNumber < Infinity;
    return check;
}

function verifyArray(inputArray) {
    if (!inputArray) {
        console.log('LOG: Input passed was invalid.');
        return false;
    }

    for (let i = 0; i < inputArray.length; ++i) {
        if (!verifyNumber(inputArray[i])) {
            console.log('LOG: Input passed contains invalid element.');
            return false;
        }
    }
    return true;
}

function verifyAddArraysInput(firstArray, secondArray) {
    let checkFirst = verifyArray(firstArray);
    if (!checkFirst) {
        return false;
    }
    let checkSecond = verifyArray(secondArray);
    if (!checkSecond) {
        return false;
    }
    if (firstArray.length !== secondArray.length) {
        console.log('LOG: Arrays passed are of different length.');
        return false;
    }
    return true;
}

function addArrays(firstArray, secondArray) {
    let check = verifyAddArraysInput(firstArray, secondArray);

    if (!check) { return null; }

    let sumArray = [];
    for (let i = 0; i < firstArray.length; ++i) {
        sumArray[i] = firstArray[i] + secondArray[i];
    }
    return sumArray;
}

//TEST verifyNumber
console.log('Test a valid number 4:',
    verifyNumber(4));
console.log('Test for null:',
    verifyNumber(null) === false);

//TEST verifyArray
console.log('Test for array containing only numbers:',
    verifyArray([1, 2, 3]));
console.log('Test for null:',
    verifyArray(null) === false);

//TEST verifyAddArraysInput
console.log('Test for arrays of same length',
    verifyAddArraysInput([1, 2, 3], [3, 4, 5]));
console.log('Test for arrays of different length',
    verifyAddArraysInput([1, 2, 3], [3, 4, 5, 6]) === false);

//TEST addArrays
console.log('Test for arrays of equal length containing only numbers:',
    compareArrays(addArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [7, 9, 11, 13, 15]));
console.log('Test for arrays of different length containing numbers:',
    (addArrays([3, 4, 5], [6, 7, 8, 9, 10]) === null));
console.log('Test for arrays containing invalid values:',
    addArrays([1, {}, 3], [4, 5, 6]) === null);
console.log('Test for call without arguments:',
    addArrays() === null);
console.log('Test for arrays with NaN and Infinity:',
    addArrays([1, 2, NaN], [2, 3, 4]) === null);
console.log('Test with arguments as NaN:',
    addArrays(NaN, NaN) === null);

function compareArrays(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) { return false; }
    for (let i = 0; i < firstArray.length; ++i) {
        if (firstArray[i] !== secondArray[i]) { return false; }
    }
    return true;
}