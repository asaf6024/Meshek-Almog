import React from 'react'


const BackgroundImg =(props) =>{
    let myBackImg = {
        background:`url('${props.canvasImg}') center center/cover fixed no-repeat`,
        marginBottom: props.marginBottom,
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '200px',


        
    }

    return(
        
        <div class = 'container-fluid' style = {myBackImg}></div>
    )
}
export default BackgroundImg