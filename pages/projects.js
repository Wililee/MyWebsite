import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import {HorizontalCardContainer} from '../public/components/containers/HorizontalCardContainer'
import {BasePage} from '../public/components/containers/BasePage'
import {ProjectCard} from '../public/components/containers/ProjectCard'
import {AchievementCard} from '../public/components/containers/AchievementCard'
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const graduationIcon = <AcademicCapIcon className="h-8 w-8" />

export default function projects() {
  return (
    <BasePage title="Projects and Achievements">
        <h1>Featured Projects</h1>
        <HorizontalCardContainer>
            <ProjectCard title="My Website" description="This very website!" skills={["JavaScript", "React", "CSS"]} gitURL="https://github.com/Wililee/myWebite"/>
            <ProjectCard title="My Website" description="This very website!" skills={["JavaScript", "React", "CSS"]} gitURL="https://github.com/Wililee/myWebite"/>
            <ProjectCard title="My Website" description="This very website!" skills={["JavaScript", "React", "CSS"]} gitURL="https://github.com/Wililee/myWebite"/>
        </HorizontalCardContainer>
        <h1>Achievements</h1>
        <HorizontalCardContainer>
            <AchievementCard title="Graduation" description="I completed my degree in Software Engineering May 2023!" icon={graduationIcon} URL="https://github.com/Wililee/myWebite"/>
            <AchievementCard title="My Website" description="This very website!" URL="https://github.com/Wililee/myWebite"/>
            <AchievementCard title="My Website" description="This very website!" URL="https://github.com/Wililee/myWebite"/>
            <AchievementCard title="My Website" description="This very website!" URL="https://github.com/Wililee/myWebite"/>
        </HorizontalCardContainer>
        <HorizontalCardContainer>
            <AchievementCard title="My Website" description="This very website!" URL="https://github.com/Wililee/myWebite"/>
            <AchievementCard title="My Website" description="This very website!" URL="https://github.com/Wililee/myWebite"/>
            <AchievementCard title="My Website" description="This very website!" URL="https://github.com/Wililee/myWebite"/>
            <AchievementCard title="My Website" description="This very website!" URL="https://github.com/Wililee/myWebite"/>
        </HorizontalCardContainer>
    </BasePage>
  )
}
