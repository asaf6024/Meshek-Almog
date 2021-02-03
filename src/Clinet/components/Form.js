import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '../css/reservation.css'
import MyModal from './MyModal'
import Button from 'react-bootstrap/Button';

const Form = (props) => {
  // console.log('roductsLogs', props.productsDetails)

  const [modalShow, setModalShow] = React.useState(false);


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">מלא את הפרטים הבאים</p>
            <div className="grey-text">
              <MDBInput label="שם מלא" icon="user" group type="text" validate error="wrong"
                success="right" />
              <MDBInput label="דואר אלקטרוני" icon="envelope" group type="email" validate error="wrong"
                success="right" />
              <MDBInput label="טלפון" icon="envelope" group type="tel" require validate error="wrong"
                success="right" />
              <MDBInput label="ההזמנה שלך:" disabled icon="tag" success="right">


                <div style={{ textAlign: 'right' }}>
                  <p> {props.productsDetails.cucamberQnt > 0 ?
                    '- מלפפון: ' + props.productsDetails.cucamberQnt + ' שקיות של 1.5 ק"ג | ' + props.productsDetails.cucamberQnt * 10 + ' ש"ח ' : ''}
                  </p>
                  <p> {props.productsDetails.witneyQnt > 0 ?
                    '- שרי וויטני: ' + props.productsDetails.witneyQnt + ' סלסלאות | ' + props.productsDetails.witneyQnt * 15 + ' ש"ח ' : ''}
                  </p>
                  <p> {props.productsDetails.lobelloQnt > 0 ?
                    '- שרי לובלו: ' + props.productsDetails.lobelloQnt + ' סלסלאות | ' + props.productsDetails.lobelloQnt * 20 + ' ש"ח ' : ''}
                  </p>
                  <p> {props.productsDetails.eshkolQnt > 0 ?
                    '- שרי אשכולות: ' + props.productsDetails.eshkolQnt + ' סלסלאות | ' + props.productsDetails.eshkolQnt * 10 + ' ש"ח ' : ''}
                  </p>
                  <p> {props.productsDetails.tomatoQnt > 0 ?
                    '- עגבניה: ' + props.productsDetails.tomatoQnt + ' סלסלאות | ' + props.productsDetails.tomatoQnt * 10 + ' ש"ח ' : ''}
                  </p>
                  <p> {props.productsDetails.yellowQnt > 0 ?
                    '- שרי צהוב: ' + props.productsDetails.yellowQnt + ' סלסלאות | ' + props.productsDetails.yellowQnt * 10 + ' ש"ח ' : ''}
                  </p>

                  <h5>  סה"כ סכום ההזמנה: <b>{props.productsDetails.totalPrice} ₪</b></h5>
                </div>

              </MDBInput>
              <MDBInput type="textarea" rows="3" label="הערות" icon="pencil-alt" />
            </div>
            <div>
              <div className="text-center">
                <MyModal />
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  שלח <MDBIcon far icon="paper-plane" className="ml-1" />
                </Button>
                <MyModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Form;