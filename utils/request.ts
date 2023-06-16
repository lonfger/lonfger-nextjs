import axios from "axios"
import { getLocation, getUUID } from "."
import { getAccessToken, setAccessToken } from "./localStorage"
import { CODE, LOGIN_TOKEN_CODES } from "constants/code"
import { SYSTEM_TIPS, TIPS_TEXT } from "constants/tips"

const token_prefix = "Bearer "

async function request () {
  const {
    country,
    languages,
    timezone
  } = await getLocation()
  const instance = axios.create({
    timeout: 8 * 1000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/jsoncharset=UTF-8',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'device-uuid': await getUUID(),
      'device-type': 'WEB',
      'product-code': 'TE-TES-TEST-WEB',
      'product-version-code': '1.0.0',
      'geo-country': country || 'United States',
      'geo-language': languages.length
        ? languages.split(',').slice(0, 5).toString()
        : 'en',
      'geo-timezone': timezone || 'GMT+08:00',
    },
  })
  instance.interceptors.request.use(
    config => ({
      headers: { Authorization: `${ token_prefix }${ getAccessToken() }` },
      ...config
    }),
    error => ({
      ...{ code: -1, message: 'server_error' },
      ...error,
    })
  )
  instance.interceptors.response.use(
    ({ data, headers }) => {
      let { code } = data
      /** 存储、续存token */
      const serverAuthorization: string = headers.authorization ?? ''
      const currentAuthorization: string = getAccessToken() ?? ''
      if (
        serverAuthorization &&
        serverAuthorization !== `${ token_prefix }${ currentAuthorization }`
      ) {
        setAccessToken(serverAuthorization.replace(/^Bearer\s/, ''))
      }
      if (LOGIN_TOKEN_CODES.includes(code)) {
        // to login
        return data
      }
      /** 后端返回code：500，业务目前定义为操作太频繁，需要与httpStatus-500区分开 */
      if (code === CODE.SERVER_ERROR) code = CODE.TOO_MANY

      return {
        code,
        message: SYSTEM_TIPS?.[code] ?? TIPS_TEXT.network_error
      }
    },
    error => {
      const { response, message } = error || {}
      if (response) {
        const { status } = response
        if (status >= 500) {
          // show 500 modal???
          return { code: CODE.SERVER_ERROR, message: TIPS_TEXT.server_error }
        }
        if (status === CODE.AUTHORIZATION) {
          // to login
          return { code: CODE.AUTHORIZATION, message: 're login' }
        }
        // show tips ......
        return { code: -1, message: TIPS_TEXT.network_error }
      }
      if (error.message.includes('timeout')/**  && showTips */) {
        message.error(TIPS_TEXT.network_error || '网络请求超时！');
      }
      if (error.message.includes('Network')/** && showTips */) {
        message.error(TIPS_TEXT.no_network);
      }
      return {code: CODE.NETWORK_ERROR, message: TIPS_TEXT.network_error}
    },
  )

}

type Params = {
  [key: string]: any
}

function post () {}
function get (url: string, params?: Params) {

}