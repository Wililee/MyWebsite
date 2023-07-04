import styles from '../../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import {SkillBox} from '../elements/SkillBox'
import Stack from 'react-bootstrap/Stack';

export const AchievementCard = ({title, description, URL, icon, styles}) => {
    let i = 0;
    return (
        <Card
            border='dark'
            style={{
            styles,
            width: '15rem', 
            margin:'auto',
            }}>
            <Card.Header>{title}{icon}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
