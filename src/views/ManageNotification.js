import React from "react";
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import '../assets/css/style.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

function ManageNotification() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h4 className="color-light-grey">Create New Notification Rule</h4>
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
                                                <Form.Label>Trigger Action*</Form.Label>
                                                <Form.Control as="select" custom>
                                                    <option>Select</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="4">
                                            <Form.Group controlId="formTitleInput">
                                                <Form.Label>Title*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Title..."/>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="2">
                                            <Form.Group controlId="formActionInput">
                                                <Form.Label>User Type*</Form.Label>
                                                <Form.Control as="select" custom>
                                                    <option>Select</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="2">
                                            <Form.Group controlId="formActionInput">
                                                <Form.Label>Device*</Form.Label>
                                                <Form.Control as="select" custom>
                                                    <option>Select</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="2">
                                            <div className="switch-button padding-top-10">
                                                <Form.Label>Push*</Form.Label>
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
                                                <Form.Label>Your Message (max 30 words)</Form.Label>
                                                <Form.Control as="textarea" rows={4}/>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md={{ span: 5, offset: 1 }}>
                                            <Form.Group className="m-0">
                                                <Form.Label>Trigger policy*</Form.Label>
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
                                        <Col className="pr-1" md="6">
                                            <Form.Group controlId="formTitleInput">
                                                <Form.Label>App link*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter App Link..."/>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1 button-container" md={{ span: 3, offset: 2 }}>
                                            <Button className="margin-right-2" variant="primary">
                                                Add Rule
                                                <i className="fas fa-plus"/>
                                            </Button>
                                        </Col>
                                        <Col className="pr-1" md="1" />
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
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
                                                <Form.Label>Trigger Action*</Form.Label>
                                                <Form.Control as="select" custom>
                                                    <option>Registration</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="4">
                                            <Form.Group controlId="formTitleInput">
                                                <Form.Label>Notification Title*</Form.Label>
                                                <Form.Control type="text"
                                                              value="Welcome to d-event"
                                                              placeholder="Enter Title..."/>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="2">
                                            <Form.Group controlId="formActionInput">
                                                <Form.Label>User Type*</Form.Label>
                                                <Form.Control as="select" custom>
                                                    <option>All</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="2">
                                            <Form.Group controlId="formActionInput">
                                                <Form.Label>Device*</Form.Label>
                                                <Form.Control as="select" custom>
                                                    <option>All</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md="2">
                                            <div className="switch-button padding-top-10">
                                                <Form.Label>Push*</Form.Label>
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
                                                <Form.Label>Your Message (max 30 words)</Form.Label>
                                                <p className="text-secondary">You can browse for events and purchase tickets!</p>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1" md={{ span: 5, offset: 1 }}>
                                            <Form.Group className="m-0">
                                                <Form.Label>Trigger policy*</Form.Label>
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
                                                <Form.Label>App link*</Form.Label>
                                                <Form.Control type="text"
                                                              value="App.d-event.io/dashboard/"
                                                              placeholder="Enter App Link..."/>
                                            </Form.Group>
                                        </Col>
                                        <Col className="pr-1 button-container" md={{ span: 3, offset: 2 }}>
                                            <Button className="margin-right-2" variant="primary">
                                                Edit Rule
                                                <i className="fas fa-pen margin-left-1"/>
                                            </Button>
                                            <Button variant="danger"><i className="fas fa-trash-alt"/></Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ManageNotification;
