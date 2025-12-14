import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Column from "../Column";
import Addtaskform from "../Addtaskform";
import Edittask from "../Edittask";
import Filter from "../Filter";
import Sorting from "../Sorting";
import initialTasks from "../../taskdata/task.json";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [showTaskModal, setshowTaskModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterDueDate, setFilterDueDate] = useState("");

  const [sortBy, setSortBy] = useState("newest");

  // load task from local storage
  useEffect(function () {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      setTasks(initialTasks);
      localStorage.setItem("tasks", JSON.stringify(initialTasks));
    }
  }, []);

  // save
  useEffect(function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // add task
  function addTask(task) {
    setTasks(function (prevTasks) {
      return [...prevTasks, task];
    });
  }


  // delete 
  function deleteTask(taskId) {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setTasks(tasks.filter(function (task) {
        return task.id !== taskId;
      }));
    }
  }

  // update
  function updateTask(updatedTask) {
    const updatedList = tasks.map(function (task) {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });

    setTasks(updatedList);
  }

  // filter logic
  const filteredTasks = tasks.filter(function (task) {

    const priorityMatch =
      filterPriority === "All" || task.priority === filterPriority;

    const statusMatch =
      filterStatus === "All" || task.status === filterStatus;

    const dueDateMatch =
      filterDueDate === "" || task.dueDate === filterDueDate;

    return priorityMatch && statusMatch && dueDateMatch;
  });

  // sort logic
  const sortedTasks = filteredTasks.sort(function (a, b) {

    if (sortBy === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }

    if (sortBy === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    if (sortBy === "dueDate") {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    }

    return 0;
  });

  
  return (
    <div className="min-h-screen bg-[#f3f7fb] flex flex-col">

      <Navbar addTask={function () {
        setshowTaskModal(true);
      }} />

      {showTaskModal && (
        <Addtaskform
          onClose={function () {
            setshowTaskModal(false);
          }}
          onAddTask={addTask}
        />
      )}

      {editingTask && (
        <Edittask
          task={editingTask}
          onClose={function () {
            setEditingTask(null);
          }}
          onUpdateTask={updateTask}
        />
      )}

      {}
      <div className="mx-auto max-w-5xl mt-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-xl shadow-sm px-4 py-3 gap-3">

          <Filter
            filterPriority={filterPriority}
            setFilterPriority={setFilterPriority}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            filterDueDate={filterDueDate}
            setFilterDueDate={setFilterDueDate}
          />

          <Sorting sortBy={sortBy} setSortBy={setSortBy} />

        </div>
      </div>

      {/* Columns */}
      <div className="flex-1 w-full">
        <div className="mx-auto max-w-5xl px-4 pb-8 pt-4">
          <div className="grid gap-4 md:grid-cols-3">

            {["To-Do", "In-Progress", "Completed"].map(function (status) {
              return (
                <Column
                  key={status}
                  title={status}
                  tasks={sortedTasks}
                  onDeleteTask={deleteTask}
                  onEditTask={function (task) {
                    setEditingTask(task);
                  }}
                  onUpdateTask={updateTask}
                />
              );
            })}

          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
