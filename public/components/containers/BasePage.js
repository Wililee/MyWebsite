import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Children } from 'react';
import 'tailwindcss/tailwind.css';
import {NavigationBar} from './NavigationBar'

export const BasePage = ({title, children}) => {
  return (
    <div>
        <NavigationBar/>
        <h1 className={styles.title}>
          {title}
        </h1>
        {children}
    </div>
  )
}
