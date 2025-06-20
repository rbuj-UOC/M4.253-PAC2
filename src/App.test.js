/*
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

import { dashboardCompany, WordsAnalyzer, Book, searchNumber, Shape, Circle } from './App';
import { matrix1, matrix2, company, wordList } from './data';

// --------------------------------------------------------------------------------
// EXERCISE 1
// --------------------------------------------------------------------------------
describe('Ex1', () => {
  test('The number is in the matrix', () => {
    expect(searchNumber(matrix1, 20)).toBe(true);
    expect(searchNumber(matrix2, 229)).toBe(true);
    expect(searchNumber(matrix2, 50)).toBe(true);
    expect(searchNumber(matrix2, 60)).toBe(true);
    expect(searchNumber(matrix2, 160)).toBe(true);
    expect(searchNumber(matrix2, 110)).toBe(true);
  });

  test('The number is not in the matrix', () => {
    expect(searchNumber(matrix1, 25)).toBe(false);
    expect(searchNumber(matrix2, 20)).toBe(false);
  });

  test('should return false if the matrix is empty', () => {
    expect(searchNumber([], 10)).toBe(false);
  });
});

// --------------------------------------------------------------------------------
// EXERCISE 2
// --------------------------------------------------------------------------------
describe('Ex2', () => {
  describe('Shape class', () => {
    test('Shape class id defined', () => {
      expect(Shape).toBeDefined();
    });

    test('should create a Shape instance', () => {
      const shape = new Shape('shape 1');
      expect(shape).toBeInstanceOf(Shape);
    });

    test('should throw an error when calling calculateArea', () => {
      const shape = new Shape('shape 1');
      expect(() => shape.calculateArea()).toThrow("The 'calculateArea' function must be implemented in child classes.");
    });

    test('should return the name when calling getName', () => {
      const shape = new Shape('shape 1');
      expect(shape.getName()).toBe('shape 1');
    });
  });

  describe('Circle class', () => {
    test('Circle class id defined', () => {
      expect(Circle).toBeDefined();
    });

    test('should create a Circle instance', () => {
      const circle = new Circle('Circle 1', 5);
      expect(circle).toBeInstanceOf(Circle);
    });

    test('should calculate the area of a circle correctly', () => {
      const circle = new Circle('Circle 1', 5);
      expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
    });

    test('should return the correct name for the circle', () => {
      const circle = new Circle('Circle 1', 5);
      expect(circle.getName()).toBe("I'm a circle named 'Circle 1'");
    });
  });
});

// --------------------------------------------------------------------------------
// EXERCISE 3
// --------------------------------------------------------------------------------
describe('Ex3', () => {
  const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction');

  test("should have a 'getInfo' method on the prototype", () => {
    expect(Book.prototype.getInfo).toBeDefined();
    expect(Object.getPrototypeOf(book1)).toHaveProperty('getInfo');
  });

  test("should have a 'setGenre' method on the prototype", () => {
    expect(Book.prototype.setGenre).toBeDefined();
    expect(Object.getPrototypeOf(book1)).toHaveProperty('setGenre');
  });

  test("shouldn't have a 'isGenre' method on the prototype", () => {
    expect(Book.prototype.isGenre).not.toBeDefined();
    expect(Object.getPrototypeOf(book1)).not.toHaveProperty('isGenre');
  });

  test("'getInfo' method should return the expected object", () => {
    expect(book1.getInfo()).toEqual({
      Title: 'The Great Gatsby',
      Author: 'F. Scott Fitzgerald',
      Genre: 'Fiction'
    });
  });

  test("'setGenre' method should assign the value correctly", () => {
    book1.setGenre('Poetry');
    expect(book1.genre).toBe('Poetry');
  });

  test("'isGenre' method should return the expected boolean", () => {
    expect(book1.isGenre('Poetry')).toBe(true);
    expect(book1.isGenre('Mystery')).toBe(false);
  });
});

// --------------------------------------------------------------------------------
// EXERCISE 4
// --------------------------------------------------------------------------------
describe('Ex4', () => {
  test("'dashboardCompany' function should receive an object as a parameter", () => {
    expect(() => {
      dashboardCompany(company);
    }).not.toThrow();
  });

  test("'dashboardCompany' function should throw an error if called without an object", () => {
    expect(() => {
      dashboardCompany();
    }).toThrow('The value of company is invalid.');
    expect(() => {
      dashboardCompany(null);
    }).toThrow('The value of company is invalid.');
    expect(() => {
      dashboardCompany(100);
    }).toThrow('The value of company is invalid.');
  });

  test('should return the expected object', () => {
    const expectedResult = {
      employeeRankByDepartment: [
        {
          departmentName: 'Marketing',
          rank: [
            { fullName: 'David Pérez', totalHoursWorked: 168 },
            { fullName: 'Abril Puig', totalHoursWorked: 157 }
          ]
        },
        {
          departmentName: 'Software Development',
          rank: [
            { fullName: 'Pol Ferrer', totalHoursWorked: 434 },
            { fullName: 'Maria Tobella', totalHoursWorked: 352 },
            { fullName: 'Pedro Medina', totalHoursWorked: 66 }
          ]
        }
      ],
      rankByDepartment: [
        { departmentName: 'Marketing', totalHoursWorked: 325 },
        { departmentName: 'Software Development', totalHoursWorked: 852 }
      ]
    };

    expect(dashboardCompany(company)).toEqual(expectedResult);
  });
});

// --------------------------------------------------------------------------------
// EXERCISE 5
// --------------------------------------------------------------------------------
describe('Ex5', () => {
  test("'WordsAnalyzer' class is defined", () => {
    expect(WordsAnalyzer).toBeDefined();
  });

  const correctWordList = [wordList[0], wordList[1], wordList[2], wordList[3], wordList[5], wordList[6]];

  test.each(correctWordList)('should be a valid constructor', (wordList) => {
    const d = new WordsAnalyzer(wordList);

    expect(d).toBeInstanceOf(WordsAnalyzer);
  });

  test.each(correctWordList)("should have a public getter to 'words'", (wordList) => {
    const d = new WordsAnalyzer(wordList);

    expect(d.words).toEqual(wordList.words);
  });

  test("should have a public getter to 'totalVowels', 'totalConsonants', 'totalNumbers' and 'totalSymbols'", () => {
    const d = new WordsAnalyzer(wordList[0]);

    expect(d.totalVowels).toEqual(24);
    expect(d.totalConsonants).toEqual(37);
    expect(d.totalNumbers).toEqual(4);
    expect(d.totalSymbols).toEqual(5);
  });

  test("should have a public setter to 'words'", () => {
    const testWords = ['Apu Nahasapeemapetilon', 'Edna Krabappel'];
    const d = new WordsAnalyzer(wordList[0]);

    expect(() => {
      d.words = null;
    }).toThrow('The value of words is invalid.');
    expect(() => {
      d.words = 100;
    }).toThrow('The value of words is invalid.');
    expect(() => {
      d.words = 'Bart Simpson';
    }).toThrow('The value of words is invalid.');
    expect(() => {
      d.words = ['Montgomery Burns'];
    }).not.toThrow('The value of words is invalid.');

    d.words = testWords;

    expect(d.words).toEqual(testWords);

    expect(d.getTotals()).toEqual({
      consonants: 18,
      numbers: 0,
      symbols: 0,
      vowels: 16
    });
  });

  test("'getTotals' method", () => {
    const d = new WordsAnalyzer(wordList[0]);

    expect(d.getTotals()).toEqual({
      consonants: 37,
      numbers: 4,
      symbols: 5,
      vowels: 24
    });
  });

  test("'textExists' method", () => {
    const d = new WordsAnalyzer(wordList[0]);

    expect(d.textExists('Yoda')).toBe(false);
    expect(d.textExists('Obi-Wan Kenobi')).toBe(true);
    expect(d.textExists('-Wan Ken')).toBe(true);
  });

  test("'orderWords' method", () => {
    const d = new WordsAnalyzer(wordList[0]);

    expect(() => {
      d.orderWords('Ascendente');
    }).toThrow('Order type not valid.');
    expect(() => {
      d.orderWords(null);
    }).toThrow('Order type not valid.');

    d.orderWords('ASC');

    expect(d.words).toEqual(['Ahsoka', 'Anakin Skywalker', 'BB-8', 'C-3PO', 'Han Solo', 'Jira', 'Obi-Wan Kenobi', 'Qui-Gon Jinn', 'R2-D2']);

    d.orderWords('DESC');

    expect(d.words).toEqual(['R2-D2', 'Qui-Gon Jinn', 'Obi-Wan Kenobi', 'Jira', 'Han Solo', 'C-3PO', 'BB-8', 'Anakin Skywalker', 'Ahsoka']);
  });

  test("'deleteWord' method", () => {
    const d = new WordsAnalyzer(wordList[3]);

    expect(() => {
      d.deleteWord(0);
    }).toThrow('The value of number is invalid.');
    expect(() => {
      d.deleteWord(5);
    }).toThrow('The value of number is invalid.');
    expect(() => {
      d.deleteWord(null);
    }).toThrow('The value of number is invalid.');
    expect(() => {
      d.deleteWord('');
    }).toThrow('The value of number is invalid.');

    d.deleteWord(3);

    expect(d.words).toEqual(['Hanamichi Sakuragi', 'Takenori Akagi', 'Kaede Rukawa']);

    d.deleteWord(3);

    expect(d.words).toEqual(['Hanamichi Sakuragi', 'Takenori Akagi']);

    expect(() => {
      d.deleteWord(3);
    }).toThrow('The value of number is invalid.');

    expect(d.getTotals()).toEqual({
      consonants: 15,
      numbers: 0,
      symbols: 0,
      vowels: 15
    });
  });
});
