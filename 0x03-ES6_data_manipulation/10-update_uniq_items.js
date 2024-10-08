export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process: argument must be a Map');
  }

  for (const [item, quantity] of groceriesMap) {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  }

  return groceriesMap;
}
