import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {MDBIcon} from 'mdbreact';

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
         משק אלמוג
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>האתר בשלבי בניה</h4>
        <p>
        האופציה תיפתח בהמשך :)
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>סגור</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyModal