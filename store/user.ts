import { types } from "mobx-state-tree";

export default types
.model({
  account: types.string,
  nickName: types.string,
  gender: types.union(types.literal('male'), types.literal('female'))
})
.actions((self) => ({
  updateNickName(newName: string){
    console.log(newName)
    self.nickName = newName
  },
  updateAccount(a: string){
    self.account = a
  }
}))