 
import { Request, Response } from 'express';
import { tasks } from '../models/taskModel';
import { checkTaskTimeout } from '../utils/timeoutHandler';

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(task => task.id === id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const createTask = (req: Request, res: Response) => {
  const { title, description, duration } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    duration,
    category: 'To Do'
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex > -1) {
    const updatedTask = { ...tasks[taskIndex], ...req.body };
    // Check if task duration exceeds the timeout limit
    if (checkTaskTimeout(updatedTask)) {
      updatedTask.category = 'Timeout';
    }
    tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};
