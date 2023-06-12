import { initializeStore, useStore } from 'store'
import {useLogin, useUserInfo} from '../hooks/user'

export default () => {
  const isLogin = useLogin()
  const user = useUserInfo()
  const store = initializeStore(false)

  return <div>
    <button onClick={() => store.updateName('update name')}>update</button>
    {user.name ?? 'loading-------'}
  </div>

}