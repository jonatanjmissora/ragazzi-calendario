export const under10Format = (value) => {
  if (+value < 10) return '0' + value
  return value.toString()
}
