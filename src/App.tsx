import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import TaskSection from './components/TaskSection';
import { GlobalStyle, Container } from './styles/GlobalStyles';

const mockTasks = [
  { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1', favorite: true, color: '#F28B82' },
  { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2', favorite: false, color: '#A7FFEB' },
  { id: 2, title: 'Tarefa 3', description: 'Descrição da tarefa 2', favorite: false, color: '#A7FFEB' },
  { id: 2, title: 'Tarefa 4', description: 'Descrição da tarefa 2', favorite: false, color: '#A7FFEB' },
  { id: 3, title: 'Tarefa 5', description: 'Descrição da tarefa 3', favorite: true, color: '#D7AEFB' },
  { id: 4, title: 'Tarefa 6', description: 'Descrição da tarefa 4', favorite: false, color: '#FFF475' },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(mockTasks);

  const favoriteTasks = tasks.filter(task => task.favorite);
  const otherTasks = tasks.filter(task => !task.favorite);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <AddTask />
        <TaskSection title="Favoritas" tasks={favoriteTasks} />
        <TaskSection title="Outras" tasks={otherTasks} />
      </Container>
    </>
  );
};

export default App;