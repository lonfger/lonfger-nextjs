import Footer from "../Footer"
import Header from "../Header"
import styles from './index.module.scss'

export default ({children}) => {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <div className={styles.content}>{children}</div>
      <Footer></Footer>
    </div>
  )
}