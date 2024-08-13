import { useState } from "react";

export default function BMI() {
  const [length, setLength] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  const handleResponse = () => {
    if (result < 18.7) return "Underweigth";
    if (result > 18.5 && result <= 24.99) return "Normal weigth";
    if (result >= 25 && result < 29.99) return "Overweigth";
    if (result > 30) return "Obesity";
  };

  const handleCalc = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const heightInMeters = Number(length) / 100;

    const bmi = Number(weight) / (heightInMeters * heightInMeters);
    setResult(parseFloat(bmi.toFixed(2)));
  };

  return (
    <div>
      <h1>Calculate BMI</h1>
      <form>
        <div>
          <p>Length (CM)</p>
          <input
            type="number"
            className="border"
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
            data-testid="bmi-length"
          />
        </div>
        <div>
          <p>Weight (KG)</p>
          <input
            type="number"
            className="border"
            onChange={(e) => {
              setWeight(Number(e.target.value));
            }}
            data-testid="bmi-weigth"
          />
        </div>
        <button
          className="border p-2"
          onClick={(e) => {
            handleCalc(e);
          }}
          data-testid="bmi-submit"
        >
          Calculate
        </button>
      </form>
      {result === 0 ? null : (
        <div>
          <h1 data-testid="bmi-result">BMI Calculated: {result}</h1>
          <p>{handleResponse()}</p>
        </div>
      )}
    </div>
  );
}
