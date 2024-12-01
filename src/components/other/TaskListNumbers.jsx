import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-2xl">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-2xl">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className=" text-black font-bold text-2xl">{data.taskCounts.active}</h2>
        <h3 className="text-xl text-black font-semibold">Active Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-orange-400">
        <h2 className="text-2xl">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers