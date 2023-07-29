import { useMemo } from "react";

const AmountTable = ({ amounts }) => {
  const total = amounts?.reduce((acc, amount) => acc + amount, 0);

  return (
    <div className="flex flex-col items-center">
      <table className="border-collapse border w-64">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">Amounts</th>
          </tr>
        </thead>
        <tbody>
          {amounts?.map((amount, index) => (
            <tr key={index}>
              <td className="border border-gray-500 p-2">{amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border border-gray-500 p-2 font-bold">
              Total: {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AmountTable;
