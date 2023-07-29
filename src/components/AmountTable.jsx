const AmountTable = ({ amounts }) => {
  const total = amounts?.reduce((acc, amount) => acc + amount.amountInUSD, 0);

  return (
    <div className="flex flex-col items-center">
      <table className="border-collapse border w-64">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">Original Amount</th>
            <th className="border border-gray-500 p-2">Amount In USD</th>
          </tr>
        </thead>
        <tbody>
          {amounts?.map(
            ({ inputAmount, selectedCurrency, amountInUSD }, index) => (
              <tr key={index}>
                <td className="border border-gray-500 p-2">
                  {inputAmount} {selectedCurrency}
                </td>
                <td className="border border-gray-500 p-2">{amountInUSD}</td>
              </tr>
            )
          )}
        </tbody>
        {amounts?.length > 0 && (
          <tfoot>
            <tr>
              <td colSpan={2} className="border border-gray-500 p-2 font-bold">
                Total = {total} USD
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default AmountTable;
