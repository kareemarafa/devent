import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import WalletTransactions from "../components/Wallet/WalletTransaction";
import Withdraw from "../components/Wallet/Withdraw";
import Summary from "components/Wallet/Summary";
import TransactionsForm from "components/Wallet/TransactionsForm";
import {UncontrolledAlert} from 'reactstrap';


function AdminWallet() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="pt-4 pb-4">
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <UncontrolledAlert color="success" fade={true}>
                                            Make sure you get paid out by <b> confirming your payment options</b>
                                        </UncontrolledAlert>
                                    </Col>
                                </Row>
                                <Summary/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Withdraw/>
                    </Col>
                    <Col md="12">
                        <TransactionsForm/>
                    </Col>
                    <Col md="12">
                        <WalletTransactions/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AdminWallet;
