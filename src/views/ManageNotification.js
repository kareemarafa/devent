import React from "react";
import {Container} from "react-bootstrap";
import '../assets/css/style.css';
import NotificationRuleForm from "../components/Notification/NotificationRuleForm";
import ActiveRuleForm from "../components/Notification/ActiveRuleForm";

function ManageNotification() {
    return (
        <>
            <Container fluid>
                <NotificationRuleForm />
                <ActiveRuleForm />
            </Container>
        </>
    );
}

export default ManageNotification;
