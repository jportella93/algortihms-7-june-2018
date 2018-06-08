function queueTime(customers, n) {
  const tills = new Array(n).fill(0);
  // console.log('tills:',tills);

  for (let time of customers) {
    let idx = tills.indexOf(Math.min(...tills));
    tills[idx] += time;
    // console.log('Number of next available till:',idx);
    // console.log(`summing time ${time} to till number ${idx}`);
    // console.log('tills:',tills);
  }
  return Math.max(...tills);
}

// Oli's solution
// function queueTime (array, n) {
// if (array.length === 0) return 0;
//   let time = array.reduce(function(acc, val) { return acc + val; })
//
//   time = time / n;
//
//   for (let i = 0; i <array.length; i++) {
//     if (array[i] > time) {
//       time = array[i];
//     }
//   }
//
//   return time
//
// }

// Marco's solution
// const queueTime = (arr, n) => {
//   const ordered = arr.sort();
//   var el = Array(n).fill(0);
//   while(ordered.length > 0){
//     for(let i = 0; i < n && i < ordered.length; i++) {
//       el[i] += ordered.shift();
//     }
//     el = el.sort((a,b) => a-b);
//   }
//   return Math.max(...el);
// }



module.exports = queueTime;
