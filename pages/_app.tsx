import { Provider } from 'mobx-react'
import { useStore } from '../store'
import '../css/index.css'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
