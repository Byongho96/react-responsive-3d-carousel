/**
 * Calculate the previous array item index
 * @param length The total length of an array
 * @param curIndex Index of current array item
 * @returns Index of previous array item
 */
export function getPrevIndex(length: number, curIndex: number) {
  const prevIndex = (curIndex - 1) % length
  return prevIndex < 0 ? prevIndex + length : prevIndex
}

/**
 * Calculate the double previous array item index
 * @param length The total length of an array
 * @param curIndex Index of current array item
 * @returns Index of double previous array item
 */
export function getDoublePrevIndex(length: number, curIndex: number) {
  const prevIndex = (curIndex - 2) % length
  return prevIndex < 0 ? prevIndex + length : prevIndex
}

/**
 * Calculate the next array item index
 * @param length The total length of an array
 * @param curIndex Index of current array item
 * @returns Index of next array item
 */
export function getNextIndex(length: number, curIndex: number) {
  return (curIndex + 1) % length
}

/**
 * Calculate the double next array item index
 * @param length The total length of an array
 * @param curIndex Index of current array item
 * @returns Index of double next array item
 */
export function getDoubleNextIndex(length: number, curIndex: number) {
  return (curIndex + 2) % length
}
