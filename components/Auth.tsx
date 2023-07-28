import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "store/index";

export default observer(({children}: React.PropsWithChildren) => {
  const {user: {login, updateLoginStatus}} = useStore()
  return <>
    {login ? '登陆' : '未登录'}
    {children}
    {/* {!login && <Modal title="请登录" handleMask={() => updateLoginStatus(true)} >xixi</Modal>} */}
  </>
})