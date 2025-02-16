import React, { FC, useCallback } from 'react';
//Dropzone
import { useDropzone } from 'react-dropzone';
//Components
import './ticketGenStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Images
import LogoImg from '../assets/images/logo-full.svg';
import DropImg from '../assets/images/icon-upload.svg';

const TicketGen: FC = () => {
    const onDrop = useCallback((acceptedFiles) => {
        // Handle the uploaded file here
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', multiple: false });

    return (
        <Container fluid className='cs-bg-image min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3'>
            <Image fluid src={LogoImg} alt='logo' className='mb-5' />
            <h1 className='text-center text-white cs-fw-600'>Your Journey to Coding Conf 2025 Starts Here!</h1>
            <p className='cs-tc-one '>Secure your spot at next year's biggest coding conference.</p>
            <Container className='w-50 text-white d-flex flex-column gap-2'>
                <h2 className='h4 cs-fw-500'>Upload Avatar</h2>
                <Container {...getRootProps()} className='cs-dashed-border cs-bg-white-transparent py-4 d-flex flex-column align-items-center gap-3'>
                    <input {...getInputProps({ accept: 'image/*' })} />
                    <Image src={DropImg} alt='drop' className='border rounded p-2 cs-bg-white-transparent' />
                    <p className='text-center'>Drag and drop or click to upload</p>
                </Container>
                <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
                
                <Button className='cs-btn py-2 cs-fw-800 rounded-3 fs-5'>Generate My Ticket</Button>
            </Container>
        </Container>
    );
}

const styles = {
    dropzone: {
        border: '2px dashed #007bff',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer'
    }
};

export default TicketGen;