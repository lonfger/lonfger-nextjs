import { MDXProvider } from '@mdx-js/react'
import { Provider } from 'mobx-react'

import Auth from '@/components/Auth'
import { initializeStore } from '@/store/index'
import '@/utils/i18n'
import { Suspense } from 'react'
import { Layout } from '../components'
import '../css/index.css'

export default function App({ Component, pageProps }) {
  const {user, activate} = initializeStore(null)
  return (
    <Suspense fallback="loading">
      <MDXProvider components={{}}>
        <Provider user={user} activate={activate}>
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
