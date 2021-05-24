import {Button, Card, Col, Form, Row} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import React from "react";

function NotificationRuleForm() {
    return (
        <>
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
                                            <Form.Label className="text-dark font-weight-bold">Trigger Action*</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Select</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col className="pr-1" md="4">
                                        <Form.Group controlId="formTitleInput">
                                            <Form.Label className="text-dark font-weight-bold">Title*</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Title..."/>
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
                                    <Col className="pr-1" md="2">
                                        <Form.Group controlId="formActionInput">
                                            <Form.Label className="text-dark font-weight-bold">Device*</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Select</option>
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
                                    <Col className="pr-1" md="6">
                                        <Form.Group controlId="formTitleInput">
                                            <Form.Label className="text-dark font-weight-bold">App link*</Form.Label>
                                            <Form.Control className="text-area" type="text" placeholder="Enter App Link..."/>
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
        </>
    )
}

export default NotificationRuleForm;