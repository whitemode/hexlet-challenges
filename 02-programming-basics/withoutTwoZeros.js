//Реализуйте функцию, которая принимает на вход два аргумента - количество нулей и количество
//единиц, и определяет сколько есть способов размещения этих нулей и единиц так,
//чтобы не было двух нулей идущих подряд.

const withoutTwoZeros = (zeros, ones) => {
    if (zeros === 0) return ones;
    if (zeros > ones + 1) return 0;

    const factorial = n => {
        return n === 0 ? 1 : n * factorial(n - 1);
    }

    const withoutTwoZeros = factorial(ones + 1) / (factorial(zeros) * factorial(ones + 1 - zeros));
    
    return withoutTwoZeros;
}
