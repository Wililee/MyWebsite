import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LabeledCard} from '../public/components/containers/LabledCard'
import {HorizontalCardContainer} from '../public/components/containers/HorizontalCardContainer'
import {BasePage} from '../public/components/containers/BasePage'
import { Col, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <BasePage title="William Lee">
      <Col>

        <Row className='py-2'>
          <Head>
            <title>Will Lee</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </Row>

        <Row>
          <h2 className='text-center'>
            A website all about Me!
          </h2>
        </Row>

        <Row className='p-20'>
          <HorizontalCardContainer>
            <LabeledCard link="/projects" title="Projects and Achievements" description="Come check out some of my cool projects." imageURL="/../../images/SobarMap.jpg"/> 
            <LabeledCard link="/personal" title="About me" description="Learn more about my life and interests." imageURL="/../../images/panarama_top.jpg"/>
            <LabeledCard link="/resume" title="Resume" description="Looking into hiring -> Take a peek at my Resume?" imageURL="/../../images/fib16.jpg"/>
          </HorizontalCardContainer>
        </Row>

      </Col>
    </BasePage>
  )
}
