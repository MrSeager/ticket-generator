import React, { FC } from 'react';
//Components
import './ticketGenStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import LogoImg from '../assets/images/logo-full.svg';

const TicketGen: FC = () => {
    return (
        <Container fluid className='cs-bg-image min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3'>
            <Image fluid src={LogoImg} alt='logo' className='mb-5' />
            <h1 className='text-center text-white cs-fw-600'>Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className='cs-tc-one '>Secure your spot at next year's biggest coding conference.</p>
        </Container>
    );
}

export default TicketGen;