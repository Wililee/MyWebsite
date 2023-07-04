import styles from '../../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import {SkillBox} from '../elements/SkillBox'
import Stack from 'react-bootstrap/Stack';
import { Col, Row } from 'react-bootstrap';

export const AchievementCard = ({title, description, icon, URL, styles}) => {

    const titleComponent = URL 
    ? <Col sm={9}><Link href={URL} target="_blank" className='text-decoration-line: underline'> {title} </Link></Col>
    : <Col sm={9}>{title}</Col>;

    return (
        <Card
            border='dark'
            style={{
            styles,
            width: '15rem', 
            margin:'auto',
            }}>
            <Card.Header>
                <Row className='text-xl'>
                    {titleComponent}
                    <Col>
                        {icon}
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Text className='text-lg'>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
