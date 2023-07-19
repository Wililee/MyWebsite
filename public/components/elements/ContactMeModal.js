import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IconTextLine } from '../containers/IconTextLine';
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

const emailIcon = <SocialIcon network='email' style={{height:37, width: 37}}/>
const linkedInIcon = <SocialIcon url="https://www.linkedin.com/in/lee-william/" style={{height:37, width: 37}}/>
const githubIcon = <SocialIcon url="https://github.com/Wililee" style={{height:37, width: 37}}/>

export const ContactMeModal = ({}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <Button size='lg' variant="outline-success" onClick={handleShow}>Contact Me</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Come say Hi</Modal.Title>
          </Modal.Header>
          <Modal.Body className='flex flex-col space-y-4'>
            <IconTextLine icon={emailIcon} text={'leewks@gmail.com'}/>
            <Link href={'https://www.linkedin.com/in/lee-william/'} target="_blank">
              <IconTextLine icon={linkedInIcon} text={'linkedin.com/in/lee-william'}/>
            </Link>
            <Link href={'https://github.com/Wililee'} target="_blank">
              <IconTextLine icon={githubIcon} text={'github.com/Wililee'}/>
            </Link>
            </Modal.Body>
            <Modal.Body className='text-xl'>
              Or call me at : 519-312-6775
            </Modal.Body>
        </Modal>
      </>
    );
}