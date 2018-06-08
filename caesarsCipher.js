const Caesar = {
  'A': 1,
  'B': 2,
  'C': 3,
  'D': 4,
  'E': 5,
  'F': 6,
  'G': 7,
  'H': 8,
  'I': 9,
  'J': 10,
  'K': 11,
  'L': 12,
  'M': 13,
  'N': 14,
  'O': 15,
  'P': 16,
  'Q': 17,
  'R': 18,
  'S': 19,
  'T': 20,
  'U': 21,
  'V': 22,
  'W': 23,
  'X': 24,
  'Y': 25,
  'Z': 26
}

const Julius = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z'
}

function Caesars(string, step) {
  let arr = string.split('')

  while (step > 26) {
    step = step - 26
  }

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == " ") i = i+1
    let numOf = Caesar[arr[i]]
    numOf = numOf - step
    if (numOf < 1) numOf = numOf + 26
    arr[i] = Julius[numOf]
  }

  let res = arr.join('');
  return res
}

// Jordi's solution
// function Caesars (string, step) {
//
//   let message = '';
//   let numChar = [];
//   let finalMessage = [];
//   message = string.split('') //?
//
//   for (let i = 0; i < message.length; i++) {
//     if (message[i]  === ' ') {
//       numChar.push(0);
//     } else {
//       numChar.push(Caesar[message[i]]);
//     }
//
//   }
//   for (let i = 0; i < numChar.length; i++) {
//     if (numChar[i] !== 0) {
//       numChar[i] = numChar[i] - step
//       if (numChar[i] < 0) {
//         numChar[i] += 26;
//       }
//       if (numChar[i] < 0) {
//         numChar[i] += 26;
//       }
//     } else {
//       numChar[i];
//     }
//   }
//
//   for (let i = 0; i < numChar.length; i++) {
//     if (numChar[i] == 0) {
//       finalMessage.push(' ')
//     }
//     finalMessage.push(Julius[numChar[i]]);
//
//   }
//   return finalMessage.join('');
// }

// David's solution
// function Caesars(string, step) {
//   step = step%26;
//   const strArr = Array.from(string);
//
//   const numArr = strArr.map(el => {
//     if(el === ' ') return ' '
//     return Caesar[el];
//     })
//   const shiftArr = numArr.map(el => {
//     if(el === ' ') return ' ';
//     const res = el-step;
//     if (res<1) return res + 26
//     return res;
//   })
//   const decArr = shiftArr.map(el => {
//     if (el === ' ') return ' ';
//     return Julius[el];
//   })
//
//   return decArr.join('');
// }

// Marco's one liner (without edge cases)
// const Caesars = (str, step) => str.split('').map(c => String.fromCharCode(c.charCodeAt(0) + step)).join('');


module.exports = Caesars;
