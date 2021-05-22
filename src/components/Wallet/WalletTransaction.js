import React from "react";
import {Button, Card, Col, Form, Row, Table} from "react-bootstrap";

function WalletTransactions() {
    return (
        <>

            <Card>
                <Card.Header>
                    <Row>
                        <Col md={8} className="d-flex align-items-center"><h5>Transactions history</h5></Col>
                        <Col md={2}>
                            <Form.Group controlId="formActionInput">
                                <Form.Label>Select year*</Form.Label>
                                <Form.Control as="select" custom>
                                    <option>Select</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={2} className="button-col">
                            <Button variant="primary" type="submit">
                                <i className="fas fa-download"/> Balance Sheet
                            </Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Type</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Receiver</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#</td>
                            <td>Withdraw</td>
                            <td>14:00</td>
                            <td>25/07/2020</td>
                            <td>20000.00 $</td>
                            <td>BE1234567899</td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>Withdraw</td>
                            <td>14:00</td>
                            <td>25/07/2020</td>
                            <td>20000.00 $</td>
                            <td>BE1234567899</td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>Withdraw</td>
                            <td>14:00</td>
                            <td>25/07/2020</td>
                            <td>20000.00 $</td>
                            <td>BE1234567899</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        </>
    )
}

export default WalletTransactions;