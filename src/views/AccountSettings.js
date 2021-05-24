import React from "react";

import {
    Card,
    Container,
    Row,
    Col, Form, Button,
} from "react-bootstrap";

function ManageContent() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Account Settings</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <h5 className="card-sub-header">Company Details</h5>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Row>
                                                        <Col md="6">
                                                            <Form.Group controlId="companyName">
                                                                <Form.Label>Company Name</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter company name here..." />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md="6">
                                                            <Form.Group controlId="vatNumber">
                                                                <Form.Label>VAT number</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter VAT number here..." />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md="6">
                                                            <Form.Group controlId="companyEmail">
                                                                <Form.Label>Company Email</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter Company Email here..." />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md="6">
                                                            <Form.Group controlId="companyPhoneNumber">
                                                                <Form.Label>Phone number</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter Phone number here..." />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <h5 className="card-sub-header">Company Address</h5>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Row>
                                                        <Col md="6">
                                                            <Form.Group controlId="companyName">
                                                                <Form.Label>Street</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter Street details here..." />
                                                            </Form.Group>
                                                            <Form.Group controlId="companyName">
                                                                <Form.Label>Country</Form.Label>
                                                                <Form.Control as="select" custom>
                                                                    <option>Select Country</option>
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md="6">
                                                            <Form.Group controlId="vatNumber">
                                                                <Form.Label>Str. number</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter VAT number here..." />
                                                            </Form.Group>
                                                            <Form.Group controlId="vatNumber">
                                                                <Form.Label>Postal Code</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter VAT number here..." />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <h5 className="card-sub-header">Business Area</h5>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Row>
                                                        <Col md="6">
                                                            <Form.Group controlId="companyName">
                                                                <Form.Label>Location</Form.Label>
                                                                <Form.Control as="select" custom>
                                                                    <option>Select</option>
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <h5 className="card-sub-header">Banking Details</h5>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Row>
                                                        <Col md="6">
                                                            <Form.Group controlId="companyName">
                                                                <Form.Label>IBAN</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter IBAN here..." />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md="6">
                                                            <Form.Group controlId="vatNumber">
                                                                <Form.Label>BIC</Form.Label>
                                                                <Form.Control type="text"
                                                                    placeholder="Enter BIC here..." />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <div className="form-footer">
                                        <Button variant="primary" type="submit">
                                            Confirm
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ManageContent;
