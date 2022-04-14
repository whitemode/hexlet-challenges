//Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в
//ином случае.

const isPerfect = num => {
    let sum = 0;

    for (let n = 1; n < num; n += 1) {
        if (num % n === 0) sum += n;
    }

    if (num === sum) return true;
    else return false;
}
