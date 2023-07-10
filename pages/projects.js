import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import {HorizontalCardContainer} from '../public/components/containers/HorizontalCardContainer'
import {BasePage} from '../public/components/containers/BasePage'
import {ProjectCard} from '../public/components/containers/ProjectCard'
import {AchievementCard} from '../public/components/containers/AchievementCard'
import { AcademicCapIcon, TrophyIcon, WrenchIcon  } from "@heroicons/react/24/outline";

const graduationIcon = <AcademicCapIcon className="h-8 w-8" />
const trophyIcon = <TrophyIcon className="h-8 w-8" />
const wrenchIcon = <WrenchIcon className="h-8 w-8" />

export default function projects() {
  return (
    <BasePage title="Projects and Achievements">
        <h1 className='mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl pl-8 pt-8'>Featured Projects</h1>
        <HorizontalCardContainer className='pl-20'>
            <ProjectCard title="My Website" description="This very website!" skills={["JavaScript", "React", "CSS"]} gitURL="https://github.com/Wililee/myWebite"/>
            <ProjectCard title="SoBar" description="SoBar is a bar hopping app used to create an optimal path for hoping inbetween bars on a night out." skills={["Java", "SQL"]} gitURL="https://github.com/Wililee/SoBarApp"/>
            <ProjectCard title="Project Olympian" description="Health and fitness app with a focus on Social Media and workout sharing." skills={["TypeScript", "React Native", "SQL"]} gitURL="https://github.com/dimitritsampiras/olympian-mobile-app"/>
        </HorizontalCardContainer>
        <h1 className='mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl pl-8 pt-8'>Achievements</h1>
        <HorizontalCardContainer>
            <AchievementCard title="Graduation" description="I completed my degree in Software Engineering May 2023!" icon={graduationIcon} />
            <AchievementCard title="My Website" description="This very website!" />
            <AchievementCard title="My Website" description="This very website!" />
            <AchievementCard title="My Website" description="This very website!" />
        </HorizontalCardContainer>
        <HorizontalCardContainer>
            <AchievementCard title="Deltahacks" description="A winning Healthcare Assessment application" icon={trophyIcon} URL={"https://devpost.com/software/nursing-handbook-pro"}/>
            <AchievementCard title="Spacehacks" description="The popular choice award for our shiftworker scheduling app" icon={trophyIcon} />
            <AchievementCard title="Shell Eco Marathon" description="A competition to create a super-eco car" icon={wrenchIcon}/>
            <AchievementCard title="My Website" description="This very website!" />
        </HorizontalCardContainer>
    </BasePage>
  )
}
