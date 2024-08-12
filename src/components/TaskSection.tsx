import React from 'react';
import styled from 'styled-components';
import TaskCard from './TaskCard';

const SectionContainer = styled.div`
  margin: 32px 0;
`;

const SectionTitle = styled.h2`
  margin-bottom: 16px;
`;

const TaskSection: React.FC<{ title: string; tasks: any[] }> = ({ title, tasks }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </SectionContainer>
  );
};

export default TaskSection;
