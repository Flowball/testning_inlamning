import { useState } from "react";

export default function BMI() {
  const [age, setAge] = useState();
  const [length, setLength] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState(0);

  const handleResponse = () => {
    if (result < 18.7) return "Underweigth";
    if (result > 18.5 && result < 24.9) return "Normal weigth";
    if (result > 25 && result < 29.9) return "Overweigth";
    if (result > 30) return "Obesity";
  };

  const handleCalc = (e) => {
    e.preventDefault();

    // Convert height from cm to meters
    const heightInMeters = Number(length) / 100;

    // Calculate BMI
    const bmi = Number(weight) / (heightInMeters * heightInMeters);

    // Set the result
    setResult(bmi.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div>
      <h1>Calculate BMI</h1>
      <form>
        <div>
          <p>Age</p>
          <input
            type="number"
            className="border"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Length (CM)</p>
          <input
            type="number"
            className="border"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Weight (KG)</p>
          <input
            type="number"
            className="border"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>
        <button
          className="border p-2"
          onClick={(e) => {
            handleCalc(e);
          }}
        >
          Calculate
        </button>
      </form>
      {result === 0 ? null : (
        <div>
          <h1>BMI Calculated: {result}</h1>
          <p>{handleResponse()}</p>
        </div>
      )}
    </div>
  );
}
