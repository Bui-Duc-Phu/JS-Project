

// 1. Write the function to calculate the combination (Ckn)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
function combination(n, k) {
    if (k < 0 || k > n) return 0;
    return factorial(n) / (factorial(k) * factorial(n - k));
  }
console.log("\ncombination = "+combination(2, 5)); 



// 2. Write the function to get a random integer between 2 numbers: min, max;
function getRandomInteger(min, max) {
    let totalNumbers = max - min + 1;
    let randomIndex = Math.floor(Math.random() * totalNumbers);
    let result = min + randomIndex;
    return result;
}
console.log('\ngetRandomInteger = '+getRandomInteger(1, 9)); 


// 3. Write the function get a random element from an arrays.
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
const fruits = ["apple", "banana", "cherry", "mango"];
const randomFruit = getRandomElement(fruits);
console.log('\ngetRandom element from an arrays = '+randomFruit);  


// 4. Given two arrays of integers, find which elements in the second array are missing from the first array.
function findMissingElements(arr1, arr2) {
    return arr2.filter(element => !arr1.includes(element)); // có thể sử dụng set cho arr1 => set1.has nhanh hơn include 
}
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 5, 6];
console.log(findMissingElements(arr1, arr2)); 




  