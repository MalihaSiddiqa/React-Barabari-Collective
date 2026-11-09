import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({name: "",feedback: "",});
  const [arr, setArr] = useState([]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setArr([...arr, { ...formData }]);
    setFormData({ name: "", feedback: "" });
  }

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-xl
     shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Feedback Form
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name.."
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Feedback
          </label>
          <textarea
            name="feedback"
            rows='4'
            placeholder="Enter your feedback here..."
            value={formData.feedback}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white 
          font-medium rounded-lg "
        >
          Submit
        </button>
      </form>

      {/* Feedback List */}
      {arr.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Recent Submissions
          </h3>
          <div className="flex flex-col gap-3 max-h-72 overflow-y-auto pr-1">
            {arr.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 text-base">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
