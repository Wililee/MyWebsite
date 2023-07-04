import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LabeledCard} from '../public/components/containers/LabledCard'
import {HorizontalCardContainer} from '../public/components/containers/HorizontalCardContainer'
import {BasePage} from '../public/components/containers/BasePage'

export default function resume() {
  return (
    <><BasePage title="Resume">
        <iframe src="https://drive.google.com/file/d/10vey0PPi31OhRFfCXPdqGuXK9RK6UM6Z/preview" width="900" height="1150" allow="autoplay" style={{margin:"auto"}}></iframe>
    </BasePage>
    
    <footer className={styles.footer}></footer></>

  )
}