import {Card, Col, Row} from "react-bootstrap";
import ChartistGraph from "react-chartist";
import React from "react";

function Statistics() {
    return (
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
        </Row>
    )
}

export default Statistics;