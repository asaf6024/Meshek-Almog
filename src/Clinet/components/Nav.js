import React from "react";
import Carousel from './Carousel'
import logo from '../img/almog.PNG'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";
import "../css/nav.css";

class Nav2 extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = (event) => {
    this.setState({
      collapsed: !this.state.collapsed
    });
    event.target.className ='active'
  };


  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}

      />
    );
    return (
      <div id="apppage">

          <div>
            
            <MDBNavbar
              color= ' lime darken-4'
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">משק אלמוג</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav right>                 
                    <MDBNavItem active>

                    <MDBNavLink to="/">בית</MDBNavLink>

                    </MDBNavItem>      
                    <MDBNavItem>
  
                      <MDBNavLink to="/about">אודות</MDBNavLink>

                    </MDBNavItem>
                    <MDBNavItem>

                      <MDBNavLink to="/vegeatbles">הירקות שלנו</MDBNavLink>

                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="/reservation">הזמנה</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/gallery">גלריה</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/contact">צור קשר</MDBNavLink>
                    </MDBNavItem>                 
                  </MDBNavbarNav>
                  <MDBNavbarNav left>
                      <img id = 'navLogo' src = {logo}></img>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

           
            {this.state.collapsed && overlay}
          </div>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-right mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    משק אלמוג, מושב אחיטוב
                    </h1>
                  <h3> מהחקלאי ישירות אליך לצלחת!</h3> 
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                   הירקות שלנו נקטפים בבוקר ובערב כבר אצל הלקוחות!<br/>
                   טרי טרי מהחממה, ארוז וממויין.<br/>
                   על איכות לא מתפשרים
                    </h6>
                    <MDBBtn color="white" href = '#Reservation'> הזמן</MDBBtn>
                    <MDBBtn outline color="white" href = '#introduction'>
                    אודותינו
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                 <Carousel
                 headline = ''
                 width = 'inherit'
                 height = '550px'
                 price = ''
                 />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Nav2;