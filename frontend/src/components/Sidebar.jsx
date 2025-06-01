import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth, boxSizing: 'border-box', background: '#181818', color: '#fff'
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItemButton onClick={() => navigate('/pedidos')}>
          <ListItemIcon><ListAltIcon sx={{ color: "#FFA500" }} /></ListItemIcon>
          <ListItemText primary="Pedidos" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/cardapio')}>
          <ListItemIcon><RestaurantMenuIcon sx={{ color: "#FFA500" }} /></ListItemIcon>
          <ListItemText primary="Cardápio" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/relatorios')}>
          <ListItemIcon><AssessmentIcon sx={{ color: "#FFA500" }} /></ListItemIcon>
          <ListItemText primary="Relatórios" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/configuracoes')}>
          <ListItemIcon><SettingsIcon sx={{ color: "#FFA500" }} /></ListItemIcon>
          <ListItemText primary="Configurações" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/usuarios')}>
          <ListItemIcon><GroupIcon sx={{ color: "#FFA500" }} /></ListItemIcon>
          <ListItemText primary="Usuários" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/chat-ia')}>
          <ListItemIcon><ChatIcon sx={{ color: "#FFA500" }} /></ListItemIcon>
          <ListItemText primary="Atendimento IA" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
