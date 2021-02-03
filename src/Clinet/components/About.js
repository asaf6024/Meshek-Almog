import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import aboutObj from '../obj/aboutObj'

const About = () => {

  const loadProfiles =aboutObj.map((about) =>{        
    return(
      <MDBCol md='4' style = {{margin: 'auto'}} >
      <MDBCard >
        <MDBCardImage
          hover
          overlay='white-light'
          className='card-img-top'
          src={about.image}
          alt='man'
        />

        <MDBCardBody cascade className='text-center'>
          <MDBCardTitle className='card-title'>
            <strong>{about.name}</strong>
          </MDBCardTitle>

          <p className='font-weight-bold myRedText'>{about.jobTitle}</p>

          <MDBCardText>
            {' '}
          </MDBCardText>

          <MDBCol md='12' className='d-flex justify-content-center'>
            <MDBBtn rounded floating color='fb' href = {about.facebook} target = {'_blank'}>
              <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
            </MDBBtn>

            <MDBBtn rounded floating color='tw' href ={`tel:${about.phone}`}>
              <MDBIcon size='lg' fab icon='' ><i class="fa fa-phone"></i></MDBIcon>
            </MDBBtn>

            {/* <MDBBtn rounded floating color='dribbble'>
              <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
            </MDBBtn> */}
          </MDBCol>

          
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    )
})
  return (
    <div class="container-fluid" id = 'About_us'>
      <MDBContainer>
      <h2 className = 'text-center font-weight-bold'>מי אנחנו</h2>
    <MDBRow>
 


{loadProfiles}

    </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default About;