export default function cleanSet(set, startString) {
  const strSet = [];

  if (!set || !startString || typeof startString !== 'string' || !(set instanceof Set)) return '';

  set.forEach((str) => {
    if (str.startsWith(startString) && typeof str === 'string') {
      strSet.push(str.slice(startString.length));
    }
  });
  return strSet.join('-');
}
