const wrap = (line, maxLen) => {
  let outputStr = ''
  const wordArr = line.split(' ')
  let currCount = 0
  if (line.length <= maxLen) {
    return line
  }
  for (let i = 0; i < wordArr.length; i++) {
    if (outputStr.length === 0) {
      outputStr = wordArr[i]
      currCount = wordArr[i].length
    } else if (currCount + wordArr[i].length >= maxLen) {
      outputStr = outputStr + '\n' + wordArr[i]
      currCount = wordArr[i].length
    } else {
      outputStr = outputStr + ' ' + wordArr[i]
      currCount = currCount + 1 + wordArr[i].length
    }
  }

  return outputStr
}
module.exports = wrap
