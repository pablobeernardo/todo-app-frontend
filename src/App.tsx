import React from 'react';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import TaskSection from './components/TaskSection';
import { GlobalStyle, Container } from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <AddTask />
        <TaskSection title="Favoritas" tasks={[]} />
        <TaskSection title="Outras" tasks={[]} />
      </Container>
    </>
  );
};

export default App;
