//Реализуйте функцию, которая принимает на вход строку, состоящую только из открывающих и закрывающих 
//круглых скобок, и проверяет, является ли эта строка корректной. Пустая строка считается корректной.

const areBracketsBalanced = str => {
    let count = 0;

    for (i = 0; i != str.length; i += 1) {
        if (str[i] === '(') count += 1;
        if (str[i] === ')') count -= 1;
        if (count === -1) return false;
    }

    return count === 0 ? true : false;
}
