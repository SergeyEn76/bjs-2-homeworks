class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            for (let key in this.books[i]) {
                if ((key === type) && (this.books[i][key] === value)) {
                    return this.books[i];
                }
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let issuedBook = this.books[i];
                this.books.splice(i, 1);
                return issuedBook;
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if ((mark < 2) || (mark > 5)) {
            return;
        } else if (this.marks.hasOwnProperty(subject) === false) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        for (let key in this.marks) {
            if (key === subject) {
                let sumMarks = this.marks[key].reduce((acc, item) => acc + item, 0);
                return sumMarks / this.marks[key].length;
            }
        }
        return 0;
    }

    getAverage() {
        if (Object.keys(this.marks).length === 0) {
            return 0;
        }
        let sumMarks = 0;
        let count = 0;
        for (let key of Object.keys(this.marks)) {
            sumMarks += this.getAverageBySubject(key);
            count++;
        }
        return sumMarks / count;
    }
}
