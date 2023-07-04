import styles from '../../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import {SkillBox} from '../elements/SkillBox'
import Stack from 'react-bootstrap/Stack';
import { Col, Row } from 'react-bootstrap';

export const AchievementCard = ({title, description, icon, styles}) => {
    let i = 0;
    return (
        <Card
            border='dark'
            style={{
            styles,
            width: '15rem', 
            margin:'auto',
            }}>
            <Card.Header>
                <Row>
                    <Col sm={9}>
                        {title}
                    </Col>
                    <Col>
                        {icon}
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
