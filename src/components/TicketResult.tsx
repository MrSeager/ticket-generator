import React, { FC, useEffect, useState } from 'react';
//Bootstrap
import { Container, Image, Row, Col } from 'react-bootstrap';
//Icons
import { FaGithubSquare } from "react-icons/fa";

interface TicketResultProps {
    email: string;
    uploadedImage: string | ArrayBuffer | null;
    fullName: string;
    userName: string;
    LogoImg: string;
}

const TicketResult: FC<TicketResultProps> = ({ email, uploadedImage, fullName, userName, LogoImg }) => {
    const imageSrc = typeof uploadedImage === 'string' ? uploadedImage : undefined;
    const [randomNumb, setRundomNumb] = useState<number>(0);

    useEffect(() => {
        const generateRandomNumber = () => {
            const number = Math.floor(10000 + Math.random() * 90000); // Generate a 5-digit number
            setRundomNumb(number);
        };

        generateRandomNumber();
    }, []);

    return(
        <Container fluid className='text-white text-center d-flex flex-column align-items-center'>
            <h2 className='cs-w display-3 cs-fw-800'>Congrats, <span className='cs-tc-gradient'>{fullName}!</span> <br />Your ticket is ready.</h2>
            <p className='cs-tc-one'>We've emailed your ticket to <span className='cs-tc-two'>{email}</span> and will send updates in the run up to the event.</p>
            <Container className='cs-w-two cs-d-grid p-0 cs-bg-frame cs-ratio'>
                <Container className='ps-4 ms-0 mx-3 d-flex flex-column align-items-start justify-content-center'>
                    <Image fluid src={LogoImg} alt='logo' className='w-75' />
                    <p className='ps-5 m-0 cs-tc-one'>Jan 31, 2025 / Austin, TX</p>
                </Container>
                <Container className='m-0 cs-grid-item-one d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='cs-rotate ms-4 cs-tc-three'>#{randomNumb}</h3>
                </Container>
                <Row className='b-0 m-0'>
                    <Col xs={4} className='d-flex flex-column align-items-center justify-content-center'>
                        {imageSrc && <Image fluid src={imageSrc} alt='avatar' className='rounded rounded-3 w-75' />}
                    </Col>
                    <Col xs={8} className='p-0 d-flex flex-column align-items-start justify-content-center'>
                        <h2 className='text-start h4 mb-1 w-100'>{fullName}</h2>
                        <h3 className='mb-1 cs-tc-one h6 d-flex flex-row align-items-center'><FaGithubSquare className='me-2'/> @{userName}</h3>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default TicketResult;