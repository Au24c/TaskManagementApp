import './styles/App.css';
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CategorySlider from './components/CategorySlider';

export interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: number;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [category, setCategory] = useState('To Do');

  useEffect(() => {
    // Fetch tasks from backend API
    const fetchTasks = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="app">
      <h1>Task Management Application</h1>
      <CategorySlider selectedCategory={category} onSelectCategory={setCategory} />
      <TaskForm onTaskAdded={(newTask: Task) => setTasks([...tasks, newTask])} />
      <TaskList tasks={tasks.filter(task => task.category === category)} />
    </div>
  );
};

export default App;
