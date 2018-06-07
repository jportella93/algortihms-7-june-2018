const queueTime = require('./theSupermarketQueue');

test('Calculates the queue time', () => {
  expect(queueTime([5,3,4], 1)).toBe(12);
  expect(queueTime([1,2,3,4], 1)).toBe(10);
  expect(queueTime([10,2,3,3], 2)).toBe(10);
  expect(queueTime([2,2,3,3,4,4], 2)).toBe(9);
  expect(queueTime([1,2,3,4,5], 100)).toBe(5);
});

test('Should return 0 if there are no customers', () => {
  expect(queueTime([], 1)).toBe(0);
});
