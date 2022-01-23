import React,{useState} from "react";


export default function Textform(props) {
    // Now Creating Function For the Event listner

const handleupClick=()=>{
    // console.log("You have Been Clicked this file")
    // console.log("uppercase was clicked "+Text)
    let newText=Text.toUpperCase();
    setText(newText)
    props.showalert("Ow Text has Been Coverted To UpperCase","Success");
    document.title="Upper Case"

}

const handleloClick=()=>{
  let newText=Text.toLowerCase();
  setText(newText);
  props.showalert("wow Text Has Been Coverted to LowerCase","danger");
  document.title="Lower Case";
  


}
const cleartext=()=>{
  let newText='';
  setText(newText);
  props.showalert("Wried Its Clear up","primary");
  
}

// const handleonChange=()=>{
//     console.log("You have handleonc")
    
// }

// But Here Problem is We cannot type anything Because Value={text is already assigned} fire the event onchange
const handleonChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
}


    const [Text, setText] = useState("Enter Your TExt here ");
    // text="enter your name "---wrong way to update the text in the form
    // setText=("Enter Your name beta state ");


    
  return (
    <>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#02022a'}}>

      <h1>{props.heading}</h1>

      <div className="mb-3">
      <textarea className="form-control" value={Text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#02022a'}} ></textarea>

      </div>
      <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert To UpperCase</button>
      <button className="btn btn-primary" onClick={handleloClick} > Convert To lowerCase</button>

      <button className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#02022a'}} >
      <h1>Your Text Summary</h1>
      <p>{Text.split(" ").length} words and {Text.length} characters </p>

      <p>{0.008*Text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{Text}</p>




    </div>
    </>

  );
}
