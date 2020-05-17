/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const HRManagement = () => {
    return (
        <div>
            <Card>
                <Card.Header as="h1">
                    <span>HR</span>
                </Card.Header>
                <Card.Body>
                    <h5>Hi, Welcome to HR </h5>
                    <Row>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">HR Master</h5>
                                    <p className="card-text">About HR master .....</p>
                                </div>
                                <img className="card-img-top" src="../images/hr-master.svg" alt="Card image cap" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>

                                <div className="card-body">
                                    <h5 className="card-title">HR Transaction</h5>
                                    <p className="card-text">About HR transaction .....</p>
                                </div>
                                <img className="card-img-top" src="../images/hr-master.svg" alt="Card image cap" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">HR Dashboard</h5>
                                    <p className="card-text">About HR dashboard .....</p>
                                </div>
                                <img className="card-img-top" src="../images/hr-master.svg" alt="Card image cap" />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HRManagement;