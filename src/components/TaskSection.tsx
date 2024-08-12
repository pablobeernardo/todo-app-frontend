
import React from 'react';
import TaskCard from './TaskCard';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Task {
  id: number;
  title: string;
  description: string;
  favorite: boolean;
  color: string;
}

interface TaskSectionProps {
  title: string;
  tasks: Task[];
}

const SectionContainer = styled.div`
  margin: 32px 0;
  padding: 0 16px; /* Adiciona padding lateral */
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 16px;
  font-size: 1.5rem; /* Ajuste o tamanho da fonte conforme necessário */
  font-weight: 500; /* Ajuste o peso da fonte se necessário */
`;

const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start; /* Alinha à esquerda por padrão */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Centraliza os cards em telas menores */
  }
`;

const TaskSection: React.FC<TaskSectionProps> = ({ title, tasks }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <TaskList>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </TaskList>
    </SectionContainer>
  );
};

export default TaskSection;