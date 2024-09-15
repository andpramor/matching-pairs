export const getRandomPairsArray = () => {
  // Array of pairs:
  const array = [1, 1, 2, 2, 3, 3, 4, 4]

  // Mix up the pairs:
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]] // Intercambio de valores
  }

  // Add the zero center:
  array.splice(4, 0, 0)
  return array
}
