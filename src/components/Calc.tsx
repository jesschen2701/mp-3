import useCalculator from "../hooks/useCalculator";

const operations = [
  { label: "+", action: "add" },
  { label: "-", action: "subtract" },
  { label: "*", action: "multiply" },
  { label: "/", action: "divide" },
  { label: "Power", action: "power" },
];

export default function Calc() {
  const {
    firstNumber, setFirstNumber,
    secondNumber, setSecondNumber,
    result, calculate, clearCalculator,
  } = useCalculator();

  return (
    <div id="calculator">
      <h3>JavaScript Calculator</h3>
      <p>Enter two numbers and select an operation.</p>
      <div id="calculatorRow">
        <div className="numberField">
          <label htmlFor="firstNumber">First Number</label>
          <input type="number" id="firstNumber" value={firstNumber}
            onChange={(event) => setFirstNumber(event.target.value)} />
        </div>
        <div className="numberField">
          <label htmlFor="secondNumber">Second Number</label>
          <input type="number" id="secondNumber" value={secondNumber}
            onChange={(event) => setSecondNumber(event.target.value)} />
        </div>
        <div id="operationField">
          <h4>Operation</h4>
          <div id="calculatorButtons">
            {operations.map((operation) => (
              <button key={operation.action}
                onClick={() => calculate(operation.action)}>{operation.label}</button>
            ))}
            <button onClick={clearCalculator}>Clear</button>
          </div>
        </div>
        <div id="resultField">
          <h4>Result</h4>
          <p id="result" className={Number(result) < 0 ? "negative" : ""}>{result}</p>
        </div>
      </div>
    </div>
  );
}
