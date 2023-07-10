import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LabeledCard} from '../public/components/containers/LabledCard'
import {HorizontalCardContainer} from '../public/components/containers/HorizontalCardContainer'
import {BasePage} from '../public/components/containers/BasePage'
import { TabContainer } from '../public/components/containers/TabContainer'
import { MultiItemCarosel } from '../public/components/containers/MultiItemCarosel'

export default function personal() {
  const items = [
    {
        id: 1,
        tabTitle: 'Hobbies',
        title: 'Title 1',
        content: <div><p>beans</p></div>,
    },
    {
        id: 2,
        tabTitle: 'Family and Friends',
        title: 'Title 2',
        content: <div><p>beans</p></div>,
    },
    {
        id: 3,
        tabTitle: 'Travels',
        title: 'Title 3',
        content: <div><p>beans</p></div>,
    },
];

  return (
    <BasePage title="Personal">
      <TabContainer tabs={items}/>
      <MultiItemCarosel/>
    </BasePage>
  )
}