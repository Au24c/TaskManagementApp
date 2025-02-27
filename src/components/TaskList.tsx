
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';


interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.length ? tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      )) : <p>No tasks in this category.</p>}
    </div>
  );
};

export default TaskList;
