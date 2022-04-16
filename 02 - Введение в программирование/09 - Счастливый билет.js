//Реализуйте функцию, проверяющую является ли номер счастливым (номер — всегда строка).
//Функция должна возвращать true, если билет счастливый, или false, если нет.

const isHappyTicket = num => {
    if (num.length % 2 != 0) return null;

    let sumOfHalf1 = 0;
    let sumOfHalf2 = 0;
    const halfIndex = Math.round(num.length / 2);
    
    for (let i = 0; i != halfIndex; i += 1) {
        sumOfHalf1 += Number(num[i]);
    }
    for (let i = halfIndex; i != num.length; i += 1) {
        sumOfHalf2 += Number(num[i]);
    }
    
    return sumOfHalf1 === sumOfHalf2 ? true : false;
}
