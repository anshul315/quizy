import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle} from "reactstrap";

const topic = (props) => {
    return (

        <Card style={{ width: "20rem", margin: "10px" }} onClick={props.topicSelected}>
            <CardBody>
                <CardTitle tag="h4">{props.topic.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                    
                </CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default topic;