function queueTime(customers, n) {
  const tills = new Array(n).fill(0);
  for (let time of customers) {
    let idx = tills.indexOf(Math.min(...tills));
    tills[idx] += time;
  }
  return Math.max(...tills);
}

// function queueTime () {
//   return 'test'
// }


module.exports = queueTime;
