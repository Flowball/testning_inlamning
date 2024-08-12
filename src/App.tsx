import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Context } from "./PickContext";

function App() {
  const [context, setContext] = useState("poop");
  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <Header />
      </Context.Provider>
    </>
  );
}

export default App;
