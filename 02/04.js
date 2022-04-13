//Реализуйте функцию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК.
//Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть
//пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из
//четырех перечисленных выше), то функция должна вернуть null.

const dnaToRna = (dna) => {
    if (dna === '') return '';

    let rna = '';

    for (let i = 0; i != dna.length; i += 1) {
        if (dna[i] === 'G') rna += 'C';
        else if (dna[i] === 'C') rna += 'G';
        else if (dna[i] === 'T') rna += 'A';
        else if (dna[i] === 'A') rna += 'U';
        else return null;
    }

    return rna;
}