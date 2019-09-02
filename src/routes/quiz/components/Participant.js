import React from "react";
import {Card, CardBody, CardTitle} from "reactstrap";

const participant = (props) => {
    return(
        <Card style={{ width: "20rem", margin: "10px" }}>
            <CardBody>
                <CardTitle>{props.participant.name}</CardTitle>
            </CardBody>
        </Card>
    )
}

export default participant;