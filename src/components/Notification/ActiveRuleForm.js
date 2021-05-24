import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import React from "react";

function ActiveRuleForm() {
    return (
        <>
            <Row>
                <Col>
                    <h4 className="color-light-grey">Active Rule</h4>
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
                                                <option>Registration</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md="4">
                                        <Form.Group controlId="formTitleInput">
                                            <Form.Label className="text-dark font-weight-bold">Notification Title*</Form.Label>
                                            <Form.Control type="text"
                                                          value="Welcome to d-event"
                                                          placeholder="Enter Title..."/>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md="2">
                                        <Form.Group controlId="formActionInput">
                                            <Form.Label className="text-dark font-weight-bold">User Type*</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>All</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md="2">
                                        <Form.Group controlId="formActionInput">
                                            <Form.Label className="text-dark font-weight-bold">Device*</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>All</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md="2">
                                        <div className="switch-button padding-top-10">
                                            <Form.Label className="text-dark font-weight-bold">Push*</Form.Label>
                                            <BootstrapSwitchButton
                                                checked={true}
                                                onlabel='On'
                                                offlabel='Off'
                                                width="80"
                                                onstyle="primary" offstyle="dark"
                                                onChange={(checked) => {
                                                    // this.setState({ isUserAdmin: checked })
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="6">
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className="text-dark font-weight-bold">Your Message (max 30 words)</Form.Label>
                                            <p className="text-secondary">You can browse for events and purchase
                                                tickets!</p>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md={{span: 5, offset: 1}}>
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
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-1" md="6">
                                        <Form.Group controlId="formTitleInput">
                                            <Form.Label className="text-dark font-weight-bold">App link*</Form.Label>
                                            <Form.Control className="text-area" type="text"
                                                          value="App.d-event.io/dashboard/"
                                                          placeholder="Enter App Link..."/>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1 button-container" md={{span: 3, offset: 2}}>
                                        <Button className="margin-right-2" variant="primary">
                                            Edit Rule
                                            <i className="fas fa-pen margin-left-1"/>
                                        </Button>
                                        <Button className="border-0" variant="danger"><i className="fas fa-trash-alt "/></Button>
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

export default ActiveRuleForm;