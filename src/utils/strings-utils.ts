export function switchToUnderscore(camelCasedString: string) {
  const underScoredString = camelCasedString
    .split('')
    .reduce((acc: string, curr: string, index) => {
      let _curr = curr;
      if (index > 0 && curr >= 'A' && curr <= 'Z') {
        _curr = '_' + _curr.toLowerCase();
      }

      acc += _curr;
      return acc;
    }, '');

  return underScoredString.toLowerCase();
}

export function switchToCamelCase(underScoredString: string) {
  const splittedString = underScoredString.split('_');
  const firstPart = splittedString[0].split('').reduce((acc, curr, index) => {
    if (index === 0) return curr.toUpperCase();
    return acc + curr;
  }, '');
  if (splittedString.length === 1) return firstPart;
  const secondPart = splittedString[1].split('').reduce((acc, curr, index) => {
    if (index === 0) return curr.toUpperCase();
    return acc + curr;
  }, '');
  return firstPart + secondPart;
}
