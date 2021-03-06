import React from 'react'
import '../css/footer.css'

class Footer extends React.Component{
    constructor(){
        super()
        this.state ={
            Name: 'asaf'
        }
    }

    render(){
        return(
            <div className = 'container-fluid footer'>
            <div className="mt-5 pt-5 pb-5">
<div className="container">
  <div className="row">
    <div className="col-lg-5 col-xs-12 about-company">
      <h3>משק אלמוג</h3>
      <div className="col copyright" style = {{paddingRight: '0'}}>
      <p><small className="text-white-50">כל הזכויות שמורות ©  2020</small></p>
    </div>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">קישורים</h4>
        <ul className="m-0 p-0">
          <li><a href= "/about" className = 'white-text'>מי אנחנו</a></li>
          <li><a href="/vegeatbles" className = 'white-text'>הירקות שלנו</a></li>
          <li><a href="/reservation" className = 'white-text'>הזמנה</a></li>
          <li><a href="/gallery" className = 'white-text'>גלריה</a></li>
          <li><a href="contact" className = 'white-text'>צור קשר</a></li>
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">מיקום</h4>
      <p>מושב אחיטוב, רחוב האורן</p>
      <div className = 'contentFooter'>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i><a href = 'tel:972-50-282-0405'>(972) 50-282-0405</a> </p>
      <p><i className="fas fa-envelope"></i> <a href = 'mailto:asafalmog119@gmail.com'>asafalmog119@gmail.com</a></p>
      </div>
    </div>
  </div>

</div>
</div>
</div>
        )
    }
}
export default Footer
