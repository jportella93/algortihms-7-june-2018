const KaprekarsConstant = require('./KaprekarsConstant');

test('Calculates the number of routines until 6174', () => {
  expect(KaprekarsConstant(3524)).toBe(3);
  expect(KaprekarsConstant(6174)).toBe(1);
  expect(KaprekarsConstant(6175)).toBe(7);
});

test('Should return null if num is 0', () => {
  expect(KaprekarsConstant(0)).toBe(null);
});
