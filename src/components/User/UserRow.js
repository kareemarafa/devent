import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

function UserRow() {
    return (
        <>
            <Row className="background-light-grey py-2 m-1 border-radius-half">
                <Col md="2">
                    <div className="cell">
                        <span className="cell-head">Contact</span>
                        <span>Email</span>
                        <span>Phone</span>
                    </div>
                </Col>
                <Col md="2">
                    <div className="cell">
                        <span className="cell-head">Company details</span>
                        <span>Address</span>
                    </div>
                </Col>
                <Col md="2">
                    <div className="cell">
                        <span>Registration VAT</span>
                    </div>
                </Col>
                <Col md="2">
                    <div className="cell">
                        <span className="cell-head">Banking details</span>
                        <span>IBAN</span>
                        <span>BIC</span>
                    </div>
                </Col>
                <Col md="2">
                    <div className="cell">
                        <span className="cell-head">Business area</span>
                        <span>Business area</span>
                    </div>
                </Col>
                <Col md="2">
                    <div className="cell">
                        <span>Block User</span>
                        <div className="actions-col">
                            <BootstrapSwitchButton
                                checked={true}
                                onlabel='On'
                                offlabel='Off'
                                width="80"
                                onstyle="primary" offstyle="dark"
                                onChange={(checked) => {
                                    // this.setState({ isUserAdmin: checked })
                                }}
                            />
                            <Button variant="danger border-0"><i
                                className="fas fa-trash-alt"/></Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default UserRow;