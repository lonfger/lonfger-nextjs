import { getSnapshot } from 'mobx-state-tree'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { initializeStore } from '../store'
import styles from './index.module.scss'
import { useRouter } from 'next/router'



export default function Ssg(props) {
  const router = useRouter()
  const {pid} = router.query

  return (
    <main {...props} >
      <div className={styles.wrap}>
        <ul>
          <li>
            <Link href='/mdx-test'>mdx-test</Link>
          </li>
          <li>
            <button onClick={() => router.push('/mdx-test?name=zhangsan', undefined, {shallow: true})}>to mdx-test by router</button>
          </li>
          <li>
            <Link href='/user'>signal page</Link>
          </li>
        </ul>



      </div>

    </main>
  )
}




// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export const getStaticProps: GetStaticProps = async () => {
  const store = initializeStore()

  store.update()

  return { props: { initialState: getSnapshot(store) } }
}
