import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Children } from 'react';
import {Navigationbar} from './Navigationbar'
export const BasePage = ({title, children}) => {
  return (
    <div >
        <Navigationbar/>
        <h1 className={styles.title}>
          {title}
        </h1>

        {children}
      <footer className={styles.footer}></footer>
    </div>
  )
}
