import React from "react";

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FormGroup } from "reactstrap";
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
                      <i class="nc-icon nc-chart-pie-35"></i>
                    </Col>
                    <Col className="margin-top-2 first-table">
                      <small class="muted ">ETHER PRICE</small>
                      <p class="text">$1,7.40 @ 0.01 BTC<span
                      >(-2.07%)</span></p>
                    </Col>
                  </Row>
                  <div class="border border-style"></div>
                  <Row>
                    <Col md="0" className="main-icon margin-right-4 margin-left-2 ">
                      <i class="nc-icon nc-chart-pie-35"></i>
                    </Col>
                    <Col className="margin-top-2 first-table">
                      <small class="muted ">MARKET CAP</small>
                      <p class="text">$1,902.00 @ 0.301 </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              </Col>
              <Col md="6" className="pl-0 pr-0">
              <Card>
                <Card.Body>
                  <Row>
                    <Col md="0" className="main-icon margin-top-4 margin-left-4">
                      <i class="nc-icon nc-chart-pie-35"></i>
                    </Col>
                    <Col className="margin-top-2 second-table">
                      <small class="muted ">ETHER PRICE</small>
                      <p class="text">$1,7.40 @ 0.01 BTC<span
                      >(-2.07%)</span></p>
                    </Col>
                    <Col md="0" className="main-icon margin-top-4 margin-left-4">
                      <i class="nc-icon nc-chart-pie-35"></i>
                    </Col>
                    <Col className="margin-top-2 second-table">
                      <small class="muted ">ETHER PRICE</small>
                      <p class="text">$1,7.40 @ 0.01 BTC<span
                      >(-2.07%)</span></p>
                    </Col>
                  </Row>
                  <div class="border border-style"></div>
                  <Row>
                    <Col md="0" className="main-icon margin-right-4 margin-left-2">
                      <i class="nc-icon nc-chart-pie-35"></i>
                    </Col>
                    <Col className="margin-top-2 second-table">
                      <small class="muted ">MARKET CAP</small>
                      <p class="text">$1,902.00 @ 0.301 </p>
                    </Col>
                    <Col md="0" className="main-icon margin-right-4 margin-left-2">
                      <i class="nc-icon nc-chart-pie-35"></i>
                    </Col>
                    <Col className="margin-top-2 second-table">
                      <small class="muted ">MARKET CAP</small>
                      <p class="text">$1,902.00 @ 0.301 </p>
                    </Col>
                  </Row>

                </Card.Body>
              </Card>
              </Col>
              <Col md="3" className="pl-0">
              <Card>
                <Card.Body>
                  <Row>
                    <Col md="0" className="main-icon margin-top-4 margin-left-2">
                      <i class="nc-icon nc-chart-pie-35"></i>
                    </Col>
                    <Col className="margin-top-2 first-table">
                      <small class="muted ">ETHER PRICE</small>
                      <p class="text">$1,7.40 @ 0.01 BTC<span
                      >(-2.07%)</span></p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="0" className="main-icon margin-right-4 margin-left-2 ">
                      <i class="nc-icon nc-chart-pie-35"></i>
                    </Col>
                    <Col className="margin-top-2 first-table">
                      <small class="muted ">MARKET CAP</small>
                      <p class="text">$1,902.00 @ 0.301 </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              </Col>
              
            </Row>
          </Col>
          <Col md="12" className="pl-4 pr-2">
          <Form >
              <Form.Group >
                <Form.Row>
                  <Form.Label className="all-filters" column="lg" lg={2}>
                    AllFilters
                  </Form.Label>
                  <Col>
                    <Form.Control className="input-search" size="lg" type="text" placeholder="Search by Address/ Txn Hash/Block/Token/Ens" />
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
                      161 Gwei($4.46)
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
                      161 Gwei($4.46)
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
                      161 Gwei($4.46)
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
                      161 Gwei($4.46)
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
                      161 Gwei($4.46)
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
                      161 Gwei($4.46)
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
                    <td>Oxgansoptr12a <span>
                      28 se ago
                    </span>
                    </td>
                    <td>From <p>xoxoxo12xx</p>
                     <span> To <p>Gwei($4.46)</p></span>
                    </td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td className="background-color-grey-icon">Tx</td>
                    <td>Oxgansoptr12a
                      <span>
                        28 se ago
                      </span>
                    </td>
                    <td>From <p>xoxoxo12xx</p>
                    <span> To <p>Gwei($4.46)</p></span>
                    </td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td className="background-color-grey-icon">Tx</td>
                    <td>Oxgansoptr12a
                      <span>
                        28 se ago
                      </span>
                    </td>
                    <td>From <p>xoxoxo12xx</p>
                    <span> To <p>Gwei($4.46)</p></span>
                    </td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td className="background-color-grey-icon">Tx</td>
                    <td>Oxgansoptr12a
                      <span>
                        28 se ago
                      </span>
                    </td>
                    <td>From <p>xoxoxo12xx</p>
                    <span> To <p>Gwei($4.46)</p></span>
                    </td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td className="background-color-grey-icon">Tx</td>
                    <td>Oxgansoptr12a
                      <span>
                        28 se ago
                      </span>
                    </td>
                    <td>From <p>xoxoxo12xx</p>
                    <span> To <p>Gwei($4.46)</p></span>
                    </td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td className="background-color-grey-icon">Tx</td>
                    <td>Oxgansoptr12a
                      <span>
                        28 se ago
                      </span>
                    </td>
                    <td>From <p>xoxoxo12xx</p>
                    <span> To <p>Gwei($4.46)</p></span>
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
