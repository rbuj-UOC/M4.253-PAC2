// --------------------------------------------------------------------------------
// EXERCISE 1
// --------------------------------------------------------------------------------
export function searchNumber(matrix, targetNumber) {
    if (!Array.isArray(matrix)) return false;
    for (const elem of matrix)
        if (Array.isArray(elem) && searchNumber(elem, targetNumber))
            return true;
        else if (isNaN(elem))
            continue;
        else if (elem === targetNumber)
            return true;
    return false;
}

// --------------------------------------------------------------------------------
// EXERCISE 2
// --------------------------------------------------------------------------------
export class Shape {
    constructor(name) { this.name = name; }
    calculateArea() { throw new Error("The 'calculateArea' function must be implemented in child classes."); }
    getName() { return this.name; }
}
export class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    calculateArea() { return Math.round(Math.pow(this.radius, 2) * Math.PI * 100) / 100; }
    getName() { return `I'm a circle named '${super.getName()}'`; }
}

// --------------------------------------------------------------------------------
// EXERCISE 3
// --------------------------------------------------------------------------------
export function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isGenre = function (genre) { return this.genre === genre; };
}
Book.prototype.getInfo = function () {
    return {
        Title: this.title,
        Author: this.author,
        Genre: this.genre
    };
};
Book.prototype.setGenre = function (newGenre) {
    this.genre = newGenre;
};

// --------------------------------------------------------------------------------
// EXERCISE 4
// --------------------------------------------------------------------------------
export function dashboardCompany(company) {
    if (company == null || company === undefined || !(company instanceof Object))
        throw new Error("The value of company is invalid.");
    const result = {};
    result["employeeRankByDepartment"] = [];
    result["rankByDepartment"] = [];
    for (const department of company["departments"]) {
        const employeeRankByDepartment = {};
        const rankByDepartment = {};
        employeeRankByDepartment["departmentName"] = rankByDepartment["departmentName"] = department["name"];
        employeeRankByDepartment["rank"] = [];
        rankByDepartment["totalHoursWorked"] = 0;
        for (const employee of department["employees"]) {
            const rank = {};
            rank["fullName"] = employee["firstName"] + " " + employee["lastName"];
            rank["totalHoursWorked"] = 0;
            for (const project of employee["projects"])
                for (const task of project["tasks"])
                    rank["totalHoursWorked"] += task["hoursWorked"];
            rankByDepartment["totalHoursWorked"] += rank["totalHoursWorked"];
            employeeRankByDepartment["rank"].push(rank);
        }
        employeeRankByDepartment["rank"] = employeeRankByDepartment["rank"].sort((r1, r2) => (r1.totalHoursWorked < r2.totalHoursWorked) ? 1 : (r1.totalHoursWorked > r2.totalHoursWorked) ? -1 : 0);
        result["employeeRankByDepartment"].push(employeeRankByDepartment);
        result["rankByDepartment"].push(rankByDepartment);
    }
    result["employeeRankByDepartment"] = result["employeeRankByDepartment"].sort((d1, d2) => (d1.departmentName > d2.departmentName) ? 1 : (d1.departmentName < d2.departmentName) ? -1 : 0);
    result["rankByDepartment"] = result["rankByDepartment"].sort((r1, r2) => (r1.departmentName > r2.departmentName) ? 1 : (r1.departmentName < r2.departmentName) ? -1 : 0);
    return result;
}

// --------------------------------------------------------------------------------
// EXERCISE 5
// --------------------------------------------------------------------------------
export class WordsAnalyzer {
    // Protected properties
    _words = [];
    _totalVowels = 0;
    _totalConsonants = 0;
    _totalNumbers = 0;
    _totalSymbols = 0;
    // Constructor
    constructor(data) {
        if (data == null || data === undefined || !(data instanceof Object))
            throw new Error("The list of words is invalid.");
        this._words = data.words;
        this._totalVowels = 0;
        this._totalConsonants = 0;
        this._totalNumbers = 0;
        this._totalSymbols = 0;
        for (const word of this._words) {
            this._totalVowels += this.#countVowels(word);
            this._totalConsonants += this.#countConsonants(word);
            this._totalNumbers += this.#countNumbers(word);
            this._totalSymbols += this.#countSymbols(word);
        }
    }
    // Getters
    get totalConsonants() { return this._totalConsonants; }
    get totalNumbers() { return this._totalNumbers; }
    get totalSymbols() { return this._totalSymbols; }
    get totalVowels() { return this._totalVowels; }
    get words() { return [...this._words]; }
    // Setters
    set words(data) {
        const msg = "The value of words is invalid.";
        if (data === undefined || data == null || !Array.isArray(data))
            throw new Error(msg);
        for (let i = 0; i < data.length; i++)
            if (typeof data[i] !== 'string')
                throw new Error(msg);
        this._words = [...data];
        this.#countAll();
    }
    // Public methods
    getTotals() {
        return {
            consonants: this._totalConsonants,
            numbers: this._totalNumbers,
            symbols: this._totalSymbols,
            vowels: this._totalVowels
        };
    }
    textExists(textToSearch) {
        for (const word of this._words)
            if (word.includes(textToSearch))
                return true;
        return false;
    }
    orderWords(orderType) {
        const msg = "Order type not valid.";
        if (typeof orderType === 'string')
            switch (orderType) {
            case 'ASC':
                this._words.sort((w1, w2) => (w1 > w2) ? 1 : (w1 < w2) ? -1 : 0);
                break;
            case 'DESC':
                this._words.sort((w1, w2) => (w1 < w2) ? 1 : (w1 > w2) ? -1 : 0);
                break;
            default:
                throw new Error(msg);
            }
        else
            throw new Error(msg);
    }
    deleteWord(number) {
        const msg = "The value of number is invalid.";
        if (number === undefined || isNaN(number) || number <= 0 || number > this._words.length)
            throw new Error(msg);
        if (number === 1)
            this._words.shift();
        else if (number === this._words.length)
            this._words.pop();
        else
            this._words.splice(number - 1, 1);
        this.#countAll();
    }
    // private
    #countAll() {
        this._totalVowels = 0;
        this._totalConsonants = 0;
        this._totalNumbers = 0;
        this._totalSymbols = 0;
        for (const word of this._words) {
            this._totalVowels += this.#countVowels(word);
            this._totalConsonants += this.#countConsonants(word);
            this._totalNumbers += this.#countNumbers(word);
            this._totalSymbols += this.#countSymbols(word);
        }
    }
    #countVowels(text) {
        const filter = text.toLocaleLowerCase().match(/[aeiou]/gi);
        return filter === null ? 0 : filter.length;
    }
    #countConsonants(text) {
        const filter = text.toLowerCase().match(/[qwrtypsdfghjklzxcvbnm]/gi);
        return filter === null ? 0 : filter.length;
    }
    #countNumbers(text) {
        const filter = text.toLowerCase().match(/[\d]/gi);
        return filter === null ? 0 : filter.length;
    }
    #countSymbols(text) {
        const filter = text.toLowerCase().match(/[-.]/gi);
        return filter === null ? 0 : filter.length;
    }
}
