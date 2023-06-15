
import User from 'store/user'
import Activate from 'store/activate'
import { Instance, types, applySnapshot, SnapshotIn, SnapshotOut } from 'mobx-state-tree'
import { useMemo } from 'react'

let store: IStore | null = null

const RootStore = types.model({
  user: User,
  activate: Activate
})

export type IStore = Instance<typeof RootStore>
export type IStoreSnapshotIn = SnapshotIn<typeof RootStore> | null
export type IStoreSnapshotOut = SnapshotOut<typeof RootStore> | null

export function initializeStore(snapshotData: IStoreSnapshotIn) {
  const _store = store ?? RootStore.create({
    user: User.create({
      account: 'longfengz@foxmail.com',
      nickName: 'lonfger',
      gender: 'female'
    }),
    activate: Activate.create({
      active: false,
      activateType: "none"
    })
  })
  if (snapshotData) {
    applySnapshot(_store, snapshotData)
  }
  if (!store) store = _store

  return typeof window === 'undefined' ? _store : store
}

export function useStore(initialState = null){
  return useMemo(() => initializeStore(initialState), [])
}


