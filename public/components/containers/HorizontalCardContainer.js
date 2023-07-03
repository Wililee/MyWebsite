import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Children } from 'react';

export const HorizontalCardContainer = ({children}) => {
    let i = 1;
    return (
        <Container>
            <Row style={{margin:'auto'}}>
                {children.map(child => {
                    return <Col key={i++}>{child}</Col>
                })}
            </Row>
      </Container>
    );
  }
  
  export default HorizontalCardContainer;