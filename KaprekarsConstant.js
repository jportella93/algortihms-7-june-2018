function KaprekarsConstant(num) {
  if (num === 0) return null;

  const KAP = 6174;
  var count = 0;
  while (true) {
      var num = evaluator(num)
      if (num === true) {
          return count;
      }
  }

  function evaluator(num) {
      count++
      var minNumArr = num.toString().split('').sort();
      var maxNumArr = minNumArr.slice(0).reverse();
      var littleNum = parseInt(minNumArr.join(''), 10);
      var bigNum = parseInt(maxNumArr.join(''), 10);
      while (bigNum < 1000) {
          bigNum = bigNum * 10;
      }

      return bigNum - littleNum === KAP ? true : bigNum - littleNum;
  }
}

//jordis solution
// function KaprekarsConstant (number) {
//     if (number === 0) return null;
//     var num = 0;
//     let minMax = parseInt(number.toString().split('').sort().join('')) //?
//     const Kapri = 6174;
//     let maxMin = parseInt(number.toString().split('').sort().reverse().join('')); //?
//     if (maxMin - minMax === Kapri) {
//       return 1;
//     } else {
//       num++
//       return num + KaprekarsConstant(maxMin-minMax);
//     }
//   }

//Marlon's solution
// function KaprekarsConstant (value) {
//   if(!value || value < 1000) return null;
//   let iterations = 0;
//   function calculate(value) {
//     iterations++;
//     const min = Number(value.toString().split('').sort().join(''));
//     const max = Number(value.toString().split('').sort((a, b)=> b - a).join(''));
//     if(max - min != 6174) return calculate(max - min);
//     return iterations;
//   }
//   return calculate(value);
// }



module.exports = KaprekarsConstant;
