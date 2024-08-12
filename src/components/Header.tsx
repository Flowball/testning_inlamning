import { useContext } from "react";
import { Context } from "../PickContext";

export default function Header() {
  const [context, setContext] = useContext(Context);
  return (
    <header className="flex flex-col">
      <h1 className="text-5xl py-3">Calculator</h1>
      {context === "poop" ? <h2>TJENA</h2> : null}
      <div className="flex text-xl lg:text-3xl overflow-x-auto snap-x">
        <div className="border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer">
          Percentage
        </div>
        <div className="border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer">
          BMI
        </div>
        <div className="border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer">
          +
        </div>
        <div className="border p-5 w-full text-center hover:bg-black transition-all hover:text-white hover:cursor-pointer">
          -
        </div>
      </div>
    </header>
  );
}
