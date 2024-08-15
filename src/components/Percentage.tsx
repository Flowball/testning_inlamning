import { useState } from "react";

export default function Percentage() {
  const [percentage, setPercentage] = useState(0);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const handlePercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setPercentage(value);
  };
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value); // Convert the string to a number
    setAmount(value);
  };

  const handleCalc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const calcResult = (amount * percentage) / 100;
    setResult(calcResult);
  };
  // olik submit-metod, för tester går igenom fastän submit teknik
  return (
    <div data-testid="percentage" className="flex flex-col">
      <h1 className="text-2xl p-4">Calculate percentage</h1>
      <form className="flex flex-col gap-2 p-4 self-center w-full ">
        <p className="md:self-center text-xl">What is</p>
        <input
          type="number"
          className="border p-2 rounded-md w-full md:w-64 md:self-center"
          onChange={(e) => {
            handlePercentage(e);
          }}
          data-testid="percentage-percentage"
        />
        <p className="md:md:self-center text-xl">% of</p>

        <input
          type="number"
          className="border p-2 rounded-md w-full md:w-64 md:self-center"
          onChange={(e) => {
            handleAmount(e);
          }}
          data-testid="percentage-amount"
        />
        <p className="md:self-center text-xl">?</p>
        <button
          className="border p-2 hover:bg-black hover:text-white transition-all bg-slate-300 rounded-md md:w-64 md:self-center"
          onClick={(e) => handleCalc(e)}
          data-testid="percentage-submit"
        >
          Calculate
        </button>
      </form>
      <h2 data-testid="percentage-result" className="md:self-center text-2xl p-4">
        Result: {result}
      </h2>
    </div>
  );
}
