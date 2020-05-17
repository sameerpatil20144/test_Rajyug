/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Inventories = () => {
    return (
        <div>
            <Card>
                <Card.Header as="h1">
                    <span>Inventories</span>
                </Card.Header>
                <Card.Body>
                    <h5>Hi ,Welcome to Inventories </h5>
                    <Row>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Inventories Master</h5>
                                    <p className="card-text">About Inventories master ...</p>
                                </div>
                                <img className="card-img-top" src="../images/inventories.png" alt="Card image cap" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>

                                <div className="card-body">
                                    <h5 className="card-title">Inventories Transaction</h5>
                                    <p className="card-text">About Inventories transaction ...</p>
                                </div>
                                <img className="card-img-top" src="../images/inventories.png" alt="Card image cap" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Inventories Dashboard</h5>
                                    <p className="card-text">About Inventories dashboard ...</p>
                                </div>
                                <img className="card-img-top" src="../images/inventories.png" alt="Card image cap" />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div >
    );
}

export default Inventories;