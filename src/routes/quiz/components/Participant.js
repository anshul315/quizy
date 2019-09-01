import React from "react";
import {Card, CardBody, CardTitle} from "reactstrap";

const participant = (props) => {
    return(
        <div>
        <Card>
            <CardBody>
            <CardTitle>{props.participant.name}</CardTitle>
            </CardBody>
        </Card>
        </div>
    )
}

export default participant;