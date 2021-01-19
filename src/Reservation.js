import React from 'react';

import ReservationOfClinet from './Clinet/components/ReservationOfClinet'
import { useFormik } from 'formik'


// class Reservation extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       fullName: '',
//       phone: '',
//       melaphephone: '',
//       tamar: '',
//       eshkol: '',
//       sum: ''
//     }
//   }

const Reservation = () => {
const formik = useFormik({
  initialValues: {
    fullName: '',
    phone: '',
    email: ''
  }
})

  // render(){
  return (
    <div className='container fluid'>
      <div className='container'>

        {/* <label htmlFor='fullName'>שם מלא</label>
        <input type='text' name='fullName' id='fullName' onChange = {formik.handleChange} value = {formik.values.fullName}/>
        <br />

        <label htmlFor='phone'>מספר נייד</label>
        <input type='phone' name='phone' id='phone' onChange = {formik.handleChange} value = {formik.values.phone}/>
        <br/>

        <label htmlFor='email'>דואר אלקטרוני</label>
        <input type='email' name='phone' id='email' onChange = {formik.handleChange} value = {formik.values.email}/>
        <br/>
        <button type = 'submit'>הירשם</button> */}
      
        <ReservationOfClinet />

     
      </div>
    </div>
  );
}



export default Reservation;
