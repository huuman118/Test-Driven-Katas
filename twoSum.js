function twoSum(arr, target) {
  if (arr.length < 2) {
    return []
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}

module.exports = twoSum
