import { initializeStore } from "store/index"

export const test = (t: string) => {
  const {activate} = initializeStore(null)
  activate.updateStatus()
}
