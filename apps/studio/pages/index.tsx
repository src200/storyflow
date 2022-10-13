import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from "next/dynamic"
import styles from '../styles/Home.module.css'

import { EditorProps } from '../components/Editor';

const Editor = dynamic<EditorProps>(() => import('../components/Editor'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Storyflow studio</title>
        <meta name="description" content="Storyflow studio for creating aweseom stories." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Editor width={600} height={400} />
      </main>
    </div>
  )
}

export default Home
