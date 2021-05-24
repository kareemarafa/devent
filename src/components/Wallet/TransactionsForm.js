import React, {useState} from "react";
import {Button, Card, Col, Form, Row, Tab, Tabs} from "react-bootstrap";
import "../../assets/css/transactions.css"

function TransactionsForm() {
    const [key, setKey] = useState('send');
    return (
        <>

            <Card className="main-card">
                <Card.Header className="manage-header py-3">
                    <Card.Title>
                        <h5>Manage Transactions</h5>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md="6">
                            <Button onClick={() => setKey('send')} className="mr-3 border-0 mb-4">
                                Send Money
                            </Button>
                            <Button onClick={() => setKey('receive')} className="btn receive-money mb-4">
                                Receive Money</Button>
                        </Col>
                    </Row>
                    <Tabs activeKey={key}>
                        <Tab eventKey="send" title="Send">
                            <Row>
                                <Col>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Text className="mb-2">
                                                        <span className="text-bold">Send an Invitation to Pay</span>
                                                    </Form.Text>
                                                    <Form.Label>Search User</Form.Label>
                                                    <Form.Control className="input " type="text"
                                                                  placeholder="Enter search keyword..."/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Amount</Form.Label>
                                                    <Form.Control className="input " type="text"
                                                                  placeholder="Enter Amount here..."/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Communication</Form.Label>
                                                    <Form.Control className="text-area "
                                                                  placeholder="Enter your message here..."
                                                                  as="textarea"
                                                                  rows={6}/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button variant="warning bg-warning text-dark mt-3 mb-4" type="submit">
                                                    Send request
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="receive" title="Receive">
                            <h4>In Progress</h4>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>

        </>
    )
}

export default TransactionsForm;