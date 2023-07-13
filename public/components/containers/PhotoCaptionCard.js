import Card from 'react-bootstrap/Card';

export const PhotoCaptionCard = ({description, imageURL, styles}) => {
    return (
        <Card
            border='dark'
            style={{
            styles,
            width: '25rem', 
            margin:'auto',
            }} className='pb-1'>
            <Card.Img variant="top" src={imageURL}/>
            <Card.Body>
            <Card.Text className='text-lg'>
                {description}
            </Card.Text>
            </Card.Body>
        </Card>
    );
}
