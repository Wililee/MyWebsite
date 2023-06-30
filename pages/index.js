import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {LinkableLabledPhoto} from '../public/components/containers/LinkableLabledPhoto'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Will Lee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          William Lee
        </h1>

        <p className={styles.description}>
          A website all about Me!
        </p>

        {/* grid */}
        <div className={styles.grid}>

          <LinkableLabledPhoto link="/projects" label="Projects" description="Come check out some of my cool projects ive worked on" imageURL="/../public/images/panarama_top.jpg" imageHeight={144} imageWidth={144}/> 
          <LinkableLabledPhoto link="/personal" label="About me" description="Learn more about my life and interests" imageURL="/../public/images/panarama_top.jpg" imageHeight={144} imageWidth={144}/> 
          <LinkableLabledPhoto link="/resume" label="Resume" description="Take a peek at my Resume" imageURL="/../public/images/panarama_top.jpg" imageHeight={144} imageWidth={144}/> 

        </div>
      </main>

      <footer>

      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
