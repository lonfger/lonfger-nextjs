import { types } from "mobx-state-tree";

export default types.model({
  active: types.boolean,
  activateType: types.optional(types.enumeration(['year', 'month', 'day', 'none']), 'none')
}).actions(self => ({
  updateStatus(activeType?: typeof self.activateType){
    self.active = true
    self.activateType = activeType
  }
}))