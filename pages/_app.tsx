import { Provider } from 'mobx-react'
import { MDXProvider } from '@mdx-js/react'

import { useStore } from 'store/index'
import { Layout } from '../components'
import '../css/index.css'
import Modal from '@/components/Modal'

export default function App({ Component, pageProps }) {
  const store = useStore()

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
