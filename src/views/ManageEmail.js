import React from "react";
import {
    Container,
} from "react-bootstrap";
import '../assets/css/style.css';
import EmailRuleForm from "../components/Email/EmailRuleForm";
import ActiveEmailRuleForm from "../components/Email/ActiveEmailRuleForm";

function ManageNotification() {
    return (
        <>
            <Container fluid>
                <EmailRuleForm />
                <ActiveEmailRuleForm />
            </Container>
        </>
    );
}

export default ManageNotification;
