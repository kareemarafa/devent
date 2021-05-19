import React from "react";
import ChartistGraph from "react-chartist";
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Users metrics</Card.Title>
                <p className="card-category">Last 30 days</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 800,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,

                      chartPadding: {
                        right: 50,
                      },
                      showArea: true,
                      showLine: false,
                      showPoint: false,
                      fullWidth: true,
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"/>
                  Total Users <i className="fas fa-circle text-danger"/>
                  New Users <i className="fas fa-circle text-warning"/>
                  New Pros
                </div>
                <hr/>
                <div className="stats">
                  <i className="fas fa-history"/>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Devices</Card.Title>
                <p className="card-category">OS breakdown</p>
              </Card.Header>
              <Card.Body>
                <div
                    className="ct-chart ct-perfect-fourth"
                    id="chartPreferences"
                >
                  <ChartistGraph
                      data={{
                        labels: ["53%", "36%", "11%"],
                        series: [53, 36, 11],
                      }}
                      type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"/>
                  Android <i className="fas fa-circle text-danger"/>
                  IOS <i className="fas fa-circle text-warning"/>
                  Web Pro
                </div>
                <hr/>
                <div className="stats">
                  <i className="far fa-clock"/>
                  Updated daily
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Online Users</Card.Title>
                <p className="card-category">24 Hours Connectivity</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                      data={{
                        labels: [],
                        series: [],
                      }}
                      type="Line"
                      options={{
                        low: 0,
                        high: 800,
                        showArea: false,
                        height: "245px",
                        axisX: {
                          showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: false,
                        showPoint: false,
                        fullWidth: true,
                        chartPadding: {
                          right: 50,
                        },
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"/>
                  Users Online <i className="fas fa-circle text-danger"/>
                  Pros Online
                </div>
                <hr/>
                <div className="stats">
                  <i className="fas fa-history"/>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">All Sales</Card.Title>
                <p className="card-category">All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          542,
                          443,
                          320,
                          780,
                          553,
                          453,
                          326,
                          434,
                          568,
                          610,
                          756,
                          895,
                        ],
                        [
                          412,
                          243,
                          280,
                          580,
                          453,
                          353,
                          300,
                          364,
                          368,
                          410,
                          636,
                          695,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"/>
                  Tickets <i className="fas fa-circle text-danger"/>
                  Items
                </div>
                <hr/>
                <div className="stats">
                  <i className="fas fa-check"/>
                  Updating every 3 seconds
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Turnover</Card.Title>
                <p className="card-category">Service fees</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                      data={{
                        labels: [],
                        series: [],
                      }}
                      type="Bar"
                      options={{
                        seriesBarDistance: 10,
                        axisX: {
                          showGrid: false,
                        },
                        height: "245px",
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            seriesBarDistance: 5,
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"/>
                  Withdraw <i className="fas fa-circle text-danger"/>
                  Transactions <i className="fas fa-circle text-warning"/>
                  Marketing (coming soon)
                </div>
                <hr/>
                <div className="stats">
                  <i className="far fa-clock"/>
                  Updated hourly
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Top Event Region</Card.Title>
                <p className="card-category">By Cities</p>
              </Card.Header>
              <Card.Body>
                <div
                    className="ct-chart ct-perfect-fourth"
                    id="chartPreferences"
                >
                  <ChartistGraph
                      data={{
                        labels: [],
                        series: [],
                      }}
                      type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"/>
                  Brussels <i className="fas fa-circle text-danger"/>
                  Namur <i className="fas fa-circle text-warning"/>
                  Cairo
                </div>
                <hr/>
                <div className="stats">
                  <i className="far fa-clock"/>
                  Updated daily
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Sales per Ticket Type</Card.Title>
                <p className="card-category">Ticket types</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                      data={{
                        labels: [],
                        series: [],
                      }}
                      type="Line"
                      options={{
                        low: 0,
                        high: 800,
                        showArea: false,
                        height: "245px",
                        axisX: {
                          showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: true,
                        showPoint: true,
                        fullWidth: true,
                        chartPadding: {
                          right: 50,
                        },
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"/>
                  Entry Tickets <i className="fas fa-circle text-danger"/>
                  Beverage Tickets
                </div>
                <hr/>
                <div className="stats">
                  <i className="fas fa-history"/>
                  Updating daily
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Sales per Event Types</Card.Title>
                <p className="card-category">All tickets and items including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                      data={{
                        labels: [],
                        series: [],
                      }}
                      type="Line"
                      options={{
                        low: 0,
                        high: 800,
                        showArea: false,
                        height: "245px",
                        axisX: {
                          showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: true,
                        showPoint: true,
                        fullWidth: true,
                        chartPadding: {
                          right: 50,
                        },
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"/>
                  Festival or Fair <i className="fas fa-circle text-danger"/>
                  Convention <i className="fas fa-circle text-warning"/>
                  Conference
                <i className="fas fa-circle text-warning"/>
                  Game or competition
                <i className="fas fa-circle text-warning"/>
                  Rally
                <i className="fas fa-circle text-warning"/>
                  Tournament
                <i className="fas fa-circle text-warning"/>
                  Sport Tour
                </div>
                <hr/>
                <div className="stats">
                  <i className="fas fa-check"/>
                  Updating daily
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
