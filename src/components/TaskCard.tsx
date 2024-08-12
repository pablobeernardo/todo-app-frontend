import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton, Card, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PaletteIcon from '@mui/icons-material/Palette';

const TaskCardContainer = styled(Card)<{ cardColor: string }>`
  margin: 16px 0;
  background-color: ${(props) => props.cardColor || 'white'};
`;

const TaskCard: React.FC<{ task: any }> = ({ task }) => {
  const [color, setColor] = useState(task.color || '');

  const handleEditTask = () => {
    // Lógica para editar tarefa
  };

  const handleDeleteTask = () => {
    // Lógica para deletar tarefa
  };

  const handleChangeColor = (newColor: string) => {
    setColor(newColor);
    // Lógica para salvar a cor no backend
  };

  return (
    <TaskCardContainer cardColor={color}>
      <CardContent>
        <Typography variant="h6">
          {task.title}
          <IconButton onClick={handleEditTask}>
            <EditIcon />
          </IconButton>
        </Typography>
        <Typography variant="body2">{task.description}</Typography>
        <div>
          <IconButton onClick={() => handleChangeColor('#ffcc80')}>
            <PaletteIcon />
          </IconButton>
          <IconButton>
            <StarIcon color={task.favorite ? 'primary' : 'disabled'} />
          </IconButton>
          <IconButton onClick={handleDeleteTask}>
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </TaskCardContainer>
  );
};

export default TaskCard;
