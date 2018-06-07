const Caesars = require('./caesarsCipher');

test('Decrypts messages', () => {
  expect(Caesars('LKXKXK DSWO', 36)).toBe('BANANA TIME');
  expect(Caesars('IFMMP QSFUUZ', 1)).toBe('HELLO PRETTY');
});

test('Should return the same message if step is 0', () => {
  expect(Caesars('BORINGBORING', 0)).toBe('BORINGBORING');
})

// console.log(Caesars('LKXKXK DSWO', 36))
