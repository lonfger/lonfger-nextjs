import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import Array from '@/components/Array'
import { IStore } from '@/store/index'
import axios from 'axios'
import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { getLocation, getUUID } from 'utils/index'
import styles from './index.module.scss'

export default inject('user')(observer((props: {user: IStore['user']}) => {
  const router = useRouter()
  const {pid} = router.query
  const [modal, setModal] = useState(null)
  const {t} = useTranslation()
  const {user} = props

  useEffect(() => {
    getLocation()
    getUUID()
  },[])

  useEffect(() => {
    console.log('login', user.login)
    test()

  }, [user.login])

  const lngs = {
    en: { nativeName: 'English' },
    zh: { nativeName: '中文' }
  };

  const test = useCallback(async () => {
    axios.get('/api/user/subscription', {
      timeout: 8 * 1000,
      withCredentials: true,
      // baseURL: 'https://testserver.easeus.com:44310',
      // params: {
      //   browser_id: 'longfengz@foxmail.com',
      //   password: 'asd@1234',
      //   product_license: 1
      // },

      headers: {
        "Content-Type": "application/json",
      "Accept": 'application/json',
      'Access-Control-Allow-Origin': '*',
      'device-uuid': 'def7c62d2c4e3fec0f6a577678e0d364',
      'device-type': 'WEB',
      'product-code': 'MU-PDF-FREE-WEB',
      'product-version-code': '1.0.0',
      'geo-country': 'United States',
      'content-type': 'multipart/form-data',
      'geo-language':  'en',
      'geo-timezone':'GMT+08:00',
      "Authorization": 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODA4MVwvYXBpXC92aXNcL2xvZ2luIiwiaWF0IjoxNjA2MjgzMDM2LCJleHAiOjE2MDYyODMwOTYsIm5iZiI6MTYwNjI4MzAzNiwianRpIjoibHlhNFpPOUVuTUhNc01qQyIsInN1YiI6MTEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.3sHhzLv2B-XtuZ_gnwkeT0OMEMD6GxpqV583CcbHRyY'
      },
    })
    .then(function (response) {
      console.log(response);
      // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });

  },[])

  const handleClick = e => {
    console.log(e.nativeEvent.offsetX)
    user.updateList([1,2,3])
  }

  useEffect(() => {
    console.log(user.list)
  },[user.list])
  return (
    <main {...props} >
      <Link href="/dynamicVaribles">环境变量</Link>

      <div className={styles.parent} onClick={e => handleClick(e)}>
        update list
      </div>
      <Array list={user.list} />

       {/* <select onChange={(evt) => {
          i18n.changeLanguage(evt.target.value)
        }}>
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng} label={lngs[lng].nativeName}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} />
          ))}
        </select> */}
        {/* <p>{t('welcome')}--------------------</p> */}
        {/* <p>{t('time', { time: new Date() })}</p> */}

        {/* <Trans i18nKey="author">
        </Trans> */}

      {/* <button onClick={() => user.updateNickName('xixi')}>update nickname</button>
      <button onClick={() => activate.updateStatus('year')}>update activate</button>
      <button onClick={() => {test('month')}}> test update store in utils { user.login.toString()}</button>
      <button onClick={() =>  router.push('/user')}>user</button>
      <button onClick={() => modal && modal.hide()}>hide modal</button> */}

    </main>
  )
}))