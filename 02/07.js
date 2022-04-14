//Напишите функцию diff(), которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу
//между ними.

const diff = (angle1, angle2) => {
    let diff = Math.abs(angle1 - angle2);

    return (diff > 180) ? (360 - diff) : diff;
}
