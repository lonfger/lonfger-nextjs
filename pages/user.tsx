import Modal from "@/components/Modal"
import { observer } from "mobx-react-lite"
import { createPortal } from "react-dom"
import { useStore } from "store/index"

export default observer(() => {
  const {user} = useStore()

  return (
    <>
    {user.login ? '1' : '0'}
      <button onClick={() => user.updateLoginStatus(true)}>login</button>
      <button onClick={() => user.updateLoginStatus(false)}>log out</button>

    </>
  )
})