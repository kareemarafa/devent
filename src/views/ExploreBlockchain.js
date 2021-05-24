import React from "react";
import ChartistGraph from "react-chartist";
import Dropdown from 'react-bootstrap/Dropdown'
import {
    Card,
    Form,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import '../assets/css/style.css';

function ExploreBlockchain() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Row>
                            <Col md="3" className="pr-0">
                                <Card>
                                    <Card.Body>
                                        <Row>
                                            <Col md="0" className="main-icon margin-top-4 margin-left-2">
                                                <i className="nc-icon nc-chart-pie-35" />
                                            </Col>
                                            <Col className="margin-top-2 first-table">
                                                <small className="muted ">ETHER PRICE</small>
                                                <p className="text">$1,7.40 @<span
                                                >(-2.07%)</span></p>
                                            </Col>
                                        </Row>
                                        <div className="border border-style" />
                                        <Row>
                                            <Col md="0" className="main-icon margin-right-4 margin-left-2 ">
                                                <i className="nc-icon nc-chart-pie-35" />
                                            </Col>
                                            <Col className="margin-top-2 first-table">
                                                <small className="muted ">MARKET CAP</small>
                                                <p className="text">$1,902.00 @ 0.301 </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="6" className="pl-0 pr-0">
                                <Card >
                                    <Card.Body>
                                        <Row>
                                            <Col md="0" className="main-icon margin-top-4 margin-left-2">
                                                <i className="nc-icon nc-chart-pie-35" />
                                            </Col>
                                            <Col className="margin-top-2 second-table">
                                                <small className="muted ">ETHER PRICE</small>
                                                <p className="text">$1,7.40 @ 0.01 BTC<span
                                                >(-2.07%)</span></p>
                                            </Col>
                                            <Col md="0" className="main-icon margin-top-4 margin-left-2">
                                                <i className="nc-icon nc-chart-pie-35" />
                                            </Col>
                                            <Col className="margin-top-2 second-table">
                                                <small className="muted ">ETHER PRICE</small>
                                                <p className="text">$1,7.40 @ 0.01 BTC<span
                                                >(-2.07%)</span></p>
                                            </Col>
                                        </Row>
                                        <div className="border border-style" />
                                        <Row>
                                            <Col md="0" className="main-icon margin-right-4 margin-left-2">
                                                <i className="nc-icon nc-chart-pie-35" />
                                            </Col>
                                            <Col className="margin-top-2 second-table">
                                                <small className="muted ">MARKET CAP</small>
                                                <p className="text">$1,902.00 @ 0.301 </p>
                                            </Col>
                                            <Col md="0" className="main-icon margin-right-4 margin-left-2">
                                                <i className="nc-icon nc-chart-pie-35" />
                                            </Col>
                                            <Col className="margin-top-2 second-table">
                                                <small className="muted ">MARKET CAP</small>
                                                <p className="text">$1,902.00 @ 0.301 </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="3" className="pl-0">
                                <Card>
                                    <Card.Body>
                                        <Row>
                                            <ChartistGraph
                                                data={{
                                                    labels: [
                                                        'Monday', 'Tuesday'
                                                    ],
                                                    series: [
                                                        [2, 1, 3.5, 7, 3],
                                                    ],
                                                }}
                                                type="Line"
                                            />
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="12" className="pl-4 pr-2">
                        <Form>
                            <Form.Group>
                                <Form.Row>
                                    <Dropdown className="d-flex bg-light">
                                            <Dropdown.Toggle className="dropdown-button border-0  text-dark p-3 btn btn-light">
                                                All Filters
                                            </Dropdown.Toggle>
                                        </Dropdown>
                                    <Col className="search-filters">
                                        <Form.Control className="input-search " size="lg" type="text"
                                            placeholder="Search by Address/ Txn Hash/Block/Token/Ens" />
                                            <i class="fas fa-search"></i>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Row className="tables">
                        <Col className="pl-2">
                            <Table className="first-table" responsive="sm">
                                <tbody>
                                    <tr className="head">Latest Blocks</tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Bk</td>
                                        <td>779912 <span>
                                            28 se ago
                                        </span>
                                        </td>
                                        <td>Miner <p>2 Minute plan</p>
                                            <span>
                                                161 Apple($4.46)
                                            </span>
                                        </td>
                                        <td>2 ETH</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Bk</td>
                                        <td>779912
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>Miner <p>2 Minute plan</p>
                                            <span>
                                                161 Apple($4.46)
                                            </span>
                                        </td>
                                        <td>2 ETH</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Bk</td>
                                        <td>779912
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>Miner <p>2 Minute plan</p>
                                            <span>
                                                161 Apple($4.46)
                                            </span>
                                        </td>
                                        <td>2 ETH</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Bk</td>
                                        <td>779912
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>Miner <p>2 Minute plan</p>
                                            <span>
                                                161 Apple($4.46)
                                            </span>
                                        </td>
                                        <td>2 ETH</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Bk</td>
                                        <td>779912
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>Miner <p>2 Minute plan</p>
                                            <span>
                                                161 Apple($4.46)
                                            </span>
                                        </td>
                                        <td>2 ETH</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Bk</td>
                                        <td>779912
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>Miner <p>2 Minute plan</p>
                                            <span>
                                                161 Apple($4.46)
                                            </span>
                                        </td>
                                        <td>2 ETH</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <Table className="second-table" responsive="sm">
                                <tbody>
                                    <tr className="head">Latest Blocks</tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Tx</td>
                                        <td>Kareem <span>
                                            28 se ago
                                        </span>
                                        </td>
                                        <td>From <p>Mahmoud</p>
                                            <span> To <p>Apple($4.46)</p></span>
                                        </td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Tx</td>
                                        <td>Kareem
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>From <p>Mahmoud</p>
                                            <span> To <p>Apple($4.46)</p></span>
                                        </td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Tx</td>
                                        <td>Kareem
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>From <p>Mahmoud</p>
                                            <span> To <p>Apple($4.46)</p></span>
                                        </td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Tx</td>
                                        <td>Kareem
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>From <p>Mahmoud</p>
                                            <span> To <p>Apple($4.46)</p></span>
                                        </td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Tx</td>
                                        <td>Kareem
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>From <p>Mahmoud</p>
                                            <span> To <p>Apple($4.46)</p></span>
                                        </td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td className="background-color-grey-icon">Tx</td>
                                        <td>Kareem
                                            <span>
                                                28 se ago
                                            </span>
                                        </td>
                                        <td>From <p>Mahmoud</p>
                                            <span> To <p>Apple($4.46)</p></span>
                                        </td>
                                        <td>1000</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    );
}

export default ExploreBlockchain;
