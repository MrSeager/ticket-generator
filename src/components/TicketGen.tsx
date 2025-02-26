import React, { FC, useState } from 'react';
//Components
import './ticketGenStyle.css';
import TicketForm from './TicketForm.tsx';
import TicketResult from './TicketResult.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated, useTransition } from '@react-spring/web';
//Images
import LogoImg from '../assets/images/logo-full.svg';
//Icons

const TicketGen: FC = () => {
    const [validated, setValidated] = useState<boolean>(false);
    const [uploadedImage, setUploadedImage] = useState<string | ArrayBuffer | null>(null);
    const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    const formTransition = useTransition(formSubmitted, {
        from: { opacity: 0, scale: 0, position: 'absolute' },
        enter: { opacity: 1, scale: 1, position: 'relative' },
        leave: { opacity: 0, scale: 0, position: 'absolute' },
    })

    return (
        <Container fluid className='cs-bg-image min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3 py-5 overflow-hidden'>
            <Image fluid src={LogoImg} alt='logo' className='mb-4' />
            {formTransition((style, item) =>
                item ? (
                    <animated.div style={style} className='w-100'>
                        <TicketResult 
                            email={formValues.email}
                            uploadedImage={uploadedImage}
                            fullName={formValues.fullName}
                            userName={formValues.userName}
                            LogoImg={LogoImg}
                        />
                    </animated.div>
                ) : (
                    <animated.div style={style} className='w-100'>
                        <TicketForm 
                            validated={validated}
                            setValidated={setValidated} 
                            uploadedImage={uploadedImage} 
                            setUploadedImage={setUploadedImage} 
                            formValues={formValues} 
                            setFormValues={setFormValues}
                            setFormSubmitted={setFormSubmitted}
                        />
                    </animated.div>
                )
            )}
        </Container>
    );
}

export default TicketGen;