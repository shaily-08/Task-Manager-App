import React from "react";
import { useState } from "react";

function Addtaskform(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  // submit form
  function handleSubmit(e) {
    e.preventDefault();

    var newTask = {
      id: Date.now(),
      title: title,
      description: description,
      priority: priority,
      status: "To-Do",
      dueDate: dueDate,
      createdAt: new Date().toISOString()
    };

    props.onAddTask(newTask);
    props.onClose();
  }

  var inputStyle =
    "w-full border border-gray-200 bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2f6faa] focus:border-transparent";

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">

        <h2 className="text-lg font-bold mb-4">Add New Task</h2>

        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-4">

          <input
            type="text"
            placeholder="Title"
            value={title}
            required
            onChange={function (e) {
              setTitle(e.target.value);
            }}
            className={inputStyle}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={function (e) {
              setDescription(e.target.value);
            }}
            className={inputStyle + " min-h-[80px] resize-none"}
          />

          <select
            value={priority}
            onChange={function (e) {
              setPriority(e.target.value);
            }}
            className={inputStyle}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={function (e) {
              setDueDate(e.target.value);
            }}
            className={inputStyle}
          />

          <div className="flex justify-end gap-2 pt-2">

            <button
              type="button"
              onClick={props.onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-[#2f6faa] hover:bg-[#285f90] shadow-sm"
            >
              Add Task
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Addtaskform;
