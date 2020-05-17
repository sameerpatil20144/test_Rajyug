/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';


const Settings = () => {
    return (
        <div>
            <Card>
                <Card.Header as="h1">
                    <span>Settings</span>
                </Card.Header>
                <Card.Body>
                    <h5>Hi, Welcome to settings</h5>
                    <Row>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Settings Master</h5>
                                    <p className="card-text">About Settings master ...</p>
                                </div>
                                <img className="card-img-top" src="../images/settings.webp" alt="Card image cap" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>

                                <div className="card-body">
                                    <h5 className="card-title">Settings Transaction</h5>
                                    <p className="card-text">About Settings transaction ...</p>
                                </div>
                                <img className="card-img-top" src="../images/settings.webp" alt="Card image cap" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Settings Dashboard</h5>
                                    <p className="card-text">About Settings dashboard ...</p>
                                </div>
                                <img className="card-img-top" src="../images/settings.webp" alt="Card image cap" />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div >
    );
}

export default Settings;

