import { observer } from "mobx-react-lite";
import { useStore } from "store/index";

export default observer(() => {
  const {user} = useStore()
  return <div>404 {user.account} {user.login}</div>
})