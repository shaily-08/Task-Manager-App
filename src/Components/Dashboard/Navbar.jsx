import React from 'react'

//navbar component which incluudes title and addd button
function Navbar(props) {
  function handleAddTask(){
    props.addTask();
  }

  return (
        <nav className="w-full bg-[#2f6faa] text-white">
          <div className="mx-auto max-w-5xl flex items-center justify-between px-4 md:px-6 py-4">
      <h1 className="text-2xl font-semibold tracking-tight">Task Manager App</h1>

      <button onClick={handleAddTask}
         className="bg-[#ff6a55] hover:bg-[#ff806e] text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition"
         > Add New Task </button>
         </div>
    </nav>
  )
}

export default Navbar;