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
