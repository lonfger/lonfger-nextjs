import { Provider } from 'mobx-react'
import dynamic from 'next/dynamic'
import { MDXProvider } from '@mdx-js/react'

import { useStore } from '../store'
import { Layout } from '../components'
import '../css/index.css'
import Image from 'next/image'

const Footer = dynamic(
  () => import('../components/Footer'),
  {
    loading: () => <div>loading components</div>,
    ssr: false
  }
  )

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)

  return (
    <MDXProvider components={{}}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </MDXProvider>

  )
}
