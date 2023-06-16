import { GetStaticProps, InferGetStaticPropsType } from "next"

import styles from './index.module.scss'
import { useStore } from "@/store/index"
import { observer } from "mobx-react-lite"
import { createPortal } from "react-dom"


export default observer((props) => {
  const {user, activate} = useStore()
  return <div className={styles.header}>
    {user.account}__{user.nickName} login status: {user.login ? 1 : 0}
    <p>
      {activate.active ? `${activate.active}_${activate.activateType}` : 'buy now'}
    </p>

    </div>
})
