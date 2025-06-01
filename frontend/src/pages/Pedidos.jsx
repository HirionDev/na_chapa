import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import api from '../api/api';
import Sidebar from '../components/Sidebar';
import PedidoCard from '../components/PedidoCard';

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function fetchPedidos() {
      const resp = await api.get('/pedidos');
      setPedidos(resp.data);
    }
    fetchPedidos();
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h5" gutterBottom>Pedidos em andamento</Typography>
        <Grid container spacing={2}>
          {pedidos.map(ped => (
            <Grid item key={ped.id}>
              <PedidoCard pedido={ped} />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" sx={{ mt: 3 }}>Novo Pedido Manual</Button>
      </Box>
    </Box>
  );
}
