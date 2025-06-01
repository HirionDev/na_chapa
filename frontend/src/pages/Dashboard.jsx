import React from 'react';
import Sidebar from '../components/Sidebar';
import { Typography, Box } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bem-vindo ao sistema Na Chapa!
        </Typography>
        <Typography variant="h6">
          Use o menu lateral para acessar pedidos, cardápio, relatórios, configurações e IA.
        </Typography>
      </Box>
    </Box>
  );
}
