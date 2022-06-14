const exp = require('constants');
const Calculator = require('../calculator');

describe('calculator test', () => {
  test('calculator test', () => {
    const cal = new Calculator();

    cal.set(3);
    expect(cal.value).toBe(3);

    cal.clear();
    expect(cal.value).toBe(0);

    cal.add(50);
    expect(cal.value).toBe(50);

    cal.subtract(10);
    expect(cal.value).toBe(40);

    cal.multiply(2);
    expect(cal.value).toBe(80);

    cal.divide(2);
    expect(cal.value).toBe(40);
  });
});
