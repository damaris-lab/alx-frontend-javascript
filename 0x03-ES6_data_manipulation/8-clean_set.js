export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('set must be a Set and startString must be a String');
  }

  const filteredValues = [...set].filter((value) => typeof value === 'string' && value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));

  return cleanedValues.join('-');
}
