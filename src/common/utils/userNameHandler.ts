export const userNameHandler = (userName: string, maxLength: number) => {
  const max = maxLength
  const name = userName.split('@')[0]

  return name.length <= max
    ? name
    : name
        .split('')
        .map((el, i) => (i <= max ? el : null))
        .filter(el => el)
        .join('') + '...'
}
