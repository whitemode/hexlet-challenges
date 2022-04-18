//Реализуйте функцию, которая переворачивает строку задом наперед, используя рекурсию.

const reverse = str => {
    return str.length === 0 ? str : str.slice(-1) + reverse(str.slice(0,-1));
}
