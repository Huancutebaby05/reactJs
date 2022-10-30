import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import useHook from "../hooks/useHook.js";
function Calculator() {
  const [number, setNumber, result, setResult, operator, setOperator] =
    useHook();
  // const choice = (e) => {
  //   setSelected(e.target.value);
  // };
  const handleClick = (e) => {
    setNumber(Number
      (e.target.value))
    console.log(typeof number);
  };
  useEffect(() => {
    switch (number) {
      case "0":
        setResult(number);
        break;
      case "1":
        setResult(number);
        break;
      case "2":
        setResult(number);
        break;
      case "3":
        setResult(number);
        break;
      case "4":
        setResult(number);
        break;
      case "5":
        setResult(number);
        break;
      case "6":
        setResult(number);
        break;
      case "7":
        setResult(number);
        break;
      case "8":
        setResult(number);
        break;
      case "9":
        setResult(number);
        
        break;
       default:
    }
  }, );
  useEffect(() => {
    switch (operator) {
     
      case "+":
        setResult(operator);
        console.log(operator);
        break;
      case "-":
        setResult(operator);
        break;
      case "*":
        setResult(operator);
        break;
      case "/":
        setResult(operator);
        break;
      case ".":
        setResult(operator);
        break;
      default:
    }
  }, [operator]);

  return (
    <div className="wrap">
      <input type="text" value={number} />
      <p className="">
        <span>Result: {setResult}</span>
      </p>
      <div>
        <button onClick={handleClick} value={"7"}>
          7
        </button>
        <button onClick={handleClick} value={"8"}>
          8
        </button>
        <button onClick={handleClick} value={"9"}>
          9
        </button>
        <button onClick={handleClick} value={"/"}>
          /
        </button>
      </div>
      <div>
        <button onClick={handleClick} value={"4"}>
          4
        </button>
        <button onClick={handleClick} value={"5"}>
          5
        </button>
        <button onClick={handleClick} value={"6"}>
          6
        </button>
        <button onClick={handleClick} value={"*"}>
          *
        </button>
      </div>
      <div>
        <button onClick={handleClick} value={"1"}>
          1
        </button>
        <button onClick={handleClick} value={"2"}>
          2
        </button>
        <button onClick={handleClick} value={"3"}>
          3
        </button>
        <button onClick={handleClick} value={"-"}>
          -
        </button>
      </div>
      <div>
        <button onClick={handleClick} value={"0"}>
          0
        </button>
        <button onClick={handleClick} value={"."}>
          .
        </button>
        <button onClick={handleClick} value={"="}>
          =
        </button>
        <button onClick={handleClick} value={"+"}>
          +
        </button>
      </div>
    </div>
  );
}

export default Calculator;
