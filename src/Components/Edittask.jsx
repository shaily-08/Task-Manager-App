import React from "react";
import { useState } from "react";

// Edit task form 
function Edittask(props) {

  const task = props.task;
  const onClose = props.onClose;
  const onUpdateTask = props.onUpdateTask;

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(task.dueDate);

  // update task
  function handleUpdate(e) {
    e.preventDefault();

    var updatedTask = {
      id: task.id,
      title: title,
      description: description,
      priority: priority,
      status: status,
      dueDate: dueDate,
      createdAt: task.createdAt
    };

    onUpdateTask(updatedTask);
    onClose();
  }

  var inputStyle =
    "w-full border border-gray-200 bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2f6faa] focus:border-transparent";

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">

        <h2 className="text-lg font-bold mb-4">Edit Task</h2>

        <form onSubmit={handleUpdate} className="px-5 py-4 space-y-4">

          <input
            type="text"
            value={title}
            placeholder="Title"
            required
            onChange={function (e) {
              setTitle(e.target.value);
            }}
            className={inputStyle}
          />

          <textarea
            value={description}
            placeholder="Description"
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

          <select
            value={status}
            onChange={function (e) {
              setStatus(e.target.value);
            }}
            className={inputStyle}
          >
            <option>To-Do</option>
            <option>In-Progress</option>
            <option>Completed</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={function (e) {
              setDueDate(e.target.value);
            }}
            className={inputStyle}
          />

          <div className="flex justify-end gap-2">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
             >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-[#2f6faa] hover:bg-[#285f90] shadow-sm"
            >
              Save
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Edittask;