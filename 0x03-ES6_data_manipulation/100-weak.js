export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  // Create a unique key for the endpoint
  const endpointKey = JSON.stringify(endpoint);

  // Check if the endpoint is already in the WeakMap
  if (weakMap.has(endpointKey)) {
    // If it is, increment the count
    const count = weakMap.get(endpointKey) + 1;
    weakMap.set(endpointKey, count);

    // Check if the count has reached or exceeded 5
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If it's not, add it to the WeakMap with a count of 1
    weakMap.set(endpointKey, 1);
  }
}
