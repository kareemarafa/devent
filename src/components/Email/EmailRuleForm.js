import {Button, Card, Col, Form, Row} from "react-bootstrap";
import React from "react";

function EmailRuleForm() {
    return (
        <>
            <Row>
                <Col>
                    <h4 className="color-light-grey">Create Emailing Rules</h4>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Card>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col className="pr-1" md="2">
                                        <Form.Group controlId="formActionInput">
                                            <Form.Label className="text-dark font-weight-bold">Trigger Action*</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Select</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md="6">
                                        <Form.Group controlId="formTitleInput">
                                            <Form.Label className="text-dark font-weight-bold">Email Title*</Form.Label>
                                            <Form.Control type="text" placeholder="Title..."/>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md="2">
                                        <Form.Group controlId="formActionInput">
                                            <Form.Label className="text-dark font-weight-bold">User Type*</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Select</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-3" md="2">
                                        <Form.Group controlId="formActionInput">
                                            <Form.Label className="text-dark font-weight-bold">Device*</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Select</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="6">
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className="text-dark font-weight-bold">Your Message (max 30 words)</Form.Label>
                                            <Form.Control className="text-area" as="textarea" rows={4}/>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md={{ span: 5, offset: 1 }}>
                                        <Form.Group className="m-0">
                                            <Form.Label className="text-dark font-weight-bold">Trigger policy*</Form.Label>
                                        </Form.Group>
                                        <div>
                                            <Form.Check
                                                type="radio"
                                                id="default-radio1"
                                                name="policy"
                                                label="Send now (no specific action from user)"
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="default-radio2"
                                                name="policy"
                                                label="Send at first action time"
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="default-radio3"
                                                name="policy"
                                                label="Send at each action time"
                                            />
                                            <Form.Check
                                                type="radio"
                                                id="default-radio4"
                                                name="policy"
                                                label="Send {Hours} after action time"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1 ml-auto button-container mb-3" md={{ span: 3, offset: 2 }}>
                                        <Button className="margin-right-2" variant="primary">
                                            Add Rule
                                            <i className="fas fa-plus"/>
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EmailRuleForm;