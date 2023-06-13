import { useState } from "react"

export default () => {
  const [name, setName] = useState('张三')

  return <div>
    {name}
    <button onClick={() => setName('里斯')}>哈哈</button>
  </div>
}