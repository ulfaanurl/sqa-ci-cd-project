const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('penjumlahan dua angka', () => {
    expect(calc.add(5, 3)).toBe(8);
  });

  test('penjumlahan dengan angka negatif', () => {
    expect(calc.add(-2, 3)).toBe(1);
  });

  test('pengurangan dua angka', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  test('pengurangan menghasilkan angka negatif', () => {
    expect(calc.subtract(3, 5)).toBe(-2);
  });

  test('perkalian dua angka', () => {
    expect(calc.multiply(5, 3)).toBe(15);
  });

  test('perkalian dengan nol', () => {
    expect(calc.multiply(5, 0)).toBe(0);
  });

  test('pembagian dua angka', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test('pembagian menghasilkan desimal', () => {
    expect(calc.divide(5, 2)).toBe(2.5);
  });

  test('pembagian angka negatif', () => {
    expect(calc.divide(-10, 2)).toBe(-5);
  });

  test('pembagian dengan nol menghasilkan error', () => {
    expect(() => calc.divide(10, 0))
      .toThrow('Cannot divide by zero');
  });
});