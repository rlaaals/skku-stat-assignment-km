#!/usr/bin/env node
const lib = require("./lib")

if (process.argv.length <= 3){
    console.log("IP")
    process.exit(1)
}

let command = process.argv[2]

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some(isNaN)) {
    console.log("Some arguments are not numbers!")
    process.exit(1)
}

let result;
switch (command){
    case "med":
        result = lib.med(numbers);
        console.log(result)
        break;
    case "iqr":
        result = lib.iqr(numbers);
        console.log(result)
        break;
    case "outlier": 
        lib.outlier(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1)
}

