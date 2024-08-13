import React from 'react';
import TaskCard from './TaskCard';
import { SectionContainer, SectionTitle, TaskList } from '../styles/style';

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
