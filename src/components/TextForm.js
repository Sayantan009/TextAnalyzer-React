import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked!");
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked!");
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleCapClick = () => {
    const arr = text.split(". ");

    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newText = arr.join(". ");
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked!");
    const newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };
  const handleColorClick = () => {
    document.getElementById("myBox").style.color = "blue";
    // setText(newText);
  };
  const handleClearColorClick = () => {
    document.getElementById("myBox").style.color = "black";
    // setText(newText);
  };
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    // console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!!!", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // const selecTed = () => {};

  const chars = text.length;
  const words = text.split(" ").length;

  return (
    <>
      <div className="mb-3 container">
        <h2>{props.heading}</h2>
        <textarea
          style={{
            background: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          id="myBox"
          rows="6"
          value={text}
          placeholder="Enter text here..."
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary   m-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary   m-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary   m-1" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary   m-1" onClick={handleCapClick}>
          Capitalize
        </button>
        <button className="btn btn-primary   m-1" onClick={handleColorClick}>
          Color
        </button>
        <button
          className="btn btn-primary   m-1"
          onClick={handleClearColorClick}
        >
          Clear Color
        </button>
        <button onClick={handleSpeakClick} className="btn btn-primary m-1">
          Speak
        </button>
        <button onClick={handleCopy} className="btn btn-primary m-1">
          Copy Text
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-primary m-1">
          White Spaces
        </button>
      </div>

      <div className="container mt-4">
        <h2>Your text summary...</h2>
        <p>
          This text contains{" "}
          <strong>
            <i>{words}</i> words
          </strong>{" "}
          and{" "}
          <strong>
            <i>{chars}</i> characters.
          </strong>
        </p>
        <p>
          The text will take <strong>{0.008 * words} minutes</strong> to read
        </p>
      </div>

      <div className="container preview">
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here..."}
        </p>
      </div>
    </>
  );
}
