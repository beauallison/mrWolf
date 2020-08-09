const checkSyncIsAvailable = async () => {
  try {
    await browser.storage.sync.getBytesInUse();
    return true;
  } catch (e) {
    return false;
  }
};

const getStorage = async () => {
  const storageUnavailable = typeof browser === `undefined`;
  if (storageUnavailable) return undefined;
  const syncExists = await checkSyncIsAvailable();
  return syncExists ? browser.storage.sync : browser.storage.local;
};

export const saveItem = async (KEY: string, item: any) => {
  const storage = await getStorage();
  if (!storage) return;
  return storage.set({ KEY: item });
};

export const getItem = async (KEY: string | string[]) => {
  const storage = await getStorage();
  if (!storage) return;
  const item = await storage.get(KEY);
  if (!item) return null;
  return JSON.parse(item);
};

export const getAll = getItem;

export const clearAll = async () => {
  const storage = await getStorage();
  if (!storage) return;
  return storage.clear();
};
