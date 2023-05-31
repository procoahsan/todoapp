import React,{useState} from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

export default function Addtask() {
  const [task, setTask] = useState({description: '', completed: false})
  const taskButton = () => {
    if(task.description.trim() === ''){
      toast.error('Please enter a task')
    }
    else{
      axios.post('http://localhost:5000/tasks',task)
      .then(res => {
        console.log(res)
        if(res.status === 200){
          toast.success('Task added successfully')
          setTask({description: '', completed: false})
        }
        else{
          toast.error('Task could not be added')
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  
  return (
    <div className="bg-gray-800 shadow-md rounded-md p-4 sm:p-6 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/4">
      <h1 className="text-2xl font-bold mb-4 text-white">Add Todo</h1>
      <div className="flex flex-col sm:flex-row items-center">
        <input
          type="text"
          placeholder="Enter task here..."
          className="bg-gray-700 border-gray-600 border rounded-md py-2 px-4 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto text-white"
          value={task.description}
          onChange={e => setTask({...task, description: e.target.value })}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  rounded-md py-2 px-6 h-12 flex items-center justify-center" onClick={taskButton}>
          Add Task
        </button>
      </div>
      <Toaster />
    </div>
  )
}
