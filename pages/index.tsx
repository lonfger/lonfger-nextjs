import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

import i18n from '@/utils/i18n'
import { observer } from 'mobx-react'
import { Trans, useTranslation } from 'react-i18next'
import { useStore } from 'store/index'
import { getLocation, getUUID } from 'utils/index'

export default observer(props => {
  const router = useRouter()
  const {pid} = router.query
  const {user, activate} = useStore()
  const [modal, setModal] = useState(null)
  const {t} = useTranslation()

  useEffect(() => {
    getLocation()
    getUUID()
  },[])

  const nickName = useMemo(() => user.nickName, [user.nickName])
  useEffect(() => {
    console.log('login', user.login)
  }, [user.login])

  const lngs = {
    en: { nativeName: 'English' },
    zh: { nativeName: '中文' }
  };


  return (
    <main {...props} >
       <select onChange={(evt) => {
          i18n.changeLanguage(evt.target.value)
        }}>
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng} label={lngs[lng].nativeName}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} />
          ))}
        </select>
        <p>{t('welcome')}--------------------</p>
        <p>{t('time', { time: new Date() })}</p>

        <Trans i18nKey="author">
        </Trans>

      {/* <button onClick={() => user.updateNickName('xixi')}>update nickname</button>
      <button onClick={() => activate.updateStatus('year')}>update activate</button>
      <button onClick={() => {test('month')}}> test update store in utils { user.login.toString()}</button>
      <button onClick={() =>  router.push('/user')}>user</button>
      <button onClick={() => modal && modal.hide()}>hide modal</button> */}

    </main>
  )
})