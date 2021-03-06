/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import Header from '../components/header'
import SearchBar from '../components/searchbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>('')
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Header />
      <main className={styles.main}>
        <div>
          <Image
            src="/google_logo.png"
            quality={100}
            alt="Google Logo"
            width={272}
            height={92}
          />
        </div>
        <SearchBar
          onInputChange={(value) => {
            setInputValue(value)
          }}
        />

        <div className="flex space-x-3 m-4">
          <Link href={`https://google.com/search?q=${inputValue}`}>
            <a target="_blank" rel="noreferrer noopener">
              <Button variant="contained" className={styles.btn}>
                Google Search
              </Button>
            </a>
          </Link>
          <Link href="https://perfects.engineering">
            <a target="_blank" rel="noreferrer noopener">
              <Button variant="contained" className={styles.btn}>
                I&#39;m Feeling Lucky
              </Button>
            </a>
          </Link>
        </div>

        <div className="flex space-x-5 m-4">
          <p className={styles.language}>
            Google offered in:{' '}
            <span className="space-x-6">
              <Link href="/">
                <a>Hausa</a>
              </Link>{' '}
              <Link href="/">
                <a>Igbo</a>
              </Link>{' '}
              <Link href="/">
                <a>Ede Yoruba</a>
              </Link>
              <Link href="/">
                <a>Nigerian Page</a>
              </Link>
            </span>
          </p>
        </div>
      </main>

      <Footer />

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
