// utils.js

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function combination(n, k) {
    if (k < 0 || k > n) return 0;
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function getRandomInteger(min, max) {
    let totalNumbers = max - min + 1;
    let randomIndex = Math.floor(Math.random() * totalNumbers);
    let result = min + randomIndex;
    return result;
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function findMissingElements(arr1, arr2) {
    return arr2.filter(element => !arr1.includes(element));
}

module.exports = {
    combination,
    getRandomInteger,
    getRandomElement,
    findMissingElements
};


