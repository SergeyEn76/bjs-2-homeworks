"use strict";
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty("marks") === false) {
        return;
    }
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if ((this.hasOwnProperty("marks") === false) || (this.marks.length === 0)) {
        return 0;
    }
    const sumMarks = this.marks.reduce((acc, item) => acc + item, 0);
    return sumMarks / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
