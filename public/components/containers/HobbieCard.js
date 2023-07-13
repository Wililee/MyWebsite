import Card from 'react-bootstrap/Card';

export const HobbieCard = ({title, description, imageURL, styles}) => {
    return (
        <Card
            border='dark'
            style={{
            styles,
            width: '25rem', 
            }} className='pb-1 m-auto'>
            <Card.Img variant="top" src={imageURL}/>
            <Card.Body>
                <Card.Title className='text-2xl'>{title}</Card.Title>
                <Card.Text className='text-lg'>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
