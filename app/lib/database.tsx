export class CacheManager {
  private static cache = new Map<string, any>();
  public static async getDataForCard(id: string): Promise<{ id: any }> {
    const fromCache = CacheManager.cache.get(id);
    if (fromCache) {
      console.log(`CacheManager SUCCESS CACHE HIT ${id}`);
      return { id: fromCache };
    }
    console.log(`CacheManager FAILURE ${id}`);
    // My Firestore logic goes here
    // var card = await fetchCard(id);
    // pretend fetch
    var before = Date.now();
    await sleep(1000);
    console.log(`Slept for ${Date.now() - before}ms`);
    var card = id;

    CacheManager.cache.set(id, card);
    return { id: card };
  }
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
