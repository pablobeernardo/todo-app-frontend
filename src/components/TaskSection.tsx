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
  onEditTask: (task: any) => void;
  onDeleteTask: (id: number) => void;
  onChangeColor: (id: number, color: string) => void;
  onToggleFavorite: (id: number) => void;
}

const SectionContainer = styled.div`
  margin: 32px 0;
  padding: 0 16px; 
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 16px;
  font-size: 1.5rem; 
  font-weight: 500; 
`;

const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
`;

const TaskSection: React.FC<TaskSectionProps> = ({ title, tasks, onEditTask, onDeleteTask, onChangeColor, onToggleFavorite }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <TaskList>
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            onChangeColor={onChangeColor}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </TaskList>
    </SectionContainer>
  );
};

export default TaskSection;
