import { AppBar, Button, Card, CardContent, Popover, TextField, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";


export const AddTaskCard = styled(Card)`
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

export const AddTaskContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

export const AddTaskButton = styled(Button)`
  margin-top: 16px;
`;

export const EditableTextField = styled(TextField)`
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

export const TitleField = styled(EditableTextField)`
  margin-bottom: 24px;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 24px 0;
`;

export const NavbarContainer = styled(AppBar)`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

export const ToolbarContainer = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  @media (max-width: 37.5rem) { // 600px
    padding: 0 0.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width:100%;

  @media (max-width: 37.5rem) { // 600px
    gap: 0.5rem;
  }
`;

export const LogoImage = styled.img`
  height: 2rem;

  @media (max-width: 37.5rem) { // 600px
    height: 1.5rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 30rem;
  flex: 1;
  margin: 0 1rem;

  @media (max-width: 37.5rem) { // 600px
    margin: 0 0.5rem;
  }
`;


export const TaskCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 1rem 0;
`;

export const TaskCardContent = styled.div`
  flex: 1;
`;

export const TaskCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const LeftFooterIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const RightFooterIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export const EditButton = styled(Button)`
  margin-right: 0.5rem;
`;

export const ColorPopover = styled(Popover)`
  padding: 0.5rem;
`;

export const ColorPopoverContent = styled.div`
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

export const SectionContainer = styled.div`
  margin: 32px 0;
  padding: 0 16px; 
`;

export const SectionTitle = styled(Typography)`
  margin-bottom: 16px;
  font-size: 1.5rem; 
  font-weight: 500; 
`;

export const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
`;

