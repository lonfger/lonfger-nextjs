import { GetStaticProps, InferGetStaticPropsType } from "next"

import styles from './index.module.scss'
import { useStore } from "@/store/index"
import { observer } from "mobx-react-lite"

export default observer((props) => {
  const {user, activate} = useStore()
  return <div className={styles.header}>
    {user.account}__{user.nickName}
    <p>
      {activate.active ? `${activate.active}_${activate.activateType}` : 'buy now'}
    </p>
    </div>
})
