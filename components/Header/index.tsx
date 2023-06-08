import { GetStaticProps, InferGetStaticPropsType } from "next"

import styles from './index.module.scss'

export default (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div className={styles.header}>header</div>
}

export const getStaticProps: GetStaticProps = async() => {
  return {
    props: {
      name: 'header'
    }
  }
}