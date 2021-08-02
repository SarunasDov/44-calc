async function calculator(value1, value2) {
    const suma = value1 + value2;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(suma)
        }, 1000);
    });
}

module.exports = calculator;