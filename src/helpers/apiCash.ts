function createCache(expiry: number) {
  const store: any = {};

  return {
    get(key: string) {
      const item = store[key];
      if (!item) return null;

      const now = Date.now();
      if (now - item.timestamp > expiry) {
        delete store[key];
        return null;
      }

      return item.data;
    },

    set(key: string, data: any) {
      store[key] = { data, timestamp: Date.now() };
    },
  };
}

const cache = createCache(5 * 60 * 1000); // Cache expires after 5 minutes

export const fetchWithCache = async (urlAPI: string) => {
  const cachedData = cache.get(urlAPI);
  if (cachedData) return cachedData;

  try {
    const response = await fetch(urlAPI);
    const dataAPI = await response.json();

    cache.set(urlAPI, dataAPI);

    return dataAPI;
  } catch (error) {
    console.error(error);
  }
};
