import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Task } from '../model/task-model';
import { IconButton, Divider } from '@mui/material';
import { AddTaskCard, AddTaskContainer, TitleContainer, TitleField, EditableTextField, AddTaskButton } from '../styles/style';

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const handleAddTask = () => {
    if (title && description) {
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        favorite,
        color: '#fff',
      };
      onAddTask(newTask);
      setTitle('');
      setDescription('');
      setFavorite(false);
      setIsEditingTitle(false);
      setIsEditingDescription(false);
    }
  };

  return (
    <AddTaskCard>
      <AddTaskContainer>
        <TitleContainer onClick={() => setIsEditingTitle(true)}>
          <TitleField
            label="Título"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsEditingTitle(false)}
            required
            autoFocus={isEditingTitle}
            InputProps={{ readOnly: !isEditingTitle }}
          />
          <IconButton onClick={() => setFavorite(!favorite)}>
            {favorite ? <StarIcon color="primary" /> : <StarBorderIcon />}
          </IconButton>
        </TitleContainer>
        <Divider />
        <TitleContainer onClick={() => setIsEditingDescription(true)}>
          <EditableTextField
            placeholder="Criar Notas..."
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={() => setIsEditingDescription(false)}
            multiline
            rows={4}
            required
            autoFocus={isEditingDescription}
            InputProps={{ readOnly: !isEditingDescription }}
          />
        </TitleContainer>
        <AddTaskButton
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          disabled={!title || !description}
        >
          Adicionar Tarefa
        </AddTaskButton>
      </AddTaskContainer>
    </AddTaskCard>
  );
};

export default AddTask;
