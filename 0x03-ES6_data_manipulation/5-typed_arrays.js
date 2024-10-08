export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new Error('All arguments must be numbers');
  }

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const arrayBuffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(arrayBuffer);

  int8Array[position] = value;

  return arrayBuffer;
}
