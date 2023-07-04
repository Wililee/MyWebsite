import Nav from 'react-bootstrap/Nav';
import 'tailwindcss/tailwind.css';

export const NavButton = ({text, relativeURL}) => {
    return(
        <div className='text-2xl'>
            <Nav.Link href={relativeURL} className='text-gray-900 dark:text-black hover:underline text-2xl btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] bg-white ease-out hover:translate-y-1 transition-all rounded'>{text}</Nav.Link>
        </div>
    )}
