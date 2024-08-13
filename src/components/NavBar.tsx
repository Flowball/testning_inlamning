import { useContext } from "react";
import { Context } from "../PickContext";

export default function NavBar() {
  const [context, setContext] = useContext(Context);
  return (
    <div className="flex text-xl lg:text-3xl overflow-x-auto snap-x">
      <div
        className={`border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer ${
          context === "percentage" && "bg-black text-white"
        }`}
        onClick={() => {
          setContext("percentage");
        }}
      >
        Percentage
      </div>
      <div
        className={`border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer ${
          context === "bmi" && "bg-black text-white"
        }`}
        onClick={() => {
          setContext("bmi");
        }}
      >
        BMI
      </div>
    </div>
  );
}
