export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint) || 0;
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
