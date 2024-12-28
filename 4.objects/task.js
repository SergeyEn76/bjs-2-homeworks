"use strict";
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

//let maria = new Student("Maria", "женский", 35);
//console.log(maria);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

//maria.setSubject("Algebra");

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty("marks") === false) {
        //console.log('плохая учеба');
        return undefined;
    }
    for (let i = 0; i < marks.length; i++) {
        this.marks.push(marks[i]);
    }
}

//maria.addMarks();
//maria.addMarks(4, 5, 4, 5);

Student.prototype.getAverage = function () {
    if (this.marks.length === 0) {
        return 0;
    }
    let countMarks = 0;
    let sumMarks = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sumMarks += this.marks[i];
        countMarks++;
    }
    return sumMarks / countMarks;
}

//console.log(maria.getAverage());

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

//console.log(maria);
//maria.exclude("плохая учёба");
//console.log(maria);
//maria.addMarks(4, 5, 4, 5);
