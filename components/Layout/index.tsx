import { useStore } from "@/store/index"
import Footer from "../Footer"
import Header from "../Header"
import styles from './index.module.scss'

export default ({children}) => {
  const {user} = useStore()
  return (
    <div className={styles.layout}>
      <Header></Header>
      <div className={styles.content}>{children}</div>
      <Footer></Footer>
    </div>
  )
}