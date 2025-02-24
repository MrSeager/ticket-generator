import React, { FC, useState } from 'react';
//Components
import './ticketGenStyle.css';
import TicketForm from './TicketForm.tsx';
import TicketResult from './TicketResult.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import LogoImg from '../assets/images/logo-full.svg';
//Icons

const TicketGen: FC = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer | null>(null);
    const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    return (
        <Container fluid className='cs-bg-image min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3 py-5 overflow-hidden'>
            <Image fluid src={LogoImg} alt='logo' className='mb-4' />
            {!formSubmitted ? (
                <TicketForm 
                    validated={validated}
                    setValidated={setValidated} 
                    uploadedImage={uploadedImage} 
                    setUploadedImage={setUploadedImage} 
                    formValues={formValues} 
                    setFormValues={setFormValues}
                    setFormSubmitted={setFormSubmitted}
                />
            ) : (
                <TicketResult 
                    email={formValues.email}
                    uploadedImage={uploadedImage}
                    fullName={formValues.fullName}
                    userName={formValues.userName}
                    LogoImg={LogoImg}
                />
            )}
        </Container>
    );
}

export default TicketGen;