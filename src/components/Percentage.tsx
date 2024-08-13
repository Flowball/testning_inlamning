import { useState } from "react";

export default function Percentage() {
  const [percentage, setPercentage] = useState(0);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const handlePercentage = (e) => {
    setPercentage(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleCalc = (e) => {
    e.preventDefault();
    const calcResult = (Number(amount) * Number(percentage)) / 100;
    setResult(calcResult);
  };
  return (
    <div>
      <h1>Calculate percentage</h1>
      <form className="flex  gap-2 items-center">
        <p>What is</p>
        <input
          type="number"
          className="border"
          onChange={(e) => {
            handlePercentage(e);
          }}
          data-testid="percentage-percentage"
        />
        <p>% of</p>

        <input
          type="number"
          className="border"
          onChange={(e) => {
            handleAmount(e);
          }}
          data-testid="percentage-amount"
        />
        <p>?</p>
        <button
          className="border p-2 hover:bg-black hover:text-white transition-all"
          onClick={(e) => handleCalc(e)}
          data-testid="percentage-submit"
        >
          Calculate
        </button>
      </form>
      <h2 data-testid="percentage-result">Result: {result}</h2>
    </div>
  );
}
