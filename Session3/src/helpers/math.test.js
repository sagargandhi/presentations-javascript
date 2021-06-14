
const multiply = (a, b) => a * b;

const randomNumber = () => Math.random().toFixed(2) * 100;

test('Multiply two numbers ', () => {
    expect(multiply(3,2)).toBe(6)
});

test('Random number test ', () => {
    expect(randomNumber()).toEqual(expect.any(Number));
});