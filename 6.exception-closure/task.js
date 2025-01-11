function parseCount(parseValue) {
    if (isNaN(Number.parseFloat(parseValue)) === true) {
        return new Error("невалидное значение");
    }
    return Number.parseFloat(parseValue);
}

function validateCount(parseValue) {
    try {
        parseCount(parseValue);
    } catch (error) {
        return error;
    } 
    return parseCount(parseValue);
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = 0.5 * this.perimeter;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        new Triangle(a, b, c);
    } catch (error) {
        return {area: 'Ошибка! Треугольник не существует', perimeter: 'Ошибка! Треугольник не существует'};
    } 
    return new Triangle(a, b, c);
}