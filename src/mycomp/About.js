import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function About() {
    // Now we Will use Hooks In React to enable Dark Mode
    const [mystyle,setmystyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    // now Creating hooks for button ("Enable Dark mode")
    const [BtnText,setBtnText]=useState("Enable Light  mode");

    const ConvertingStyle=()=>{
        if(mystyle.color==="black"){
            setmystyle({
            color:"white",
            backgroundColor:"black"
        })
      
        setBtnText("Enable Dark mode")
    }
    else{
        setmystyle({
            color:"black",
            backgroundColor:"white"
        })
        setBtnText("Enable Light Mode")
    }
    }
    
    return (
        <>

        <div className="container my-3">
            <h1 className="mx-2">About Us</h1>
            <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingTwo" >
            <button className="accordion-button collapsed" type="button" style={mystyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="container my-2">
            <button className="btn btn-primary my-2" onClick={ConvertingStyle}>{BtnText}</button>

        </div>
        </>


            )
        }
