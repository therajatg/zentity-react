import { useEffect, useState } from "react";
import axios from "axios";

const CurrencyForm = ({ amountHistoryHandler }) => {
  const [currencyData, setCurrencyData] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [inputAmount, setInputAmount] = useState("");
  const [amountInUSD, setAmountInUSD] = useState(0);

  useEffect(() => {
    getCyrrencyData();
  }, []);

  const getCyrrencyData = async () => {
    const res = await axios.get(
      "https://v6.exchangerate-api.com/v6/0a84b2508f0c1390a34c45bc/latest/USD"
    );
    setCurrencyData(res.data.conversion_rates);
  };

  const currencyChangeHandler = (e) => {
    setSelectedCurrency(e.target.value);

    setAmountInUSD(
      inputAmount ? inputAmount / currencyData[e.target.value] : 0
    );
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
    setAmountInUSD(e.target.value / currencyData[selectedCurrency]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputAmount === "") {
      return;
    }
    amountHistoryHandler({ inputAmount, selectedCurrency, amountInUSD });
    setInputAmount("");
    setAmountInUSD(0);
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <form className="md:flex items-start gap-x-4" onSubmit={submitHandler}>
        <div className="flex items-start">
          <select
            className="border rounded-lg p-2"
            onChange={currencyChangeHandler}
          >
            {Object.keys(currencyData).map((currency) => (
              <option
                className="cursor-pointer"
                value={currency}
                key={currency}
              >
                {currency}
              </option>
            ))}
          </select>
          <div>
            <input
              type="number"
              placeholder="Enter amount"
              className="border border-s-0 rounded-lg px-4 py-2"
              onChange={amountChangeHandler}
              value={inputAmount}
              required
            />
            <br />
            {inputAmount !== "" && (
              <span className="text-gray-400">{amountInUSD} USD</span>
            )}
          </div>
        </div>
        <div className="min-w-full mt-4 md:min-w-0 md:mt-0">
          <button
            type="submit"
            className="rounded-lg px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrencyForm;
