import React from "react";
import {Button, Card, Col, Form, Row, Table} from "react-bootstrap";
import '../../assets/css/summary.css';
import Alert from 'react-bootstrap/Alert';


function Summary() {


    return (
        <>
            <div className="card-summary">
                <Card>
                    <Card.Header>
                        <Card.Title className="card-title font-weight-bold">
                            <h4>Wallet</h4>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row className="pt-3 pb-3">
                            <Col className="pr-1" md="5">
                                <Card.Text className="pl-3">
                                    <div className="summary-balance">
                                        <span>Account Balance</span>
                                        <span className="balance-amount">$ 14,000.00</span>
                                    </div>
                                </Card.Text>
                                <Card.Text className="text-success pl-3">
                                    <span className="percentage-value">60%</span> Higher (past 7 days)
                                </Card.Text>
                            </Col>
                            <Col className="pr-1" md="6">
                                <div className="balance-chart">
                                    <Row>
                                        <Col className="pr-1">
                                            <p className="d-inline-block mb-2 text-light-grey text-bold">Balance
                                                Chart</p>
                                        </Col>
                                        <Col className="pr-1">
                                                    <span className="mb-0 text-light-grey text-bold">
                                                        <i className="fas fa-caret-up"/> 260
                                                    </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1">
                                            2020.1.20
                                        </Col>
                                        <Col className="pr-1">
                                            +12.5 (2.8%)
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Summary;