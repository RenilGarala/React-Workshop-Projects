import React from "react";
import { useState } from "react";
import CalButton from "./CalButton";
const Calculator = () => {
  const [value, setValue] = useState("");
  function displayValue(e) {
    setValue((value) => value + e);
  }
  function clear() {
    setValue("");
  }
  function calculate() {
      setValue(eval(value));
  }
  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="p-40">
        <table>
          <tr>
            <td colSpan={3}>
              <div className="border-2 w-full h-16 my-6 rounded-full bg-black text-gray-400 p-4 text-xl border-slate-700">
                {value}
              </div>
            </td>
            <td
              onClick={() => {
                clear();
              }}
            >
              <CalButton value="C" />
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                displayValue("7");
              }}
            >
              <CalButton value="7" />
            </td>
            <td
              onClick={() => {
                displayValue("8");
              }}
            >
              <CalButton value="8" />
            </td>
            <td
              onClick={() => {
                displayValue("9");
              }}
            >
              <CalButton value="9" />
            </td>
            <td
              onClick={() => {
                displayValue("*");
              }}
            >
              <CalButton
                value="*"
                onClick={() => {
                  multiply;
                }}
              />
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                displayValue("4");
              }}
            >
              <CalButton value="4" />
            </td>
            <td
              onClick={() => {
                displayValue("5");
              }}
            >
              <CalButton value="5" />
            </td>
            <td
              onClick={() => {
                displayValue("6");
              }}
            >
              <CalButton value="6" />
            </td>
            <td
              onClick={() => {
                displayValue("-");
              }}
            >
              <CalButton value="-" />
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                displayValue("1");
              }}
            >
              <CalButton value="1" />
            </td>
            <td
              onClick={() => {
                displayValue("2");
              }}
            >
              <CalButton value="2" />
            </td>
            <td
              onClick={() => {
                displayValue("3");
              }}
            >
              <CalButton value="3" />
            </td>
            <td
              onClick={() => {
                displayValue("+");
              }}
            >
              <CalButton value="+" />
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                displayValue("0");
              }}
            >
              <CalButton value="0" />
            </td>
            <td
              onClick={() => {
                displayValue(".");
              }}
            >
              <CalButton value="." />
            </td>
            <td
              onClick={() => {
                calculate();
              }}
              colSpan={2}
            >
              <CalButton value="=" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;