import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Children } from 'react';

export const HorizontalCardContainer = ({children}) => {
    return (
        <Container>
            <Row style={{margin:'auto'}}>
                {children.map(child => {
                    return <Col>{child}</Col>
                })}
            </Row>
      </Container>
    );
  }
  
  export default HorizontalCardContainer;