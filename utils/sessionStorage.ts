export const getSessionStorage = (key: string) => sessionStorage.getItem(key) ?? '';

export const setSessionStorage = (key: string, value: string) => sessionStorage.setItem(key, value);

export const removeSessionStorage = (key: string) => sessionStorage.removeItem(key);

export const clear = (key: string) => sessionStorage.clear()
