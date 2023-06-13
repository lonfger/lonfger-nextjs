import Modal from "@/components/Modal"
import { useCallback, useState } from "react"
import { createPortal } from "react-dom"

export default () => {
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = useCallback(() => setModalVisible(!modalVisible), [modalVisible])
  return <>
    <button onClick={toggleModal}>toggleModal</button>
    {modalVisible && createPortal(
      <Modal title="modal title" handleMask={toggleModal}>
        body
      </Modal>,
      document.body
    )}
  </>
}