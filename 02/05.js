//Реализуйте функцию, которая принимает аргумент n и возвращает разницу между
//квадратом суммы и суммой квадратов первых n натуральных чисел.

const sumSquareDifference = n => {
    let sumOfPow = 0;
    let powOfSum = 0;
    let sum = 0;
    
    for (let i = 1; i <= n; i += 1) {
        sumOfPow += i ** 2;
        sum += i;
    }

    powOfSum = sum ** 2;

    return (powOfSum - sumOfPow);
}
