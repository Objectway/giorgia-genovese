const fizzbuzz = require('./fizzbuzz').fizzOrBuzz;

test('Should print fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
});

test('Should print buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
});

test('Should print fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
});

test('Should print the same number', () => {
    expect(fizzbuzz(2)).toBe(2);
});