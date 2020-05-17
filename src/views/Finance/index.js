/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Finance = () => {
    return (
        <div>
            <Card>
                <Card.Header as="h1">
                    <span>Finance</span>
                </Card.Header>
                <Card.Body>
                    <h5>Hi, Welcome to Finance </h5>
                    <Row>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Finance Master</h5>
                                    <p className="card-text">About Finance master ...</p>
                                </div>
                                <img className="card-img-top" src="../images/finance.jpg" alt="Card image cap" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>

                                <div className="card-body">
                                    <h5 className="card-title">Finance Transaction</h5>
                                    <p className="card-text">About Finance transaction ...</p>
                                </div>
                                <img className="card-img-top" src="../images/finance.jpg" alt="Card image cap" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Finance Dashboard</h5>
                                    <p className="card-text">About Finance dashboard ...</p>
                                </div>
                                <img className="card-img-top" src="../images/finance.jpg" alt="Card image cap" />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Finance;