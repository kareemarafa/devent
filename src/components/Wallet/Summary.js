import React from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import '../../assets/css/summary.css';
import Alert from 'react-bootstrap/Alert';




function Summary() {


    return (
        <>
            <Row>
                <Col md="12">
                    <div className="main-card bg-dark" bg="dark">
                        <Alert className="card-summary p-3 mb-5 d-flex " bg="success" dismissible>
                            Make sure you get paid out by <span className="confirming-text pl-1"> confirming your payment options</span>
                        </Alert>
                        
                        <div className="d-flex flex-wrap">
                            <Col md="5">
                                <Card.Body >
                                    <Card.Title className="card-title mb-3 font-weight-bold">Wallet</Card.Title>
                                    <Card.Text className="text-light pl-3">
                                        ACCOUNT BALANCE
                                    </Card.Text>
                                    <Card.Text className="text-light pl-3">
                                        $ 14000
                                    </Card.Text>
                                    <Card.Text className="text-success pl-3">
                                        <span className="number">60%</span> Higher(past 7days)
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col md="7">
                                <div className="px-0">
                                    <div className="row mb-5 p-3 mr-3">
                                        <div
                                            className="row box ">
                                            <div className="col p-4 m-2 d-flex flex-column position-static">
                                                <p className="d-inline-block mb-2 text-dark">Balance chart</p>
                                                <span className="mb-0 text-light">2020.1.20</span>
                                            </div>
                                            <div className="col p-4 d-flex flex-column ">
                                                <div className="btn-group dropup ml-auto">
                                                    <button type="button"
                                                        className="btn mb-2 text-dark bg-none border-0 dropdown-toggle"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        260
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                    </ul>
                                                </div>
                                                <span className="mb-0 ml-auto text-light">+12.5(2.8%)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Summary;