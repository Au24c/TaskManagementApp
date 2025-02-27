// src/components/TaskItem.tsx
import React from 'react';
import { Task } from '../types';


interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Duration: {task.duration} mins</p>
    </div>
  );
};

export default TaskItem;
