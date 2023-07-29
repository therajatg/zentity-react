import { useState } from "react";
import "./App.css";
import AmountTable from "./components/AmountTable";
import CurrencyForm from "./components/CurrencyForm";

function App() {
  const [amounts, setAmounts] = useState([]);

  const amountHistoryHandler = (newAmount) => {
    setAmounts((prev) => {
      return [...prev, newAmount];
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4 mb-8">
        Currency Handler
      </h1>
      <div className="flex flex-row justify-center items-start gap-12 flex-wrap">
        <CurrencyForm amountHistoryHandler={amountHistoryHandler} />
        <AmountTable amounts={amounts} />
      </div>
    </div>
  );
}

export default App;
