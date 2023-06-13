import { getSnapshot } from 'mobx-state-tree'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {createPortal} from 'react-dom'
import React, { useCallback } from 'react'

import { initializeStore } from '../store'
import styles from './index.module.scss'

import img from 'assets/1.webp'
import Modal from 'components/Modal'


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
          <li>
            <Link href='/proxy'>proxy page</Link>
          </li>
          <li>
            <Link href='/components'>user</Link>
          </li>
          <li>{process.env.customKey}</li>
          <li><Image src={img} alt="3232" /></li>
        </ul>

        <li>
        </li>
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
