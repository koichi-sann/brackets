module.exports = function check(str, bracketsConfig) {
  const stack = []
  const splitStr = str.split('')
  stack.push(splitStr[0])
  for (let i = 1; i < splitStr.length; i++) {
    stack.push(splitStr[i])
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        splitStr[i] == bracketsConfig[j][1] &&
        stack[stack.length - 2] == bracketsConfig[j][0]
      ) {
        stack.pop()
        stack.pop()
      }
    }
  }

  if (stack.length == 0) return true
  return false
}
