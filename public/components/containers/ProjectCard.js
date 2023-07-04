import styles from '../../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import {SkillBox} from '../elements/SkillBox'
import Stack from 'react-bootstrap/Stack';

export const ProjectCard = ({title, description, imageURL, skills, gitURL, styles}) => {
    let i = 0;
    return (
        <Card
            border='dark'
            style={{
            styles,
            width: '25rem', 
            margin:'auto',
            }}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Stack direction="horizontal" gap={2}>
                {skills.map(skill => 
                        <SkillBox key={i++} text={skill}/>
                )}
                </Stack>
            </Card.Body>
        </Card>
    );
}
