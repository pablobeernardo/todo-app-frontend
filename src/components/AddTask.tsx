import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, IconButton, Button } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const AddTaskButton = styled(Button)`
  margin-top: 16px;
`;

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [favorite, setFavorite] = useState(false);

  const handleAddTask = () => {
    if (title) {
      // Lógica para adicionar tarefa
    }
  };

  return (
    <AddTaskContainer>
      <TitleContainer>
        <TextField
          label="Título"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <IconButton onClick={() => setFavorite(!favorite)}>
          {favorite ? <StarIcon color="primary" /> : <StarBorderIcon />}
        </IconButton>
      </TitleContainer>
      <TextField
        label="Descrição"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <AddTaskButton
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        disabled={!title}
      >
        Adicionar Tarefa
      </AddTaskButton>
    </AddTaskContainer>
  );
};

export default AddTask;
