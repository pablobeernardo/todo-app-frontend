import React from 'react';
import styled from 'styled-components';
import { IconButton, Card, CardContent, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PaletteIcon from '@mui/icons-material/Palette';


const TaskCardContainer = styled(Card)<{ cardColor: string }>`
  background-color: ${(props) => props.cardColor || 'white'};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  min-height: 400px; /* Ajuste a altura mínima */
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 30rem;
    padding: 0.5rem; /* Ajuste o padding em telas menores */
  }
`;

const TaskCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    /* Mantém a mesma linha em telas menores */
    flex-wrap: nowrap;
  }
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 1rem 0;
`;

const TaskCardContent = styled.div`
  flex: 1;
`;

const TaskCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media (max-width: 768px) {
    /* Mantém os ícones na mesma linha em telas menores */
    flex-wrap: nowrap;
  }
`;

const LeftFooterIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const RightFooterIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem; /* Ajusta o espaçamento no rodapé */
  }
`;

const TaskCard: React.FC<{ task: any }> = ({ task }) => {
  const [color, setColor] = React.useState(task.color || '');

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
        <TaskCardHeader>
          <Typography variant="h6">{task.title}</Typography>
          <IconButton>
            <StarIcon color={task.favorite ? 'primary' : 'disabled'} />
          </IconButton>
        </TaskCardHeader>
        <TaskCardContent>
          <Separator />
          <Typography variant="body2">{task.description}</Typography>
        </TaskCardContent>
      </CardContent>
      <TaskCardFooter>
        <LeftFooterIcons>
          <IconButton onClick={handleEditTask}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleChangeColor('#ffcc80')}>
            <PaletteIcon />
          </IconButton>
        </LeftFooterIcons>
        <RightFooterIcons>
          <IconButton onClick={handleDeleteTask}>
            <DeleteIcon />
          </IconButton>
        </RightFooterIcons>
      </TaskCardFooter>
    </TaskCardContainer>
  );
};

export default TaskCard;