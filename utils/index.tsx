import { initializeStore } from "store/index"
import { getSessionStorage } from "./sessionStorage"
import { GetResult } from "@fingerprintjs/fingerprintjs"
import { USER_ACCESS_TOKEN, getItem } from "./localStorage"
import { render, hydrate } from "react-dom"
import { hydrateRoot } from 'react-dom/client'
import Modal from "@/components/Modal"
// import FingerprintJS from '@fingerprintjs/fingerprintjs'

export const IP_JS = 'https://ipapi.co/json/'

export const test = (t: string) => {
  const { activate } = initializeStore(null)
  activate.updateStatus()
}

export type ILocation = {
  ip: string;
  country: string;
  languages: string;
  timezone: string;
  country_name: string;
}
export const getLocation: () => Promise<ILocation> = async () => {
  const location = getSessionStorage('location')
  return location ? Promise.resolve(JSON.parse(location)) : fetch(IP_JS, { method: 'get' })
}
export const getUUID: () => Promise<GetResult['visitorId']> = async () => {
  return import('@fingerprintjs/fingerprintjs')
  .then(FingerprintJS => FingerprintJS.load({delayFallback: 200}))
  .then(fp => fp.get())
  .then(res => res.visitorId)
}
export const getBrowserInfo = () => {
  const {
    language,
    userAgent,
    userAgentData
  } = navigator
  const {brands: [,, info], platform, mobile} = userAgentData
  return {
    language,
    platform,
    version: info.version,
    brand: info.brand,
    major: userAgent.split(" ")[0].split("/")[1]
  }
}
export const hideLoginModal = (el) => {
  el.remove()
}

export const showLoginModal = () => {
  let el = document.createElement('div')
  el.setAttribute('id', 'modal_root')
  document.body.appendChild(el)

  const data = {
    el,
    hide() {
      if (document.body.contains(el)) el.remove()
      el = null
    }
  }
  hydrateRoot(el, <Modal title="to login" handleMask={() => data.hide()}>to login</Modal>)
  return data
}
export const initModal = (id?: string) => {
  // const modal_root = document.getElementById('modal_root')


  let el = document.createElement('div')
  el.setAttribute('id', 'modal_root')
  document.body.appendChild(el)

  const data = {
    el,
    hide() {
      if (document.body.contains(el)) el.remove()
      el = null
    }
  }
  hydrateRoot(<Modal title="to login" handleMask={() => data.hide()}>to login</Modal>, el)
  return data
}