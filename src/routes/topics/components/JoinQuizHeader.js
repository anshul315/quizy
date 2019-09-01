import React from "react";

// reactstrap components
import { Container, Input, Button } from "reactstrap";

// core components

const JoinQuizHeader = (props) => {
let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../../assets/img/bg11.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <p className="h2">Have a quiz code</p>  
          <p className="h5">Enter the code below to join in</p>  
          <Input type="text" placeholder="Quiz ID" name="join_quiz_id" value={props.join_quiz_id} onChange={props.handleInputChange} />
          <Button onClick={props.joinQuiz} className="btn btn-primary"> Join Quiz </Button>
        </Container>
      </div>
    </>
  );
}

export default JoinQuizHeader;
