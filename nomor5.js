function romanToInt(roman) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 
        'C': 100, 'D': 500, 'M': 1000
    };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanMap[roman[i]];
        const next = romanMap[roman[i + 1]] || 0;
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}
function binarySearch(arr, value, romanToIntFn) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (romanToIntFn(arr[mid]) === value) {
            return mid + 1;
        } else if (romanToIntFn(arr[mid]) < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}
function sortRomanNumerals(romanNumerals) {
    const sortedArray = [];
    for (let roman of romanNumerals) {
        const value = romanToInt(roman);
        const position = binarySearch(sortedArray, value, romanToInt);
        sortedArray.splice(position, 0, roman);
    }
    return sortedArray;
}
const romanNumerals = ["X","III","IX","IV","V","I","VII","II"];
const sortedRomanNumerals = sortRomanNumerals(romanNumerals);
console.log(sortedRomanNumerals);
