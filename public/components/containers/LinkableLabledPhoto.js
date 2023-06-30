import Image from 'next/image'
import styles from '../../../styles/Home.module.css';

export const LinkableLabledPhoto = ({link, label, description, imageURL, imageHeight, imageWidth, children}) => {
    return (
    <a href={link} className={styles.card}>
            <h3>{label}</h3>
            <p>{description}</p>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    src={imageURL}
                    height={imageHeight} 
                    width={imageWidth}
                />
            </div>
            {children}
    </a>
    )
}