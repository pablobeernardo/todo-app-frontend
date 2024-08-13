import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, IconButton, Button, Card, CardContent } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Task } from '../model/task-model';

const AddTaskCard = styled(Card)`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  background-color: #fff;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

const AddTaskContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const AddTaskButton = styled(Button)`
  margin-top: 16px;
`;

const EditableTextField = styled(TextField)`
  margin-bottom: 16px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  & .MuiOutlinedInput-root {
    border-radius: 8px;
    fieldset {
      border: none;
    }
    &:hover fieldset {
      border: none;
    }
    &.Mui-focused fieldset {
      border: none;
    }
  }
`;

const TitleField = styled(EditableTextField)`
  margin-bottom: 24px;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 24px 0;
`;

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
