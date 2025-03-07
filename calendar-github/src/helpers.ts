export function getPercentile(arr: number[], percentile: number) {
    // Creamos una copia ordenada del array
    const sorted = [...arr].sort((a, b) => a - b);
    // Calculamos el índice exacto (puede no ser entero)
    const index = (percentile / 100) * (sorted.length - 1);
    const lowerIndex = Math.floor(index);
    const upperIndex = Math.ceil(index);
    // Si el índice es entero, devolvemos el valor en esa posición
    if (lowerIndex === upperIndex) {
      return sorted[lowerIndex];
    }
    // Interpolamos entre los dos valores más cercanos
    const weight = index - lowerIndex;
    return sorted[lowerIndex] * (1 - weight) + sorted[upperIndex] * weight;
  }
  