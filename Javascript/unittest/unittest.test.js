const testi = require('./unittest');

test('1 + 2 = 3', () => {
  expect(testi.summa(1, 2)).toBe(3);
});

test('2 - 1 = 1', () => {
    expect(testi.miinus(2, 1)).toBe(1);
});

test('2 * 2 = 5', () => {
  expect(testi.kerto(2, 2)).toBe(5);
});

