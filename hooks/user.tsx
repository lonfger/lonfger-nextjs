import { initializeStore, useStore } from "store"

export const useLogin = () => {
  return !!useUserInfo()
}
export const useUserInfo = () => {
  const store = initializeStore(false)
  return {
    name: store.name
  }
}

