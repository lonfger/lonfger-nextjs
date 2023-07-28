import { MDXProvider } from '@mdx-js/react'
import { Provider } from 'mobx-react'

import Auth from '@/components/Auth'
import '@/utils/i18n'
import { Suspense } from 'react'
import { useStore } from 'store/index'
import { Layout } from '../components'
import '../css/index.css'

export default function App({ Component, pageProps }) {
  const store = useStore()

  return (
    <Suspense fallback="loading">
      <MDXProvider components={{}}>
        <Provider store={store}>
          <Auth>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Auth>
        </Provider>
      </MDXProvider>
    </Suspense>


  )
}
