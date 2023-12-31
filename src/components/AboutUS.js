// import React, {useState} from 'react'
import React from 'react'
import PropTypes from 'prop-types'


export default function AboutUS(props){

    // const [myStyle, updatemyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const [buttonText, updateButtonText] = useState("Enable Dark Mode")
    // const [buttonColor, updateButtonColor] = useState({
    //     color: "white",
    //     backgroundColor: "black",
    //     border: "0px "
    // })

    // const toggleFunc = () => {
    //     if(myStyle.color === 'black'){
    //         updatemyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         updateButtonText("Enable Light Mode")

    //         updateButtonColor({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: "0px "
    //         })
    //     }

    //     else{
    //         updatemyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         updateButtonText("Enable Dark Mode")

    //         updateButtonColor({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: "0px "
    //         })
    //     }
    // }

    
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? '#0f2139' : 'white'
    }

    console.log()

    return(
        <>
        <div className="container my-5" style = {myStyle}>
            <h2 className='mx-3 my-4' style={{paddingTop : '15px',}}>About US</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample" style = {{padding: "0px 14px 33px 14px"}}>
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    {props.heading1}
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    {props.heading2}
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    {props.heading3}
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            {/* <button className="btn btn-primary my-3" onClick={toggleFunc} style = {buttonColor}>{buttonText}</button> */}
        </div>
        </>
    )
}


AboutUS.propTypes = {
    heading1: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired,
    heading3: PropTypes.string.isRequired
}

AboutUS.defaultProps = {
    heading1 : "First Heading",
    heading2 : "Second Heading",
    heading3: "Third Heading"
}