import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactUs = () => {
  return (
    <div className = 'container-fluid'>
    <section className="my-5">
            <h2 className = 'text-center font-weight-bold'>צור קשר</h2>
      <p className="text-center w-responsive mx-auto pb-5">

      </p>
      <MDBRow>
        <MDBCol lg="6" className = 'text-center' style = {{margin: 'auto'}}>
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container text-center"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.227890503103!2d34.98850018835722!3d32.386252294378565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d1118faa4eecd%3A0xc1b328d71e2dfe84!2z15TXkNeV16jXnywg15DXl9eZ15jXldeR!5e0!3m2!1siw!2sil!4v1593352136458!5m2!1siw!2sil"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" /> <a class="btn-floating btn-lg btn-blue " href="https://www.waze.com/ul?ll=32.38633300%2C34.98637400&amp;navigate=yes">נווט</a>
              </MDBBtn>
              <p>רחוב האורן</p>
              <p className="mb-md-0">מושב אחיטוב</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>אהובה - 050-2820402</p>
              <p className="mb-md-0">ראשון - חמישי, 8:00-20:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="mb-md-0">asafalmog119@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
    </div>
  );
}

export default ContactUs;