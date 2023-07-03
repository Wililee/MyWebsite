import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LabeledCard} from '../public/components/containers/LabledCard'
import {HorizontalCardContainer} from '../public/components/containers/HorizontalCardContainer'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Will Lee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <h1 className={styles.title}>
          William Lee
        </h1>

        <p className={styles.description}>
          A website all about Me!
        </p>

        {/* grid */}
        <HorizontalCardContainer>
          <LabeledCard link="/projects" title="Projects and Achievements" description="Come check out some of my cool projects." imageURL="/../../images/SobarMap.jpg"/> 
          <LabeledCard link="/personal" title="About me" description="Learn more about my life and interests." imageURL="/../../images/panarama_top.jpg"/>
          <LabeledCard link="/resume" title="Resume" description="Looking into hiring -> Take a peek at my Resume?" imageURL="/../../images/fib16.jpg"/>
        </HorizontalCardContainer>
        


      <footer className={styles.footer}>

      </footer>


      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}
