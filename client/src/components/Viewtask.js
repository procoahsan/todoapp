import React, { useState, useEffect } from 'react';
import TaskCard from './Taskcard';
import axios from 'axios';

export default function ViewTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/tasks')
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setTasks(res.data);
        } else {
          alert('Could not fetch tasks');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    console.log(tasks);
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  };

  return (
    <div className="h-60 overflow-auto">
      {tasks.map((task) => (
        <TaskCard
          task={task}
          key={task._id}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}
