import React from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
const Introduction =() =>{

    return(
        
        <div class="container-fluid" id ="introduction">
        <MDBContainer>
        <MDBRow className="py-5">
          <MDBCol md="12" className="text-center animated slideInRight" >
          <h2 className = 'text-center font-weight-bold'>קצת עלינו</h2>
            <p>
              משק אלמוג ממוקם במושב אחיטוב בעמק חפר.<br/>
              אנו מגדלים מגוון ירקות בהשקעה רבה, מקצועיות ואהבה. <br/>
              בפעם הראשונה אנו פותחים את משקנו לכם - הלקוחות בבית <br/>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>

    )
}
export default Introduction