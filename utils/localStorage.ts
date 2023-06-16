export const setItem = (key: string, value: string) => localStorage.setItem(key, value);

export const getItem = (key: string) => localStorage.getItem(key);

export const removeItem = (key: string) => localStorage.removeItem(key);

export const clear = () => localStorage.clear()


export const USER_ACCESS_TOKEN = 'ACCESS_TOKEN';
export const getAccessToken= () => getItem(USER_ACCESS_TOKEN)
export const setAccessToken= (value: string) => setItem(USER_ACCESS_TOKEN, value)