import { useState } from "react";
import OldResults from "./OldResults";

interface OldItem {
  length: number;
  weight: number;
  result: number;
}
export default function BMI() {
  const [length, setLength] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [oldResults, setOldResults] = useState<OldItem[]>([]);

  const handleResponse = () => {
    if (result < 18.5) return "Underweight";
    if (result >= 18.5 && result <= 24.99) return "Normal weight";
    if (result >= 25 && result < 29.99) return "Overweight";
    if (result >= 30) return "Obesity";
  };

  const handleCalc = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const heightInMeters = Number(length) / 100;
    const bmi = Number(weight) / (heightInMeters * heightInMeters);
    const calculatedBMI = parseFloat(bmi.toFixed(2));

    setResult(calculatedBMI);

    setOldResults((prevResults) => [...prevResults, { length, weight, result: calculatedBMI }]);
  };

  return (
    <div data-testid="bmi" className="flex flex-col">
      <h1 className="text-2xl p-4">Calculate BMI</h1>
      <form onSubmit={handleCalc} className="flex flex-col  p-4 md:self-center gap-4">
        <div>
          <p>Length (CM)</p>
          <input
            type="number"
            className="border p-2 rounded-md w-full md:w-64 md:self-center"
            onChange={(e) => setLength(Number(e.target.value))}
            data-testid="bmi-length"
          />
        </div>
        <div>
          <p>Weight (KG)</p>
          <input
            type="number"
            className="border p-2 rounded-md w-full md:w-64 md:self-center"
            onChange={(e) => setWeight(Number(e.target.value))}
            data-testid="bmi-weight"
          />
        </div>
        <button
          type="submit"
          className="border p-2 hover:bg-black hover:text-white transition-all bg-slate-300 rounded-md md:w-64 md:self-center"
          data-testid="bmi-submit"
          disabled={weight < 1 && length < 1}
        >
          Calculate
        </button>
      </form>
      {result === 0 ? null : (
        <div className="flex flex-col p-4 self-center text-2xl">
          <h1 data-testid="bmi-result">BMI Calculated: {result}</h1>
          <p className="text-center">{handleResponse()}</p>
        </div>
      )}
      <OldResults oldResults={oldResults} />
    </div>
  );
}
