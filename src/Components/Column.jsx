import React from "react";

function Column(props) {

  var title = props.title;
  var tasks = props.tasks;
  var onDeleteTask = props.onDeleteTask;
  var onEditTask = props.onEditTask;


  var columnTasks = tasks.filter(function (task) {
    return task.status === title;
  });

  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-gray-100 min-h-[420px] flex flex-col">

      <h2 className="text-base font-semibold text-gray-800 mb-3">
        {title}
      </h2>

      {columnTasks.length === 0 && (
        <p className="text-gray-400 text-sm">No tasks yet</p>
      )}

      <div className="space-y-3 flex-1">
        {columnTasks.map(function (task) {

          var priorityColor = "bg-green-100 text-green-600";

          if (task.priority === "High") {
            priorityColor = "bg-red-100 text-red-600";
          } else if (task.priority === "Medium") {
            priorityColor = "bg-yellow-100 text-yellow-600";
          }

          return (
            <div
              key={task.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col gap-2"
            >

              {}
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-semibold text-sm text-gray-800 truncate">
                  {task.title}
                </h4>
              </div>

              {}
              <p className="text-xs text-gray-500 line-clamp-2">
                {task.description}
              </p>

              {}
              <p className={"text-xs px-2 py-1 rounded-md w-fit " + priorityColor}>
                {task.priority}
              </p>

              {}
              <p className="text-xs text-gray-600">
                {task.dueDate}
              </p>

              {}
              <div className="flex justify-end gap-2 mt-2">

               {/*edit and delete button*/ }
                <button
                  onClick={function () {
                    onEditTask(task);
                  }}
                  className="px-3 py-1 text-[11px] font-medium rounded-lg border border-blue-100 text-blue-600 bg-blue-50 hover:bg-blue-100 transition"
                >
                  Edit
                </button>

                <button
                  onClick={function () {
                    onDeleteTask(task.id);
                  }}
                  className="px-3 py-1 text-[11px] font-medium rounded-lg border border-red-100 text-red-600 bg-red-50 hover:bg-red-100 transition"
                >
                  Delete
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Column;
