import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import UserRow from "../components/User/UserRow";

function Security() {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h4 className="color-light-grey">Manage Pros Users</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card className="pb-3">
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1 ml-2" md="2">
                                            <Form.Group controlId="formTitleInput">
                                                <Form.Label className="text-dark font-weight-bold">Search User*</Form.Label>
                                                <Form.Control type="text"
                                                    placeholder="Search..." />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                                <Row>
                                    <Col>
                                        <h5 className="text-dark font-weight-bold ml-2">User Details</h5>
                                    </Col>
                                </Row>
                                <UserRow />
                                <Row className="mt-5">
                                    <Col>
                                        <h5 className="text-dark font-weight-bold ml-2">Edited pros</h5>
                                    </Col>
                                </Row>
                                <UserRow />
                                <UserRow />
                                <UserRow />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Security;
