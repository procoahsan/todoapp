import React, { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { Checkbox } from "@nextui-org/react";
import axios from 'axios';

export default function TaskCard({ task, onDeleteTask }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [completed, setCompleted] = useState(task.completed);
  const handleCheckbox = async () => {
    try {
      const updatedTask = { ...task, completed: !completed };
      console.log(updatedTask);
      const res = await axios.patch(`http://localhost:5000/tasks/${task._id}`, updatedTask);
      console.log(res);
      if (res.status === 200) {
        setCompleted(!completed);
      } else {
        alert('Could not update task');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTask = async () => {
    try {
      console.log(task);
      const res = await axios.delete(`http://localhost:5000/tasks/${task._id}`);
      console.log(res);
      if (res.status === 200) {
        onDeleteTask(task._id);
        setShowDeleteModal(false);
      } else {
        alert('Could not delete task');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center border bg-white rounded-md p-2 ">
      <div className="flex items-center justify-start w-52 ml-4 h-8 mr-2 ">
        <Checkbox
          isRounded
          color="warning"
          isSelected={completed}
          onChange={handleCheckbox}
          css={{zIndex: 0}}
        />
        <div className="m-4 font-semibold">{task.description}</div>
      </div>

      <div className="flex items-center justify-center w-8 h-8">
        <RxDragHandleDots2
          className="text-gray-500 hover:text-gray-600 cursor-pointer"
          onClick={() => setShowDeleteModal(true)}
        />
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white rounded-md p-4">
            <div className="text-lg font-medium mb-4">
              Are you sure you want to delete this task?
            </div>
            <div className="flex justify-end">
              <button className="text-red-600 mr-2" onClick={handleDeleteTask}>
                Delete
              </button>
              <button
                className="text-gray-600"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
