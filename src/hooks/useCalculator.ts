import { useState } from "react";

export default function useCalculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("0");

  function calculate(operation: string) {
    const first = Number(firstNumber);
    const second = Number(secondNumber);
    let answer = 0;

    if (operation === "add") {
      answer = first + second;
    } else if (operation === "subtract") {
      answer = first - second;
    } else if (operation === "multiply") {
      answer = first * second;
    } else if (operation === "divide") {
      answer = first / second;
    } else if (operation === "power") {
      answer = 1;
      if (second >= 0) {
        for (let i = 0; i < second; i = i + 1) {
          answer = answer * first;
        }
      } else {
        for (let i = 0; i > second; i = i - 1) {
          answer = answer / first;
        }
      }
    }

    setResult(String(answer));
  }

  function clearCalculator() {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
  }

  return {
    firstNumber, setFirstNumber,
    secondNumber, setSecondNumber,
    result, calculate, clearCalculator,
  };
}
