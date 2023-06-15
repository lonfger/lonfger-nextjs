import axios from "axios";



// async function request() {
//   const instance = axios.create({
//     timeout: 8 * 1000,
//     withCredentials: true,
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8',
//       Accept: 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'device-uuid': await getUUID(),
//       'device-type': 'WEB',
//       'product-code': 'TE-TES-TEST-WEB',
//       'product-version-code': '1.0.0',
//       'geo-country': country || 'United States',
//       'geo-language': languages.length
//         ? languages.split(',').slice(0, 5).toString()
//         : 'en',
//       'geo-timezone': timezone || 'GMT+08:00',
//     },
//   })


// }

type Params = {
  [key: string]: any
}

function post() {}
function get(url: string, params?: Params) {

}