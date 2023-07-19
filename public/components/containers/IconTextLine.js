import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

export const IconTextLine = ({icon, text}) => {
    return (
        <Row className='text-xl'>
            <Col sm={2}>
                {icon}
            </Col>
            <Col md={'auto'}>
                {text}
            </Col>
        </Row>
    );
}
