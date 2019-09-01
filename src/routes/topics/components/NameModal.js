/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

const nameModal = (props) => {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Please Enter your name</ModalHeader>
          <ModalBody>
            <Input placeholder="Your Name" name="name" onChange={props.nameChange}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.dismissModal}>Let's Play</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}
export default nameModal;