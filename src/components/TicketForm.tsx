import React, { FC, useCallback } from 'react';
//Dropzone
import { useDropzone, Accept } from 'react-dropzone';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Button, Form } from 'react-bootstrap';
//Images
import DropImg from '../assets/images/icon-upload.svg';
//Icons
import { PiWarningCircleLight } from "react-icons/pi";

interface TicketFormProps {
    validated: boolean;
    setValidated: (validated: boolean) => void;
    uploadedImage: string | ArrayBuffer | null;
    setUploadedImage: (uploadedImage: string | ArrayBuffer | null) => void;
    formValues: { [key: string]: string };
    setFormValues: (formValues: { [key: string]: string }) => void;
    setFormSubmitted: (formSubmitted: boolean) => void;
}

const TicketForm: FC<TicketFormProps> = ({ validated, setValidated, uploadedImage, setUploadedImage, formValues, setFormValues, setFormSubmitted }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || !uploadedImage) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevent page refresh
            setFormSubmitted(true); // Set formSubmitted to true
        }
        setValidated(true);
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            setUploadedImage(reader.result);
        };
    
        if (file) {
            reader.readAsDataURL(file);
        }
    }, []);
    
    const accept: Accept = {
        'image/jpeg': [],
        'image/png': []
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept, multiple: false });


    return (
        <Container fluid className='cs-w text-white p-0'>
            <h1 className='display-3 text-center text-white cs-fw-600'>Your Journey to Coding Conf<br /> 2025 Starts Here!</h1>
            <p className='cs-tc-one text-center'>Secure your spot at next year's biggest coding conference.</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column gap-1 cs-w-form mx-auto'>
                <h2 className='h4 cs-fw-500'>Upload Avatar</h2>
                <Container {...getRootProps()} className='cs-dashed-border cs-bg-white-transparent py-4 d-flex flex-column align-items-center gap-3 cs-hover'>
                    <input {...getInputProps({ accept: 'image/*' })} />
                    <Image fluid src={uploadedImage || DropImg} alt='drop' className='border rounded p-2 cs-bg-white-transparent cs-img' />
                    <p className='text-center cs-tc-one'>Drag and drop or click to upload</p>
                </Container>
                <p className={`cs-transition ${validated && uploadedImage === null ? 'text-danger' : 'cs-tc-one'}`}><PiWarningCircleLight /> Upload your photo (JPG or PNG, max size: 500KB).</p>
                <Form.Group controlId="validationCustom01" className='d-flex flex-column gap-2 position-relative pb-4'>
                    <Form.Label className='m-0 h5'>Full Name</Form.Label>
                    <span className='cs-hover-two rounded-3'>
                        <Form.Control
                            required
                            type='text'
                            name='fullName'
                            value={formValues.fullName || ''}
                            onChange={handleInputChange}
                            className='cs-bg-white-transparent cs-tc-one rounded-3 py-2 cs-formcontrol'
                        />
                    </span>
                    <Form.Control.Feedback type="invalid" className='m-0 position-absolute cs-pos'><PiWarningCircleLight /> Please enter the name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom01" className='d-flex flex-column gap-2 position-relative pb-4'>
                    <Form.Label className='m-0 h5'>Email Address</Form.Label>
                    <span className='cs-hover-two rounded-3'>
                        <Form.Control
                            required
                            type='email'
                            placeholder='example@emal.com'
                            name='email'
                            value={formValues.email || ''}
                            onChange={handleInputChange}
                            className='cs-bg-white-transparent cs-tc-one rounded-3 py-2 cs-placeholder cs-formcontrol'
                        />
                    </span>
                    <Form.Control.Feedback type="invalid" className='m-0 position-absolute cs-pos'><PiWarningCircleLight /> Please enter a valid email address.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom01" className='d-flex flex-column gap-2 position-relative pb-4'>
                    <Form.Label className='m-0 h5'>GitHub Username</Form.Label>
                    <span className='cs-hover-two rounded-3'>
                        <Form.Control
                            required
                            type='text'
                            placeholder='@yourusername'
                            name='userName'
                            value={formValues.userName || ''}
                            onChange={handleInputChange}
                            className='cs-bg-white-transparent cs-tc-one rounded-3 py-2 cs-placeholder cs-formcontrol'
                        />
                    </span>
                    <Form.Control.Feedback type="invalid" className='m-0 position-absolute cs-pos'><PiWarningCircleLight /> Please enter username.</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className='w-100 cs-btn py-2 cs-fw-800 rounded-3 fs-5'>Generate My Ticket</Button>
            </Form> 
        </Container>
    );
}

export default TicketForm;