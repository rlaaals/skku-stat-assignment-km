function sortarray(numbers){
    num2 = numbers.sort(function(a,b){
        return a-b;
    })
    return num2
}
function med(numbers){
    numbers = sortarray(numbers)
    len = numbers.length
    result = 0
    
    if (len % 2 === 0){
        result = (num2[len/2 -1] + num2[len/2])/2
    }
    else {
        result = num2[parseInt(len/2)]
    }
    return result;
}
function quartile1(numbers){
    numbers = sortarray(numbers)
    len = numbers.length
    num1 = [];
    if (len % 2 === 0){
        num1 = numbers.slice(0, len/2)
    }
    else {
        num1 = numbers.slice(0,parseInt(len/2))
    }
    return med(num1);
}
function quartile2(numbers){
    numbers = sortarray(numbers)
    len = numbers.length
    num2 = [];
    if (len % 2 === 0){
        num2 = numbers.slice(len/2, len)
    }
    else {
        num2 = numbers.slice(parseInt(len/2)+1, len)
    }
    return med(num2);
}
function iqr(numbers){
    return quartile2(numbers)-quartile1(numbers);
}
function outlier(numbers){
    let IQR = iqr(numbers)
    let Q1 = quartile1(numbers)
    let Q2 = quartile2(numbers)

    let outlier1 = Q1 - 1.5*IQR
    let outlier2 = Q2 + 1.5*IQR

    for (var value of numbers){
        if (value < outlier1){
            console.log(value)
        }
        if (value > outlier2){
            console.log(value)
        }
    }
    return 0;
}

module.exports={
    med,
    iqr,
    outlier,};