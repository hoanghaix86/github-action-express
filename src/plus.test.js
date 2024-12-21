/**
 * Sum two numbers
 * @param {number} a 
 * @param {number} b 
 * @returns sum of a and b
 */
function plus(a, b) {
  return a + b;
}

test('adds 1 + 1 to equal 2', () => {
  expect(plus(1, 1)).toBe(2);
});

test('adds 2 + 2 to equal 4', () => {
  expect(plus(2, 2)).toBe(4);
});

