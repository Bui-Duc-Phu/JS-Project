// index.js
const readline = require('readline-sync');
const {
    combination,
    getRandomInteger,
    getRandomElement,
    findMissingElements
} = require('./exercise2');




function runAllTestsExercise2() {
    console.log("\nTest combination(n, k):");
    console.log("C(5, 2) =", combination(5, 2));

    console.log("\nTest getRandomInteger(min, max):");
    console.log("Random int from 1 to 10:", getRandomInteger(1, 10));

    console.log("\nTest getRandomElement(arr):");
    const fruits = ["apple", "banana", "cherry", "mango"];
    console.log("Random fruit:", getRandomElement(fruits));

    console.log("\nTest findMissingElements(arr1, arr2):");
    const arr1 = [1, 2, 3, 4];
    const arr2 = [2, 3, 5, 6];
    console.log("Missing in arr1:", findMissingElements(arr1, arr2));
}


while (true) {
    console.log("\n==== MENU ====");
    console.log("1. Run test exercise2");
    console.log("0. Exit");
    const choice = readline.question("Your choice: ");

    switch (choice) {
        case "0":
            console.log("Bye!");
            process.exit();
        case "1":
            runAllTestsExercise2();
            break;
        default:
            console.log("Invalid choice");
    }
}

