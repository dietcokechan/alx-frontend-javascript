export default function cleanSet(set, startString) {
  const newSet = [];

  if (!startString || typeof startString !== 'string') {
    return '';
  }

  set.forEach((item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
      newSet.push(item.slice(startString.length));
    }
  });
  return newSet.join('-');
}
