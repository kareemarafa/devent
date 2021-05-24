import React from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import "../../assets/css/transactions.css"
function TransactionsForm() {
    return (
        <>
            <Row>
                <Col md="12">
                    <Card className="main-card border-0" bg="dark">
                        <Card.Header className="manage-header p-3 mb-3 mt-2 text-light" as="h5">Manage Transactions</Card.Header>
                        <Col md="6">
                            <Button className="mr-3  border-0 mb-4 bg-dark" >Send money</Button>
                            <Button className="btn btn-dark receive-money mb-4 text-light">Receive money</Button>
                        </Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Text className="mb-2 text-light">
                            Send an invitation to pay
                                </Form.Text>
                                <Form.Control className="input border-0 mt-2" type="text" placeholder="Search user" />
                              
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control className="input border-0 mt-4" type="text" placeholder="Amount" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control className="text-area border-0 mt-4" placeholder="communication"  as="textarea" rows={6} />
                            </Form.Group>
                            <Button variant="warning bg-warning text-dark mt-3 mb-4" type="submit">
                                Send request
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default TransactionsForm;