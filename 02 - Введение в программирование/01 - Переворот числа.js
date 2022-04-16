//Реализуйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

const reverseInt = (num) => {
    if (typeof num != 'number') return NaN;
    let str = String(Math.abs(num));
    let i = str.length - 1;
    let rev = '';
    while (i != -1) {
        rev += str[i];
        --i;
    }
    num > 0 ? result = Number(rev) : result = -Number(rev);
    return result;
}