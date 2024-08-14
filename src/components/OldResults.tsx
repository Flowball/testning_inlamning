interface Props {
  oldResults: { length: number; weight: number; result: number }[];
}

export default function OldResults({ oldResults }: Props) {
  return (
    <div>
      <h2>Old Calculations:</h2>
      <ul data-testid="bmi-oldCalc">
        {oldResults.map((calc, index) => (
          <li key={index}>
            Length: {calc.length} cm, Weight: {calc.weight} kg, BMI: {calc.result}
          </li>
        ))}
      </ul>
    </div>
  );
}
