import React, { useState } from "react"; //React Hooks

export default function (props) {
  const handleUpClick = () => {
    // console.log("Uppercase Was Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleLoClick = () => {
    let lolo = text.toLowerCase();
    setText(lolo);
    props.showAlert("Converted To Lowercase!", "success");
  };

  const clearText = () => {
    setText("");
    props.showAlert(
      "Your Text Is Empty, Now Any Of The Below Button Is Not Working!!!",
      "danger"
    );
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const textReverse = (s) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Your Text Is Changed", "warning");
  };

  // Remove Special Characters
  const removeSymbol = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("Your Special Characters Are Removed", "warning");
  };

  const showDigits = () => {
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
    props.showAlert("Show Numbers Clcked", "success");
  };

  const reverseWord = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
    props.showAlert("Word Reverse Clcked", "success");
  };

  const handleCopy = () => {
    // alert("Your Text Is Copy");
    // var text = document.getElementById("myBox");
    // text.select();
    //navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    // This Will Remove All Selected Items
    navigator.clipboard.writeText(text);
    props.showAlert(
      "Your Text Is Copied In The Clipboard You Can Paste It Anywhere!",
      "warning"
    );
  };

  const handleFindChange = (event) =>{

    setFindText(event.target.value);
  }
  
  const handleReplaceChange = (event) =>{
    
    setReplaceText(event.target.value);

  }
  const replaceClick = () =>{
    
    setText(text.replace(findText,replaceText));

  }
  
  const replaceAllClick = () =>{

    setText(text.replaceAll(findText,replaceText));

  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space Clicked", "success");
  };
  const [text, setText] = useState("typing...");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  // const [textStyle, setTextStyle] = useState({
  //       color: 'black',
  //       backgroundColor: 'white'
  // });

  // const [btnText, setBtnText] = useState("Enable To Dark Mode")
  // const toggleMode = () =>{
  //   if(textStyle.color == 'black')
  //   {
  //     setTextStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })
  //     setBtnText("Enable To Light Mode")
  //   }
  //   else
  //   {
  //     setTextStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable To Dark Mode");
  //   }
  // }

  return (
    <>
      <div style={{ width: "1000px", margin: "auto" }}>
        {/* <div className="container" style={textStyle}> */}
        <div
          className="container"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        >
          <h3>{props.heading}</h3>
          <div className="mb-4">
            {/* <textarea style={textStyle}className="form-control" value={text} onChange={handleOnChange}rows="8"></textarea> */}
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor:
                  props.mode === "dark" ? "rgb(12 83 140)" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
              rows="8"
              id="myBox"
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleUpClick}
          >
            Convert To Uppercase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
            Convert To Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={clearText}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            type="submit"
            onClick={speak}
          >
            Speak
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={textReverse}
          >
            Reverse Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={removeSymbol}
          >
            Remove Symbol
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={showDigits}
          >
            Show Numbers
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={reverseWord}
          >
            Word Reverse
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleExtraSpaces}
          >
            Extra Space Remove
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-2 my-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button type="button" className="btn btn-primary mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Find &amp; Replace</button>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <input className="form-control my-2" type="text" placeholder="Find text" aria-label="default input example" value={findText} onChange={handleFindChange} />
                            <input className="form-control my-2" type="text" placeholder="Replace with" aria-label="default input example" value={replaceText} onChange={handleReplaceChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={replaceClick} >Replace</button>
                            <button type="button" className="btn btn-primary" onClick={replaceAllClick} >Replace all</button>
                        </div>
                    </div>
                </div>
            </div>
          {/* <button className="btn btn-primary my-2 mx-2" onClick={toggleMode}>{btnText}</button> */}
        </div>

        {/* <div className="container my-2" style={textStyle}> */}
        <div
          className="container my-2"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        >
          <h3>Your text summary</h3>
          <p>{text.split(/\s+/).filter((e) => {return e.length !== 0;}).length}{" "}Words and {text.length} Characters</p>
          {/* .split(/\s+/) -> This Will Split By White Spaces one or more (+ is for one of more white spaces) */}
          <p>{0.008 *text.split().filter((e) => {return e.length !== 0;}).length}{" "}Minutes read</p>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
        </div>
      </div>
    </>
  );
}

// text = "Debaditya";    //Wrong Way
// setText("Debaditya"); //Correct Way

// mx-2 is a bootstrap class which is given margin to the x axis

// {
//    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"></nav>
// suppose we wish to change the background light then we have to change the className
// as light
// <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>

// }

//  text.split(" ").filter((e)=>{return e.length!=0}).length:-

// filter function is a higher order method which returns a function here the returned function is a arrow function.
// If the length of the element is !=0 then it will be in the array otherwise it will not be in the array
