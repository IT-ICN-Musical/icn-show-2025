export default function FooterCart() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-5 rounded-t-2xl shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="select-all"
          className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
        />
        <label htmlFor="select-all" className="text-sm text-gray-300">
          All
        </label>
      </div>

      <div className="text-center">
        <span className="block text-gray-400 text-sm">Total Repayment</span>
        <strong className="text-lg text-white">SGD 50.00</strong>
      </div>

      <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg">
        Buy
      </button>
    </div>
  );
}
