import React from "react";
import ChartistGraph from "react-chartist";
import Dropdown from 'react-bootstrap/Dropdown'
import {
    Card,
    Form,
    Container,
    Row,
    Col, InputGroup, FormControl, Button,
} from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import '../assets/css/style.css';

function ExploreBlockchain() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12" className="small-font-size">
                        <Row>
                            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="p-0 m-0">
                                <div className="light-background">
                                    <div
                                        className="height-half border-right d-flex flex-row align-items-center border-bottom">
                                        <div className="main-icon mx-2">
                                            <i className="nc-icon nc-chart-pie-35"/>
                                        </div>
                                        <div className="margin-top-2 first-table">
                                            <small className="muted text-uppercase blue-grey-color">Ether Price</small>
                                            <p>$1,327.00 @ 0.03881 BTC <span className="text-danger">(-2.07%)</span></p>
                                        </div>
                                    </div>
                                    <div className="height-half border-right d-flex flex-row align-items-center">
                                        <div className="main-icon mx-2">
                                            <i className="nc-icon nc-chart-pie-35"/>
                                        </div>
                                        <div className="margin-top-2 first-table">
                                            <small className="muted text-uppercase blue-grey-color">Market cap</small>
                                            <p>$151,929,083,301</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={4} xl={4} className="p-0 m-0">
                                <div className="light-background height-half d-flex flex-row">
                                    <div className="w-50 d-flex flex-row align-items-center border-bottom">
                                        <div className="main-icon mx-2">
                                            <i className="nc-icon nc-chart-pie-35"/>
                                        </div>
                                        <div className="margin-top-2 first-table">
                                            <small className="muted text-uppercase blue-grey-color">Transactions</small>
                                            <p>994.54 M <span className="blue-grey-color">(16.8 TPS)</span></p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-50 d-flex flex-row align-items-center justify-content-end mr-2 border-bottom">
                                        <div className="margin-top-2 first-table">
                                            <small className="muted text-uppercase blue-grey-color">Med Gas
                                                Price</small>
                                            <p>161 Gwei <span className="blue-grey-color">($4.49)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="light-background height-half d-flex flex-row">
                                    <div className="w-50 d-flex flex-row align-items-center border-bottom">
                                        <div className="main-icon mx-2">
                                            <i className="nc-icon nc-chart-pie-35"/>
                                        </div>
                                        <div className="margin-top-2 first-table">
                                            <small className="muted text-uppercase blue-grey-color">Difficulty</small>
                                            <p>4,592.32 TH</p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-50 d-flex flex-row align-items-center justify-content-end mr-2 border-bottom">
                                        <div className="margin-top-2 first-table">
                                            <small className="muted text-uppercase blue-grey-color">Hash Rate</small>
                                            <p>364,733.75 GH/s</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="p-0 m-0">
                                <Card>
                                    <Card.Body>
                                        <Row className="custom-chart">
                                            <ChartistGraph
                                                data={{
                                                    labels: ['Jan 17', 'Jan 24', 'Jan 31', 'Jan 17', 'Jan 24', 'Jan 31'],
                                                    series: [
                                                        [500, 200, 1200, 1300, 1000, 1400]
                                                    ]
                                                }}
                                                type="Line"
                                                options={{fullWidth: true, height: "120px", low: 0, showArea: false}}
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
                                        <Dropdown.Toggle
                                            className="dropdown-button filter border-0 text-dark btn">
                                            All Filters
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                    <Col className="search-filters">
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Search by Address/ Txn Hash/Block/Token/Ens"
                                                aria-label="Search by Address/ Txn Hash/Block/Token/Ens"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button variant="primary" className="search-button">
                                                    <i className="fas fa-search" />
                                                </Button>
                                            </InputGroup.Append>
                                        </InputGroup>
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
