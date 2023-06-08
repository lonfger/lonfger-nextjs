import { getSnapshot } from 'mobx-state-tree'
import SampleComponent from '../components/SampleComponent'
import { initializeStore } from '../store'
import { GetStaticProps } from 'next'

import { Header, Layout } from '../components'

export default function Ssg({ initialState }) {
  console.log('ssg')
  return (
    <Layout>
dsads
    </Layout>
  )
  // return <SampleComponent title={'SSG Page'} linkTo="/" store={initialState} />
  // return <SampleComponent title={'SSG Page'} linkTo="/" store={initialState} />
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export const getStaticProps: GetStaticProps = async () => {
  const store = initializeStore()

  store.update()

  return { props: { initialState: getSnapshot(store) } }
}
