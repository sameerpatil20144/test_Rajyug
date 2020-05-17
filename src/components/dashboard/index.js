/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React from 'react';
import { Image, Row, Container } from 'react-bootstrap';


const Dashboard = () => {
    return (
        <Container>
            <Row className="d-flex flex-column align-items-center" style={{ paddingTop: '30px' }}>
                <Image style={{ width: '100px' }} src="images/shakingHand.png" />
                <Row className="d-flex align-items-center">
                    <h4 style={{ fontSize: "3rem", color: '#585858' }}>Welcome!</h4>
                </Row>
                <h5 style={{ color: '#585858' }}> to RajYug Solutions PVT LTD </h5>
            </Row>
        </Container>
    );
}

export default Dashboard;