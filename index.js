function addArrays(firstArray, secondArray) {
    let sumArray = [];
    for (let i = 0; i < firstArray.length; ++i) {
        sumArray[i] = firstArray[i] + secondArray[i];
    }
    return sumArray;
}

//TEST addArrays
console.log('Test for arrays of equal length containing only numbers:',
compareArrays(addArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), [7, 9, 11, 13, 15]));
console.log('Test for arrays of different length containing numbers:',
(addArrays([3, 4, 5], [6, 7, 8, 9, 10]) === null));

function compareArrays(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) { return false; }
    for (let i = 0; i < firstArray.length; ++i) {
        if (firstArray[i] !== secondArray[i]) { return false; }
    }
    return true;
}