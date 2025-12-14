import React from "react";

// Filter 
function Filter(props) {

  var filterPriority = props.filterPriority;
  var setFilterPriority = props.setFilterPriority;
  var filterStatus = props.filterStatus;
  var setFilterStatus = props.setFilterStatus;
  var filterDueDate = props.filterDueDate;
  var setFilterDueDate = props.setFilterDueDate;

  var baseStyle =
    "border border-gray-200 bg-gray-50 text-sm text-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f6faa] focus:border-transparent";

  return (
    <div className="flex flex-wrap items-center gap-4">

      {/* Priority k liye filter */}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-medium text-gray-500">
          Priority
        </span>

        <select
          value={filterPriority}
          onChange={function (e) {
            setFilterPriority(e.target.value);
          }}
          className={baseStyle}
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Status filter */}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-medium text-gray-500">
          Status
        </span>

        <select
          value={filterStatus}
          onChange={function (e) {
            setFilterStatus(e.target.value);
          }}
          className={baseStyle}
        >
          <option value="All">All Status</option>
          <option value="To-Do">To-Do</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Due date filter */}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-medium text-gray-500">
          Due Date
        </span>

        <input
          type="date"
          value={filterDueDate}
          onChange={function (e) {
            setFilterDueDate(e.target.value);
          }}
          className={baseStyle + " pr-9"}
        />
      </div>

    </div>
  );
}

export default Filter;

