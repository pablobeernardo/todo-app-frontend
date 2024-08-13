import React, { useState } from 'react';
import { Card, IconButton, Typography, Popover, TextField, Button, CardContent } from '@mui/material';
import FormatColorFillTwoToneIcon from '@mui/icons-material/FormatColorFillTwoTone';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from 'styled-components';
import { Task } from '../model/task-model';

const TaskCardContainer = styled(Card) <{ cardColor: string }>`
  background-color: ${(props) => props.cardColor || 'white'} !important;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 30rem;
    padding: 0.5rem;
  }
`;

const TaskCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
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
    margin-top: 0.5rem;
  }
`;

const EditButton = styled(Button)`
  margin-right: 0.5rem;
`;

const ColorPopover = styled(Popover)`
  padding: 0.5rem;
`;

const ColorPopoverContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 250px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  justify-content: center;
`;

const ColorOption = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const colors = [
  '#ffcc80', '#ffb74d', '#fdd835', '#a5d6a7', '#64b5f6', '#7986cb',
  '#ba68c8', '#f48fb1', '#ff8a65', '#dce775', '#ffd54f', '#90a4ae'
];

interface TaskCardProps {
  task: Task;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
  onChangeColor: (id: number, color: string) => void;
  onToggleFavorite: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEditTask, onDeleteTask, onChangeColor, onToggleFavorite }) => {
  const [colorPopoverAnchor, setColorPopoverAnchor] = useState<null | HTMLElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleCloseColorPopover = () => {
    setColorPopoverAnchor(null);
  };

  const handleChangeColor = (color: string) => {
    onChangeColor(task.id, color);
    handleCloseColorPopover();
  };

  const handleSaveClick = () => {
    onEditTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <TaskCardContainer cardColor={task.color}>
      <CardContent>
        <TaskCardHeader>
          {isEditing ? (
            <TextField
              fullWidth
              variant="outlined"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              autoFocus
            />
          ) : (
            <Typography variant="h6">{task.title}</Typography>
          )}
          <IconButton onClick={() => onToggleFavorite(task.id)}>
            {task.favorite ? <StarIcon color="primary" /> : <StarBorderIcon />}
          </IconButton>
        </TaskCardHeader>
        <TaskCardContent>
          <Separator />
          {isEditing ? (
            <TextField
              fullWidth
              multiline
              variant="outlined"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              rows={4}
            />
          ) : (
            <Typography variant="body2">{task.description}</Typography>
          )}
        </TaskCardContent>
      </CardContent>
      <TaskCardFooter>
        <LeftFooterIcons>
          {isEditing ? (
            <>
              <EditButton variant="contained" color="primary" onClick={handleSaveClick}>
                Salvar
              </EditButton>
              <Button variant="outlined" color="secondary" onClick={handleCancelClick}>
                Cancelar
              </Button>
            </>
          ) : (
            <>
              <IconButton onClick={handleEditClick}>
                <EditOutlinedIcon />
              </IconButton>
              <IconButton onClick={(e) => setColorPopoverAnchor(e.currentTarget)}>
                <FormatColorFillTwoToneIcon />
              </IconButton>
              <ColorPopover
                anchorEl={colorPopoverAnchor}
                open={Boolean(colorPopoverAnchor)}
                onClose={() => setColorPopoverAnchor(null)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <ColorPopoverContent>
                  {colors.map((colorOption) => (
                    <ColorOption
                      key={colorOption}
                      color={colorOption}
                      onClick={() => handleChangeColor(colorOption)}
                    />
                  ))}
                </ColorPopoverContent>
              </ColorPopover>
            </>
          )}
        </LeftFooterIcons>
        <RightFooterIcons>
          <IconButton onClick={() => onDeleteTask(task.id)}>
            <ClearIcon />
          </IconButton>
        </RightFooterIcons>
      </TaskCardFooter>
    </TaskCardContainer>
  );
};

export default TaskCard;
