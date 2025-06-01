import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import api from '../api/api';
import Sidebar from '../components/Sidebar';

export default function Configuracoes() {
  const [config, setConfig] = useState({ horarioAbertura: '', horarioFechamento: '', diasSemana: '', senhaMestra: '' });

  useEffect(() => {
    async function fetchConfig() {
      const resp = await api.get('/config');
      setConfig(resp.data || {});
    }
    fetchConfig();
  }, []);

  const handleChange = e => setConfig({ ...config, [e.target.name]: e.target.value });

  const handleSave = async () => {
    await api.put('/config', config);
    alert('Configurações salvas!');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flex: 1, p: 4, maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>Configurações</Typography>
        <TextField label="Horário Abertura" name="horarioAbertura" value={config.horarioAbertura} onChange={handleChange} fullWidth sx={{ mb: 2 }}/>
        <TextField label="Horário Fechamento" name="horarioFechamento" value={config.horarioFechamento} onChange={handleChange} fullWidth sx={{ mb: 2 }}/>
        <TextField label="Dias da Semana" name="diasSemana" value={config.diasSemana} onChange={handleChange} fullWidth sx={{ mb: 2 }}/>
        <TextField label="Senha Mestra" name="senhaMestra" value={config.senhaMestra} onChange={handleChange} fullWidth type="password" sx={{ mb: 2 }}/>
        <Button variant="contained" onClick={handleSave}>Salvar</Button>
      </Box>
    </Box>
  );
}
