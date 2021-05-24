import React from "react";
import {
    Container,
    Row,
    Col, Card,
} from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import '../assets/css/style.css';
import SearchInput from "../components/ExploreBlockchain/SearchInput";
import Statistics from "../components/ExploreBlockchain/Statistics";

function ExploreBlockchain() {
    return (
        <>
            <Container fluid>
                <Statistics/>
                <SearchInput/>
                <div className="tables">
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5 className="pt-3">Latest Blocks</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Table className="first-table"
                                           borderless
                                           responsive="sm">
                                        <tbody>
                                        <tr>
                                            <td className="background-color-grey-icon">Bk</td>
                                            <td>
                                                <p>779912</p>
                                                <span>28 se ago</span>
                                            </td>
                                            <td>
                                                Miner <p>2 Minute plan</p>
                                                <span>161 Apple($4.46)</span>
                                            </td>
                                            <td>
                                                <div className="shape-container">
                                                    <span className="pointer"/>
                                                    <span className="td-text">2 ETH</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="background-color-grey-icon">Bk</td>
                                            <td>
                                                <p>779912</p>
                                                <span>28 se ago</span>
                                            </td>
                                            <td>
                                                Miner <p>2 Minute plan</p>
                                                <span>161 Apple($4.46)</span>
                                            </td>
                                            <td>
                                                <div className="shape-container">
                                                    <span className="pointer"/>
                                                    <span className="td-text">2 ETH</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="background-color-grey-icon">Bk</td>
                                            <td>
                                                <p>779912</p>
                                                <span>28 se ago</span>
                                            </td>
                                            <td>
                                                Miner <p>2 Minute plan</p>
                                                <span>161 Apple($4.46)</span>
                                            </td>
                                            <td>
                                                <div className="shape-container">
                                                    <span className="pointer"/>
                                                    <span className="td-text">2 ETH</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="background-color-grey-icon">Bk</td>
                                            <td>
                                                <p>779912</p>
                                                <span>28 se ago</span>
                                            </td>
                                            <td>
                                                Miner <p>2 Minute plan</p>
                                                <span>161 Apple($4.46)</span>
                                            </td>
                                            <td>
                                                <div className="shape-container">
                                                    <span className="pointer"/>
                                                    <span className="td-text">2 ETH</span>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <h5 className="pt-3">Latest Transactions</h5>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Table className="first-table"
                                           borderless
                                           responsive="sm">
                                        <tbody>
                                        <tr>
                                            <td className="background-color-grey-icon">Bk</td>
                                            <td>
                                                <p>779912</p>
                                                <span>28 se ago</span>
                                            </td>
                                            <td>
                                                Miner <p>2 Minute plan</p>
                                                <span>161 Apple($4.46)</span>
                                            </td>
                                            <td>
                                                <div className="shape-container">
                                                    <span className="pointer"/>
                                                    <span className="td-text">2 ETH</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="background-color-grey-icon">Bk</td>
                                            <td>
                                                <p>779912</p>
                                                <span>28 se ago</span>
                                            </td>
                                            <td>
                                                Miner <p>2 Minute plan</p>
                                                <span>161 Apple($4.46)</span>
                                            </td>
                                            <td>
                                                <div className="shape-container">
                                                    <span className="pointer"/>
                                                    <span className="td-text">2 ETH</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="background-color-grey-icon">Bk</td>
                                            <td>
                                                <p>779912</p>
                                                <span>28 se ago</span>
                                            </td>
                                            <td>
                                                Miner <p>2 Minute plan</p>
                                                <span>161 Apple($4.46)</span>
                                            </td>
                                            <td>
                                                <div className="shape-container">
                                                    <span className="pointer"/>
                                                    <span className="td-text">2 ETH</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="background-color-grey-icon">Bk</td>
                                            <td>
                                                <p>779912</p>
                                                <span>28 se ago</span>
                                            </td>
                                            <td>
                                                Miner <p>2 Minute plan</p>
                                                <span>161 Apple($4.46)</span>
                                            </td>
                                            <td>
                                                <div className="shape-container">
                                                    <span className="pointer"/>
                                                    <span className="td-text">2 ETH</span>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
        ;
}

export default ExploreBlockchain;
