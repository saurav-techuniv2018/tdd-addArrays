//TEST addArrays
console.log('Test for arrays of equal length containing only numbers:',
compareArrays(addArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [7, 9, 11, 13, 15]));

function compareArrays(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) { return false; }
    for (let i = 0; i < firstArray.length; ++i) {
        if (firstArray[i] !== secondArray[i]) { return false; }
    }
    return true;
}