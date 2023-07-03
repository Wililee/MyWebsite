import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LabeledCard} from '../public/components/containers/LabledCard'
import {HorizontalCardContainer} from '../public/components/containers/HorizontalCardContainer'
import {BasePage} from '../public/components/containers/BasePage'
import {ProjectCard} from '../public/components/containers/ProjectCard'

export default function projects() {
  return (
    <BasePage title="Projects and Achievements">
        <ProjectCard title="My Website" description="This very website!" skills={["JavaScript", "React", "CSS"]} gitURL="https://github.com/Wililee/myWebite"/>
    </BasePage>
  )
}
