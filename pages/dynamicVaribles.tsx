import getConfig from "next/config"
const Page = ({s3_key,s3_secret}) => {
  const {publicRuntimeConfig} = getConfig()

  return <p>{s3_key} - {s3_secret}</p>
}

Page.getInitialProps = (context: any) => {
  return {
    s3_key: process.env.photoenhancer_S3_KEY,
    s3_secret: process.env.photoenhancer_S3_KEY
  }
}

export default Page