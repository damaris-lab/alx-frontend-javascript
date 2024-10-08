export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set) || !Array.isArray(array)) {
    throw new Error('Invalid input: set must be a Set and array must be an Array');
  }

  return array.every((element) => set.has(element));
}
