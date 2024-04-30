export default function cleanSet(set, startString) {
  const strSet = [];

  if (startString === '' || typeof startString !== 'string') return '';

  set.forEach((str) => {
    if (str.startsWith(startString) && typeof str === 'string') {
      strSet.push(str.slice(startString.length));
    }
  });
  return strSet.join('-');
}
