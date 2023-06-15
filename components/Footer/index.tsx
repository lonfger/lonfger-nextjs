import { GetStaticProps, InferGetStaticPropsType } from 'next'
import styles from './index.module.scss'
import { observer } from 'mobx-react-lite'
export default observer((props) => {
  return <div className={styles.footer}>footer</div>
})
