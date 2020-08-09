const localeStorageUnavailable = typeof window === `undefined`;

export const saveItem = (KEY: string, item: any) => {
  if (localeStorageUnavailable) return;
  localStorage.setItem(KEY, JSON.stringify(item));
};

export const getItem = (KEY: string) => {
  if (localeStorageUnavailable) return;
  const item = localStorage.getItem(KEY);
  if (!item) return null;
  return JSON.parse(item);
};

export const getAll = (KEYS: string[]) => KEYS.map((KEY) => getItem(KEY));

export const clearAll = () => {
  if (localeStorageUnavailable) return;
  localStorage.clear();
};
