import { Provider } from 'mobx-react'
import { useStore } from '../store'
import '../css/index.css'
import { Layout } from '../components'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
