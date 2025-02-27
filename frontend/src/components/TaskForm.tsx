// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { Task } from '../types';


interface TaskFormProps {
  onTaskAdded: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Omit<Task, 'id'> = { title, description, category: 'To Do', duration };
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      });
      const savedTask = await response.json();
      onTaskAdded(savedTask);
      setTitle('');
      setDescription('');
      setDuration(0);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Task Description" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Duration (mins)" 
        value={duration} 
        onChange={e => setDuration(parseInt(e.target.value))} 
        required 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
