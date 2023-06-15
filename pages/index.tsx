import { getSnapshot } from 'mobx-state-tree'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import { initializeStore } from '../store'
import { observer } from 'mobx-react'
import {useStore} from 'store/index'
import { test } from 'utils/index'

export default observer(props => {
  const router = useRouter()
  const {pid} = router.query
  const {user, activate} = useStore()

  return (
    <main {...props} >
      <button onClick={() => user.updateNickName('xixi')}>update nickname</button>
      <button onClick={() => activate.updateStatus('year')}>update activate</button>
      <button onClick={() => test('month')}> test update store in utils</button>
    </main>
  )
})