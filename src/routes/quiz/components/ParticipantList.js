import React from "react";
import Participant from "./Participant";

const participantList = (props) => {

    return(
        <div>
            {
                props.participants.map((participant => <Participant key={participant.user_id} participant={participant} />))
            }
        </div>
    )
}

export default participantList;