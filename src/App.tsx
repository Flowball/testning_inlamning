import { useState } from "react";
import "./App.css";
import Addition from "./components/Addition";
import BMI from "./components/BMI";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Percentage from "./components/Percentage";
import Subtraction from "./components/Subtraction";
import { Context } from "./PickContext";

function App() {
  const [context, setContext] = useState("");

  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <Header />
        <NavBar />
        {context === "percentage" ? <Percentage /> : null}
        {context === "bmi" ? <BMI /> : null}
        {context === "addition" ? <Addition /> : null}
        {context === "subtraction" ? <Subtraction /> : null}
      </Context.Provider>
    </>
  );
}

export default App;
