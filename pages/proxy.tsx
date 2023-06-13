import { GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next"
import { useCallback, useEffect, useState } from "react"
import useSWR from 'swr'

type Address = {
  ip: string
}

const fetcher = (url) => fetch(url).then((res) => res.json())
export default ({ posts = {ip: 1243}}) => {
// export default ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
// export default ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [ip, setIp] = useState(posts.ip)
  const [status, setStatus] = useState(0)

  const handleClick = useCallback(() => {
    if (status === 3) setStatus(0)
    else setStatus(status + 1)
  }, [status])

  const api = async() => {
    const res = await fetch('https://pdf.easeus.com/apipdf/user/pdfuserinfo')
    // const res = await fetch('/api/user/pdfuserinfo')
      const posts = await res.json()
      console.log(posts.ip)

  }
  useEffect(() => {
    api()
  },[])

  return (
    <div>
      <div>proxy date</div>
      <button onClick={handleClick}>change status</button>
      {!status && <p>ready</p>}
      {status === 1 && <p>prepare</p>}
      {status === 2 && <p>upload</p>}
      {status === 3 && <p>download</p>}
    </div>
  )
}

// export const getServerSideProps = async () => {
//   // 调用外部 API 获取博文列表
//   const res = await fetch('/api')
//   const posts = await res.json()
//   console.log(posts.ip)
//   // 如何没有数据，那么就跳转到首页
//   if (!posts) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   // 通过返回 { props: { posts } } 对象，Blog 组件
//   // 在构建时将接收到 `posts` 参数
//   return {
//     props: {
//       posts,
//     },
//   }
// }

// 此函数在构建时被调用
// export const getStaticProps: GetStaticProps = async () => {
//   // 调用外部 API 获取博文列表
//   const res = await fetch('/api')
//   const posts = await res.json()
//   console.log(posts.ip)
//   // 如何没有数据，那么就跳转到首页
//   if (!posts) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   // 通过返回 { props: { posts } } 对象，Blog 组件
//   // 在构建时将接收到 `posts` 参数
//   return {
//     props: {
//       posts,
//     },
//   }
// }