//Реализуйте функцию, которая меняет в строке регистр каждой буквы на противоположный.

const invertCase = str => {
    const isUpperCase = char => char === char.toUpperCase();
    
    let result = '';

    for (i = 0; i != str.length; i += 1) {
        result += isUpperCase(str[i]) ? str[i].toLowerCase() : str[i].toUpperCase();
    }

    return result;
}
