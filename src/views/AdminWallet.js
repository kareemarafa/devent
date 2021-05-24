import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import WalletTransactions from "../components/Wallet/WalletTransaction";
import Withdraw from "../components/Wallet/Withdraw";
import Summary from "components/Wallet/Summary";
import TransactionsForm from "components/Wallet/TransactionsForm";


function AdminWallet() {
    return (
        <>
            <Container fluid>
                <Row>
                <Col md="12">
                        <Card className="pt-4 pb-4">
                            <Card.Body>
                            <Summary/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="12">
                        <Card className="pt-4">
                            <Card.Body>
                                <Withdraw/>
                                <WalletTransactions/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="12">
                    <Card className="pt-4">
                            <Card.Body>
                            <TransactionsForm/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AdminWallet;
