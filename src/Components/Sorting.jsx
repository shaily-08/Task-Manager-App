import React from "react";

// Sorting 
function Sorting(props) {

  var sortBy = props.sortBy;
  var setSortBy = props.setSortBy;

  function handleChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="flex items-center gap-2 text-sm">

      <span className="font-semibold text-gray-600">
        Sort by:
      </span>

      <select
        value={sortBy}
        onChange={handleChange}
        className="border border-gray-200 bg-gray-50 text-sm text-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f6faa] focus:border-transparent"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="dueDate">Closest Due Date</option>
      </select>

    </div>
  );
}

export default Sorting;
