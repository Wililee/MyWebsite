import styles from '../../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import {SkillBox} from '../elements/SkillBox'
import Stack from 'react-bootstrap/Stack';
import { Col, Row } from 'react-bootstrap';
import { LinkIcon  } from "@heroicons/react/24/outline";

export const ProjectCard = ({title, description, imageURL, skills, gitURL, styles}) => {
    let i = 0;
    const linkIcon = <LinkIcon className="h-8 w-8"/>
    return (
        <Card
            border='dark'
            style={{
            styles,
            width: '25rem', 
            margin:'auto',
            }} className='pb-1'>
            <Card.Header>
                <Row>
                    <Col sm={10} className='text-2xl'>
                        {title}
                    </Col>
                    <Col>
                        <Link href={gitURL} target="_blank">
                            {linkIcon}
                        </Link>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Text className='text-lg'>
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
