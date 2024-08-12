import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import TaskSection from './components/TaskSection';
import { GlobalStyle, Container } from './styles/GlobalStyles';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  const addTask = (task: any) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask: any) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const changeTaskColor = (id: number, color: string) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, color } : task)));
  };

  const toggleFavorite = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, favorite: !task.favorite } : task)));
  };

  const favoriteTasks = tasks.filter(task => task.favorite);
  const otherTasks = tasks.filter(task => !task.favorite);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <AddTask onAddTask={addTask} />
        <TaskSection 
          title="Favoritas" 
          tasks={favoriteTasks} 
          onEditTask={editTask} 
          onDeleteTask={deleteTask} 
          onChangeColor={changeTaskColor} 
          onToggleFavorite={toggleFavorite}
        />
        <TaskSection 
          title="Outras" 
          tasks={otherTasks} 
          onEditTask={editTask} 
          onDeleteTask={deleteTask} 
          onChangeColor={changeTaskColor} 
          onToggleFavorite={toggleFavorite}
        />
      </Container>
    </>
  );
};

export default App;
