import { useState } from "react";

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<number | null>(null);
  const [num2, setNum2] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const handleAddition = () => {
    if (num1 !== null && num2 !== null) {
      const sum = num1 + num2;
      setTotal(sum);
    } else {
      setTotal(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Simple Calculator</h1>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-4">
          <input
            type="number"
            value={num1 ?? ""}
            onChange={(e) =>
              setNum1(e.target.value ? parseFloat(e.target.value) : null)
            }
            placeholder="Enter first number"
            className="border border-gray-300 p-2 rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            value={num2 ?? ""}
            onChange={(e) =>
              setNum2(e.target.value ? parseFloat(e.target.value) : null)
            }
            placeholder="Enter second number"
            className="border border-gray-300 p-2 rounded-lg w-full"
          />
        </div>

        <button
          onClick={handleAddition}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Add Numbers
        </button>

        {total !== null && (
          <div className="mt-4">
            <p className="text-xl font-semibold">Total: {total}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
