import React from "react";
import {Button, Card, Col, Form, Row, Table} from "react-bootstrap";
import "../../assets/css/transactions.css"

function WalletTransactions() {
    return (
        <>
            <Card className="p-3">
                <Card.Header>
                    <Row>
                        <Col md={6} className="d-flex align-items-center"><h5 className="m-0">Transactions history</h5></Col>
                        <Col md={{span: 1, offset: 2}} className="pr-0 d-flex justify-content-center align-items-center">
                            <Form.Label className="font-weight-bold text-dark">Select year : </Form.Label>
                        </Col>
                        <Col md={1} className="pr-0">
                            <Form.Group className="m-0" controlId="formActionInput">
                                <Form.Control className="select-years" as="select" custom>
                                    <option>20</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={2} className="button-col pl-0">
                            <Button className="balance-sheet" type="submit">
                                <i className="fas fa-download"/> Balance Sheet
                            </Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Table className="mt-3" bordered responsive>
                        <thead className="thead-transactions">
                        <tr>
                            <th className="th font-weight-bold text-dark">Transaction ID</th>
                            <th className="th font-weight-bold text-dark">Type</th>
                            <th className="th font-weight-bold text-dark">Time</th>
                            <th className="th font-weight-bold text-dark">Date</th>
                            <th className="th font-weight-bold text-dark">Amount</th>
                            <th className="th font-weight-bold text-dark">Receiver</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#</td>
                            <td>Withdraw</td>
                            <td className="text-right">14:00</td>
                            <td className="text-right">25/07/2020</td>
                            <td className="text-right">20000.00 $</td>
                            <td>BE1234567899</td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>Withdraw</td>
                            <td className="text-right">14:00</td>
                            <td className="text-right">25/07/2020</td>
                            <td className="text-right">20000.00 $</td>
                            <td>BE1234567899</td>
                        </tr>
                        <tr>
                            <td>#</td>
                            <td>Withdraw</td>
                            <td className="text-right">14:00</td>
                            <td className="text-right">25/07/2020</td>
                            <td className="text-right">20000.00 $</td>
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