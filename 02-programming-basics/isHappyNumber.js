//Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр"
//превратятся в единицу.
//Реализуйте функцию, которая должна вернуть true, если число счастливое, и false, если нет.
//Количество итераций процесса поиска необходимо ограничить числом 10.

const isHappyNumber = num => {
    const sumOfSquareDigits = num => {
        num = String(num);
        let sum = 0;

        for (n = num.length - 1; n != -1; --n) {
            sum += Number(num[n]) ** 2;
        }
        return sum;
    }

    for (i = 10; i != 0; --i) {
        if (num === 1) return true;
        num = sumOfSquareDigits(num);
    }
    return false;
}
