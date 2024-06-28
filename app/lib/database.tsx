type CardData = { id: any };

type Cb = (data: CardData) => any;

export class CacheManager {
  // Here we store data cache
  private static cache = new Map<string, CardData>();
  // Map of pending requests with id as key and array of functions as value
  private static pendingRequests = new Map<string, Cb[]>();
  // Method to call firestore (or whatever service)
  public static async fetchDataForCard(id: string): Promise<CardData> {
    // Firestore logic goes here
    const before = Date.now();
    await sleep(1000);
    console.log(`Slept for ${Date.now() - before}ms`);
    return { id };
  }

  public static async getDataForCard(id: string): Promise<CardData> {
    // Step 1. Check if data in cache exists
    const fromCache = CacheManager.cache.get(id);
    // If data exists in cache - just return it
    if (fromCache) {
      console.log(`CacheManager SUCCESS CACHE HIT ${id}`);
      return fromCache;
    }

    // Step 2. Check if method was previously called with the same id
    // and if there are pending requests
    const oldPendingRequests = CacheManager.pendingRequests.get(id);
    // If so - add current call to pending requests list
    if (oldPendingRequests) {
      console.log(`CacheManager PENDING ${id}`);
      return new Promise<CardData>((resolve) => {
        const cb = (data: CardData) => {
          resolve(data);
        };
        CacheManager.pendingRequests.set(id, [...oldPendingRequests, cb]);
      });
    }

    console.log(`CacheManager MISS ${id}`);
    // Initialize list if it's first call
    if (!oldPendingRequests) {
      CacheManager.pendingRequests.set(id, [])
    }

    // Step 3. Make async request call
    const cardData = await CacheManager.fetchDataForCard(id);

    // Step 4. Check again for pending requests
    const pendingRequests = CacheManager.pendingRequests.get(id);
    // if present - call them with data
    if (pendingRequests) {
      pendingRequests.forEach((promise) => {
        promise(cardData);
      });
    }

    // Step 5. Return data for the first call
    return cardData;
  }
}

async function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}