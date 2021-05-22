import React from "react";

import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ManageContent() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">In Progress</Card.Title>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ManageContent;
