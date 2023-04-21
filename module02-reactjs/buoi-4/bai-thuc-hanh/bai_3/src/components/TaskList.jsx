import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setnewTask('');
  };

  const onChangeHandler = e => {
    setnewTask(e.target.value);
  };
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input
        type='text'
        name='taskInput'
        value={newTask}
        onChange={onChangeHandler}
      />
      <button type='button' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskList;
