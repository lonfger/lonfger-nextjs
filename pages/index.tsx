import { getSnapshot } from 'mobx-state-tree'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {createPortal} from 'react-dom'

import { initializeStore } from '../store'
import { observer } from 'mobx-react'
import {useStore} from 'store/index'
import { getLocation, getUUID, showLoginModal, test } from 'utils/index'
import Modal from '@/components/Modal'

export default observer(props => {
  const router = useRouter()
  const {pid} = router.query
  const {user, activate} = useStore()
  const [modal, setModal] = useState(null)

  useEffect(() => {
    getLocation()
    getUUID()
  },[])

  const nickName = useMemo(() => user.nickName, [user.nickName])
  useEffect(() => {
    console.log('login', user.login)
  }, [user.login])


  return (
    <main {...props} >
      <button onClick={() => user.updateNickName('xixi')}>update nickname</button>
      <button onClick={() => activate.updateStatus('year')}>update activate</button>
      <button onClick={() => {test('month')}}> test update store in utils { user.login.toString()}</button>
      <button onClick={() =>  router.push('/user')}>user</button>
      <button onClick={() => modal && modal.hide()}>hide modal</button>

    </main>
  )
})