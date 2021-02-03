import React from 'react'
import '../css/footer.css'
const NavigationBtn =() =>{


    return (
        <a className="btn-floating btn-lg" style = {{backgroundColor: '#827717', color: 'white'}}
            href='https://www.waze.com/ul?ll=32.38633300%2C34.98637400&navigate=yes' target = '_blank'>
            <i class="fa fa-location-arrow"> ניווט</i>
        </a>

    )
}
export default NavigationBtn