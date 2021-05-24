import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";

function SearchInput() {
    return (
        <Row>
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
                                            <i className="fas fa-search"/>
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default SearchInput;