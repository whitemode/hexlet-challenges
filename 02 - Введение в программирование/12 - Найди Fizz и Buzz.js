//Реализуйте функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:
//Если число делится без остатка на 3, то вместо него выводится слово Fizz;
//Если число делится без остатка на 5, то вместо него выводится слово Buzz;
//Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz;
//В остальных случаях выводится само число.

const fizzBuzz = (begin, end) => {
    for (i = begin; i <= end; i += 1) {
        (i % 3 === 0)&&(i % 5 === 0) ? console.log('FizzBuzz') :
        (i % 3 === 0) ? console.log('Fizz') :
        (i % 5 === 0) ? console.log('Buzz') : console.log(i);
    }
}
