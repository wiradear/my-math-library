  // 📄 math.js
  // function sum(a, b) { 
  //   return a + b
  // }
  // module.exports = {
  //    sum,
  // }

  function sum(a, b) {
    if (Array.isArray(a)) {
    let sum = 0
    a.forEach((i) => (sum += i))
    return sum
      } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    }
    module.exports = {
        sum,
    }