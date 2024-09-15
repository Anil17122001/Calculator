import React, { useState } from "react";
import './Calculater.css';

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "AC") {
      // Clear input and result
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        // Calculate result
        setResult(eval(input));
        setInput("");
      } catch {
        setResult("Error");
      }
    } else if (value === "+/-") {
      // Toggle sign
      setInput(prev => prev.startsWith('-') ? prev.slice(1) : '-' + prev);
    } else if (value === "%") {
      // Calculate percentage
      setInput(prev => String(parseFloat(prev) / 100));
    } else {
      // Append the value to input
      setInput(prev => prev + value);
    }
  };

  return (
    <div className="container text-center p-4 rounded" id="maincantaner">
    
      <div className="row">
        <div className="col-12 mb-3">
          <input
            type="text"
            value={input}
            readOnly
            className="form-control   text-right"
            placeholder="0"
          />
        </div>
        <div className="col-12 mb-3">
          <input
            type="text"
            value={result}
            readOnly
            className="form-control  text-right"
            placeholder="Result"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("AC")}>AC</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("+/-")}>+/-</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("%")}>%</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("/")}>÷</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("7")}>7</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("8")}>8</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("9")}>9</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("*")}>×</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("4")}>4</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("5")}>5</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("6")}>6</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("-")}>-</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("1")}>1</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("2")}>2</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("3")}>3</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("+")}>+</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <button className="btn btn-light btn-block" onClick={() => handleClick("0")}>0</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick(".")}>.</button>
        </div>
        <div className="col">
          <button className="btn btn-light" onClick={() => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}
