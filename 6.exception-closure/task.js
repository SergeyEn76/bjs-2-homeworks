function parseCount(parseValue) {
    const value = Number.parseFloat(parseValue);
    if (isNaN(value) === true) {
        throw new Error("Невалидное значение");
    }
    return value;
}

function validateCount(parseValue) {
    try {
        return parseCount(parseValue);
    } catch (error) {
        return error;
    } 
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
        const p = 0.5 * this.perimeter;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        const obj = {area: "Ошибка! Треугольник не существует", perimeter: "Ошибка! Треугольник не существует"};
        return Object.freeze(obj);
    }
}