import {Button, Card, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";

function Withdraw() {
    return (
        <>
            <Card className="pt-3 pb-4">
                <Card.Body>
                    <Row>
                        <Col md={6} lg={6} xl={4}>
                            <h5 className="color-light-grey font-weight-bold">Withdraw</h5>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <InputGroup className="mr-3">
                                    <FormControl
                                        placeholder="Amount"
                                        aria-label="Amount"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2" className="max text-light">MAX</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                <Button className="warning-solid-button bg-warning text-light" variant="warning">Withdraw</Button>
                            </div>
                        </Col>
                        <Col md={6} lg={6} xl={4}>
                            <h5 className="color-light-grey font-weight-bold">Automatic Withdraw</h5>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <FormControl
                                    className="mr-3"
                                    placeholder="Set withdraw threshold"
                                    aria-label="Withdraw threshold"
                                    aria-describedby="basic-addon2"
                                />
                                <Button className="warning-solid-button bg-warning text-light" variant="warning">Confirm</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col className="d-flex flex-column">
                            <small>Every time your wallet balance reaches the threshold amount, the money will be
                                automatically withdrawn yo your bank account</small>
                            <small>Your current bank account is B345 567 765 click here to update it</small>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default Withdraw;