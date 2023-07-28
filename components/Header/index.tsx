
import { useStore } from "@/store/index"
import { observer } from "mobx-react-lite"
import Head from 'next/head'
import Link from "next/link"
import styles from './index.module.scss'



export default observer((props) => {
  const { user, activate } = useStore()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      {/* <style jsx>
        {`
        .header {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          height: 72px;
          background: red;
          .navs {
            display: flex;
            margin: 0 auto;
            height: 100%;
            align-items: center;
            justify-content: space-around;
            list-style: none;
            padding: 0;
          }
          .nav {
            width: 80px;
            background-color: rgba($color: #000000, $alpha: .2);
            color: rgba($color: #000000, $alpha: .8);
            text-align: center;
            line-height: 72px;
            padding: 0;
          }
        }
      `}
      </style> */}
      <div className={styles.header}>

        {user.account}__{user.nickName} login status: {user.login ? 1 : 0}
        <p>
          {activate.active ? `${ activate.active }_${ activate.activateType }` : 'buy now'}
        </p>
        <ul className={styles.navs}>
          {['/', '/user', '/404'].map((path) => (
            <li className={styles.nav} key={path}><Link href={path}>{path}</Link></li>
          ))}
        </ul>
      </div>
    </>

  )
})
