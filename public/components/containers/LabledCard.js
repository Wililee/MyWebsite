import styles from '../../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import 'tailwindcss/tailwind.css';


export const LabeledCard = ({link, title, description, imageURL, styles}) => {

    return (
      <Link href={link} style={{textDecoration:'none'}}>
        <Card
        className='transform h-64 w-80 transition duration-500 hover:scale-105 '
        border='dark'
        style={{
          styles,
          width: '25rem', 
          margin:'auto',
          borderWidth:5,
        }}>
          <Card.Img variant="top" src={imageURL} style={{height:'100%', width:'100%'}}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  }
  
  export default Card;