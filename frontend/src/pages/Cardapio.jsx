import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import api from '../api/api';
import Sidebar from '../components/Sidebar';

export default function Cardapio() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function fetchCardapio() {
      const resp = await api.get('/cardapio');
      setCategorias(resp.data);
    }
    fetchCardapio();
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h5" gutterBottom>Cardápio</Typography>
        {categorias.map(cat => (
          <Box key={cat.id} sx={{ mb: 3 }}>
            <Typography variant="h6">{cat.nome}</Typography>
            <Grid container spacing={2}>
              {cat.itens.map(item => (
                <Grid item key={item.id}>
                  <Card sx={{ minWidth: 200 }}>
                    <CardContent>
                      <Typography variant="subtitle1">{item.nome}</Typography>
                      <Typography variant="body2">{item.descricao}</Typography>
                      <Typography variant="body2">R$ {item.preco}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
        <Button variant="contained" sx={{ mt: 3 }}>Novo Item</Button>
      </Box>
    </Box>
  );
}
